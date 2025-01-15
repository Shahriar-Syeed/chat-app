import {create} from "zustand"
import { axiosInstance } from "../libs/axios";
import apiUrl from "../apiUrl/apiUrl";
import toast from "react-hot-toast";

export const useAuthStore = create((set) => ({

  authUser:null,
  isSigningUp:false,
  isLoggingIn: false,
  isUpdatingProfile: false,


  isCheckingAuth: true,

  onlineUsers: [],

  checkAuth: async ()=>{
    try {
      const response = await axiosInstance.get(apiUrl.check);

      set({authUser:response.data});
    } catch (error) {
      console.log("Error in checkAuth:", error);
      set({authUser: null});
    } finally{
      set({isCheckingAuth:false});
    }
  },

  signup: async (data)=>{
    set({isSigningUp: true})
    try {
      const response = await axiosInstance.post(apiUrl.signUp, data);
      set({authUser: response.data}); 
      toString.success("Account created successfully");


    } catch (error) {
      toast.error(error.response.data.message);
      console.log("Error in signup:", error);
      set({authUser: null});
    } finally{
      set({isSigningUp: false});
    }
  },

  logout: async ()=>{
    try {
      const response = await axiosInstance.post(apiUrl.logout);
      set({authUser: null}); 
      toString.success("Logout successfully");

      
    } catch (error) {
      toast.error(error.response.data.message);
      console.log("Error in logout:", error);
    } 
  },

  login: async (data)=>{
    set({isLoggingIn: true});
    try {
      const response = await axiosInstance.post(apiUrl.login, data);
      set({authUser: response.data}); 
      toString.success("Logged in successfully");

      
    } catch (error) {
      toast.error(error.response.data.message);
      console.log("Error in logged in:", error);
    } finally{
      set({isLoggingIn: false});

    }
  },

  updatingProfile: async (data)=>{
    set({isUpdatingProfile: true});
    try {
      const response = await axiosInstance.post(apiUrl.updateProfile, data);
      set({authUser: response.data}); 
      toString.success("Update image successful");

      
    } catch (error) {
      toast.error(error.response.data.message);
      console.log("Error in update image:", error);
    } finally{
      set({isUpdatingProfile: false});

    }
  },
})
);

