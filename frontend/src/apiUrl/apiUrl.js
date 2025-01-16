const apiUrl = {
  base: import.meta.env.MODE === "development" ? "http://localhost:5001/api": "/api",
  signUp: "/auth/signup",
  login: "/auth/login",
  logout: "/auth/logout",
  updateProfile: "/auth/update-profile",
  messages: "/messages",
  messagesUsers: "/messages/users",
  messageSend: "/send",
  check: "/auth/check",

};

export default apiUrl;