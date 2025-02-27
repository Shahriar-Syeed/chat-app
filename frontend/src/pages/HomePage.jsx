import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore.js";
import Sidebar from "../components/Sidebar.jsx";
import NoChatSelected from "../components/NoChatSelected.jsx";
import ChatContainer from "../components/ChatContainer.jsx";
import { useChatStore } from "../store/useChatStore.js";

export default function HomePage() {
  const { selectedUser } = useChatStore();
  const { authUser } = useAuthStore();
  const navigate = useNavigate();
  if (!authUser) {
    navigate("/login");
  }
  return (
    <div className="h-screen bg-base-200">
      <div className="flex items-center justify-center pt-20 px-4">
        <div className="bg-base-100 rounded-lg shadow-cl w-full max-w-6xl h-[calc(100vh-8rem)]">
          <div className="flex h-full rounded-lg overflow-hidden">
            <Sidebar />

            {!selectedUser ? <NoChatSelected /> : <ChatContainer />}
          </div>
        </div>
      </div>
    </div>
  );
}
