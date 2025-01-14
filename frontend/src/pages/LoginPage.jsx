import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore.js";

export default function LoginPage() {
  const{authUser} = useAuthStore();
  const navigate = useNavigate();
  if(authUser){
    navigate("/")
  }
  return (
    <div>LoginPage</div>
  )
}
