import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../pages/RootLayout.jsx";
import HomePage from "../pages/HomePage.jsx";
import SignUpPage from "../pages/SignUpPage.jsx";
import LoginPage from "../pages/LoginPage.jsx";
import SettingsPage from "../pages/SettingsPage.jsx";
import ProfilePage from "../pages/ProfilePage.jsx";



const router = createBrowserRouter([
  {
    path:"/",
    element: <RootLayout/>,

    children:[
      {
        index:true,
        element: <HomePage/>
      },
      {
        path:"signup",
        element: <SignUpPage/>
      },
      {
        path:"login",
        element: <LoginPage/>
      },
      {
        path:"logout",
        element: <ProfilePage/>
      },
      {
        path:"settings",
        element: <SettingsPage/>
      },
      {
        path:"profile",
        element: <ProfilePage/>
      },
    ]

  }
]);

export default router;