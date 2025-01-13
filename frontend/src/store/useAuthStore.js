import {create} from "zustand"
import { axiosInstance } from "../libs/axios";
import apiUrl from "../apiUrl/apiUrl";

export const useAuthStore = create((set) => ({

  authUser:null,
  isSigningUp:false,
  isLoggingIn: false,
  isUpdatingProfile: false,


  isCheckingAuth: true,

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
  }
})
);

