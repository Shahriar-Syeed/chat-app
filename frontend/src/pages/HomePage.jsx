import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore.js"

export default function HomePage() {

  const {authUser}= useAuthStore();
  const navigate=useNavigate();
  if(!authUser){
    navigate("/login");
  }
  return (
    <div>HomePage</div>
  )
}
