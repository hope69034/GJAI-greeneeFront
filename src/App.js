// import Door from "./pages/Door";
/* import Test from './pages/Test'; */
import { useEffect } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createTheme, ThemeProvider } from "@mui/material"; //mui 폰트 변경
import Home from "./pages/Home";
import Calendar from "./pages/Calendar";
import Memo from "./pages/Memo";
import MyProfile from "./pages/MyProfile";
import Signup from "./pages/Signup";
import UserInfo from "./pages/UserInfo";
import AddEvent from "./components/AddEvent";
import UpdateEvent from "./components/UpdateEvent";
/* import ChatbotSteps from "./components/chatbot/ChatbotSteps"; */
import LabelBottomNavigation from "./components/LabelBottomNavigation";
import axios from "axios";
import ChatPage from './pages/ChatPage'
/* css 파일 임포트 */
import "./dabin.css";
import "./index.css";
import "./sehyoung.css";
/* mui css에 css파일을 오버라이딩 하기 위한*/
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
const cache = createCache({
  key: "css",
  prepend: true,
});
/* mui 폰트 변경 */
const theme = createTheme({
  typography: {
    fontFamily: ["Spoqa Han Sans Neo", "sans-serif"].join(","),
    fontSize: 16,
  },
});
function App() {
  const email = useSelector(state=>(state.session.email));
  const dispatch = useDispatch(); // store 공간안에 값을 저장하기 위해 userDispatch함수 호출
  useEffect(() => {
    console.log(email, '랜더')
    // 화면이 랜더링 될때마다 서버에 사용자 session 정보가 있는지 없는지 검증하는 구문 세션이 있으면 로그인 되어있고 그렇지 않으면 로그인 되어있지 않다.
    axios
      .get("/lifeConcierge/api/session") // 랜더링 될때마다 get 방식으로 서버에 요청
      .then((res) => {
        dispatch({ type: "SESSION", session: res.data });
      }) // 클라이언트에서 요청 후 redux를 이용해 서버에서 응답한 결과값을 전역공간에 저장.
      .catch(() => {
        console.log("세션 호출 에러");
      });
    console.log(email, '이메일 있는지')
    axios.post("/lifeConcierge/api/showDailyEvent", {email})
    .then((res)=>{
      dispatch({type:"DAILYEVENT", dailyEvent: res.data})
    })

    axios.post("/lifeConcierge/api/showSpecialEvent", {email})
    .then((res) => {
      dispatch({type:"SPECIALEVENT", specialEvent: res.data})
    })
    
  });
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        {" "}
        {/* theme 무조건 가장 외곽에 */}
        <CacheProvider value={cache}>
          {" "}
          {/* 므이 css */}
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/myProfile" element={<MyProfile />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/userInfo" element={<UserInfo />} />
              <Route path="/addEvent" element={<AddEvent />} />
              <Route path="/Memo" element={<Memo />} />
              <Route path="/updateEvent" element={<UpdateEvent />}></Route>
              {/* <Route path="/" element={<Door />} /> */}
              <Route path="/ChatPage" element={<ChatPage />} /> 
              {/*  <Route path="/test" element={<Test/>}/> */}
            </Routes>
            {/* <LabelBottomNavigation></LabelBottomNavigation> */}
            {/* <ChatbotSteps></ChatbotSteps> */}
          </BrowserRouter>
        </CacheProvider>
      </ThemeProvider>
    </div>
  );
}
export default App;
