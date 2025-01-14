import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";

export default function ProfilePage() {
  const{authUser} = useAuthStore();
  const navigate = useNavigate();
  if(!authUser){
    navigate("/login")
  }
  return (
    <div>ProfilePage</div>
  )
}
