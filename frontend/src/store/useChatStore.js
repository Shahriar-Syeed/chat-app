import { create } from "zustand"
import { axiosInstance } from "../libs/axios";
import apiUrl from "../apiUrl/apiUrl";
import toast from "react-hot-toast";

export const useChatStore = create((set) => ({
messages: [],
users: [],
selectedUser: null,
isUsersLoading: false,
isMessagesLoading: false,

getUsers: async() => {
  set({ isUsersLoading: true});

  try {
    const response = await axiosInstance.get(apiUrl.messagesUsers);
    set({users: response.data}); 
    toString.success("getting user successful");

    
  } catch (error) {
    toast.error(error.response.data.message);
    console.log("Error in update image:", error);
  } finally{
    set({isUsersLoading: false});
  }
},
getMessages: async(userId) => {
  set({ isMessagesLoading: true});

  try {
    const response = await axiosInstance.get(apiUrl.messages + `/${userId}`);
    set({messages: response.data}); 
    toString.success("getting user successful");

    
  } catch (error) {
    toast.error(error.response.data.message);
    console.log("Error in update image:", error);
  } finally{
    set({isMessagesLoading: false});
  }
},
setSelectedUser: (selectedUser) => set({selectedUser}),
})); 
