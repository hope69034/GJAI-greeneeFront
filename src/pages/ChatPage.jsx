import React from "react";
 /*  import AddEvent from "../components/AddEvent"; */
import TalkChat from '../components/chatbot/TalkChat'
import ChatbotSteps from '../components/chatbot/ChatbotSteps'  
import Talkbot from '../components/chatbot/Talkbot' 
import Talk from '../components/chatbot/Talk'  
function ChatPage() {
  
  return (
    <>
  <TalkChat /> 
  <ChatbotSteps></ChatbotSteps>   
  <Talkbot></Talkbot>
  <Talk></Talk>
    </>
  );
};

export default ChatPage;
