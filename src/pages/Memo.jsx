import React from "react";
import MemoCompo from "../components/MemoCompo";
/* import MessageIcon from "@mui/icons-material/Message"
import { Link } from "react-router-dom";
import greenee2 from "../img/greenee.png"; */

import LabelBottomNavigation from "../components/LabelBottomNavigation";
/* import ChatbotSteps from '../components/chatbot/ChatbotSteps' */
/* import TalkChat from '../components/chatbot/TalkChat' */

/* const chatbotButtonStyle = {
  marginLeft: "85%",
  inlineSize: "3%",
  position: "fixed",
  bottom: "70px",
  right: "30px",
  zIndex: "20",
}; */

const Memo = () => {
  return (
    <>
      메모페이지
      <MemoCompo></MemoCompo>
      <LabelBottomNavigation></LabelBottomNavigation>
      {/* 챗봇 진입 */}
      {/* <Link to="/chatbotsteps">
        <MessageIcon />
      </Link> */}

      {/* <Link style={chatbotButtonStyle} to="/chatbotsteps"> */}
      {/*       <Link to="/chatbotsteps">
        <img className='greenee20' src={greenee2}/> 
      </Link> */}
      
      {/* <TalkChat></TalkChat> */}
    </>
  );
};

export default Memo;
