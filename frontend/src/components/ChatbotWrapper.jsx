import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ChatbotWidget from "./ChatbotWidget";

const ChatbotWrapper = () => {
  const location = useLocation();

  useEffect(() => {
    const hidePages = ["/demo", "/objective", "/subjective"];

    const shouldHide = hidePages.some((path) =>
      location.pathname.startsWith(path),
    );

    if (shouldHide) {
      document.body.classList.add("hide-chatbot");
    } else {
      document.body.classList.remove("hide-chatbot");
    }
  }, [location]);
  return <ChatbotWidget />;
};

export default ChatbotWrapper;
