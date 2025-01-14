import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore.js";
import { useState } from "react";

export default function SignUpPage() {
  const [showPassord, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });
  const{authUser} = useAuthStore();
  const navigate = useNavigate();
  if(authUser){
    navigate("/")
  }
  return (
    <div>SignUpPage</div>
  )
}
