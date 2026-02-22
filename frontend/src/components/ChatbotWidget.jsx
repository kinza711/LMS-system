import { useEffect } from "react";

const ChatbotWidget = () => {
  useEffect(() => {
    if (!window.chatbase) {
      window.chatbaseConfig = {
        chatbotId: "6Vd37-p_2Wj87684pamps", //  use chatbot id hare
      };

      const script = document.createElement("script");
      script.src = "https://www.chatbase.co/embed.min.js";
      script.defer = true;
      document.body.appendChild(script);
    }
  }, []);

  return null; // My chatboot UI are handled by Chatbase
};

export default ChatbotWidget;
