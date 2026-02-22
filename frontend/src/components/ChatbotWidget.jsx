// import { useEffect } from "react";

// const ChatbotWidget = () => {
//   useEffect(() => {
//     if (!window.chatbase) {
//       window.chatbaseConfig = {
//         //chatbotId: "6Vd37-p_2Wj87684pamps", //  use chatbot id hare
//         chatbotId: "kqpqm3bC9t_D_lX7938_n",
//       };

//       const script = document.createElement("script");
//       script.src = "https://www.chatbase.co/embed.min.js";
//       script.defer = true;
//       document.body.appendChild(script);
//     }
//   }, []);

//   return null; // My chatboot UI are handled by Chatbase
// };

// export default ChatbotWidget;

//----upper code working fine but it show chats to other users too

import { useEffect } from "react";
import { jwtDecode } from "jwt-decode";

const ChatbotWidget = () => {
  useEffect(() => {
    const token = localStorage.getItem("token");

    let userId = "guest";

    if (token) {
      try {
        const decoded = jwtDecode(token);
        userId = decoded.id; // make sure this matches your backend
      } catch (err) {
        console.log("Invalid token", err);
      }
    }

    window.chatbaseConfig = {
      // chatbotId: "6Vd37-p_2Wj87684pamps",
      chatbotId: "kqpqm3bC9t_D_lX7938_n",
      userId: userId, // 👈 IMPORTANT
    };

    if (!document.querySelector("script[src*='chatbase']")) {
      const script = document.createElement("script");
      script.src = "https://www.chatbase.co/embed.min.js";
      script.defer = true;
      document.body.appendChild(script);
    }
  }, []);

  return null;
};

export default ChatbotWidget;
