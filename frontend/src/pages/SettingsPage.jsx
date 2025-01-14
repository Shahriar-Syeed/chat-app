import { useNavigate } from "react-router-dom"
import { useAuthStore } from "../store/useAuthStore";

export default function SettingsPage() {
 const{authUser} = useAuthStore();
  const navigate = useNavigate();
  if(!authUser){
    navigate("/login")
  }
  return (
    <div>SettingsPage</div>
  )
}
