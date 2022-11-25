import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import { Button,Dialog,DialogTitle,DialogActions,DialogContent } from "@mui/material"; //mui의 Dialog
import { useNavigate } from "react-router-dom";
/* import { List, ListItem, ListItemText, Divider } from "@mui/material";
import interactionPlugin from "@fullcalendar/interaction";
import { NextPlan, Preview } from "@mui/icons-material"; */

const Calendar = () => {
  const nav = useNavigate();
  const [open, setOpen] = useState(false); //보관할 초기값

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const viewEvent = () => {

  };

  return (
    <div>
      <FullCalendar //속성값들
        //  locale='ko' //한글 설정
        height={"700px"}
        titleformat={{
          day: "narrow",
        }}
        events={[
          { title: "event 1", date: "2022-11-22" },
          { title: "event 1", date: "2022-11-19" },
        ]}
        //**이벤트별로 색 다르게 해야됨
        weekends={true}
        eventDisplay="list-item" //이벤트 모양? list-item, none
        eventColor="red"
        eventClick={handleClick}
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        droppable={true}
        buttonIcons={
          {
            //버튼 아이콘?
          }
        }
        buttonText={{
          //버튼 안에 들어가는 텍스트
          today: "today",
          month: "month",
          week: "week",
          day: "day",
          list: "list",
        }}
        headerToolbar={{
          // 날짜, today, prev, next 순서
          start: "prev",
          center: "title",
          end: "next today", //today는 확인 후 지우기
        }}
        titleFormat={function(date) {
          if (date.date.month < 9) {
            return `${date.date.year}.${"0" + (date.date.month + 1)}`;
          }
          return `${date.date.year}년 ${date.date.month + 1}월`;
        }}
        dayNamesShort={["일", "월", "화", "수", "목", "금", "토"]}

        //  weekends={false} //주말 생성
      />
      <Dialog onClose={handleClose} open={open}>
        {" "}
        {/* onClick={} 안에 함수이름 넣어야함 */}
        <DialogTitle>클릭한 날짜</DialogTitle>
        <DialogContent>주요 내부 글 작성란</DialogContent>
        <DialogActions>
          <Button>세부 이벤트 보기</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Calendar;
