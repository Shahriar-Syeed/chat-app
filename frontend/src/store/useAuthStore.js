import { create } from "zustand";
import { axiosInstance } from "../libs/axios";
import apiUrl from "../apiUrl/apiUrl";
import toast from "react-hot-toast";
import { io } from "socket.io-client";

const BASE_URL = import.meta.env.MODE === "development" ? "http://localhost:5001": "/";

export const useAuthStore = create((set, get) => ({
  authUser: null,
  isSigningUp: false,
  isLoggingIn: false,
  isUpdatingProfile: false,
  isCheckingAuth: true,
  onlineUsers: [],
  socket: null,

  checkAuth: async () => {
    try {
      const response = await axiosInstance.get(apiUrl.check);

      set({ authUser: response.data });
      get().connectSocket();
    } catch (error) {
      console.log("Error in checkAuth:", error);
      set({ authUser: null });
    } finally {
      set({ isCheckingAuth: false });
    }
  },

  signup: async (data) => {
    set({ isSigningUp: true });
    try {
      const response = await axiosInstance.post(apiUrl.signUp, data);
      set({ authUser: response.data });
      toast.success("Account created successfully");
      get().connectSocket();
    } catch (error) {
      toast.error(error.response.data.message);
      console.log("Error in signup:", error);
      set({ authUser: null });
    } finally {
      set({ isSigningUp: false });
    }
  },

  logout: async () => {
    try {
      const response = await axiosInstance.post(apiUrl.logout);
      set({ authUser: null });
      toast.success("Logout successfully");
      get().disconnectSocket();
    } catch (error) {
      // toast.error(error.response.data.message);
      console.log("Error in logout:", error);
    }
  },

  login: async (data) => {
    set({ isLoggingIn: true });
    try {
      const response = await axiosInstance.post(apiUrl.login, data);
      set({ authUser: response.data });
      toast.success("Logged in successfully");

      get().connectSocket();
    } catch (error) {
      toast.error(error.response.data.message);
      console.log("Error in logged in:", error);
    } finally {
      set({ isLoggingIn: false });
    }
  },

  updatingProfile: async (data) => {
    set({ isUpdatingProfile: true });
    console.log(data, "imageDATA");
    try {
      const response = await axiosInstance.put(apiUrl.updateProfile, data);
      set({ authUser: response.data });
      toast.success("Update image successful");
    } catch (error) {
      toast.error(error.response.data.message);
      console.log("Error in update image:", error);
    } finally {
      set({ isUpdatingProfile: false });
    }
  },

  connectSocket: () => {
    
    const { authUser } = get();
    if (!authUser || get().socket?.connected) return;
    const socket = io(BASE_URL,{
      query:{
        userId: authUser._id,
      },
    });

    socket.connect();
    set({socket:socket});

    socket.on("getOnlineUsers", (userIds)=>{
      set({onlineUsers: userIds});
    });
  },
  disconnectSocket: () => {

    if(get().socket?.connected) get().socket.disconnect();

  },
}));
