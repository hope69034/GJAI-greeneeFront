import React from "react";
 /*  import AddEvent from "../components/AddEvent"; */
import TalkChat from '../components/chatbot/api/TalkChat'
import ChatbotSteps from '../components/chatbot/ChatbotSteps'  

function ChatPage() {
  
  return (
    <>
  <TalkChat /> 
  <ChatbotSteps></ChatbotSteps>   

    </>
  );
};

export default ChatPage;
