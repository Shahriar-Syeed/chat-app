import { RouterProvider } from "react-router-dom";
import router from "./routers/router.jsx";
import { useAuthStore } from "./store/useAuthStore.js";
import { useEffect } from "react";

function App() {
  const {authUser, checkAuth} = useAuthStore();

  useEffect(()=>{
    checkAuth();
  }, [checkAuth]);
  console.log(authUser);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
