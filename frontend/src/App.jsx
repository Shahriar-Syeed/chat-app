import { RouterProvider } from "react-router-dom";
import router from "./routers/router.jsx";
import { useAuthStore } from "./store/useAuthStore.js";
import { useEffect } from "react";
import {Loader} from "lucide-react";

function App() {
  const { authUser, checkAuth, isCheckingAuth } = useAuthStore();



  useEffect(() => {
    checkAuth();
  }, [checkAuth]);
  console.log(authUser);


  

  if(isCheckingAuth && !authUser){
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader className="size-10 animate-spin" />
      </div>
    );
  }



  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
