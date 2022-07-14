import React, { useState, useEffect } from "react";
import styled from "styled-components";
import DatePicker from "react-datepicker";
import axios from "axios";
import { ko } from "date-fns/esm/locale";

import "react-datepicker/dist/react-datepicker.css";
import "./../../assets/styles/DatePicker.css";

// 날짜 포맷팅
const dateToString = (date) => {
  return (
    date.getFullYear() +
    "-" +
    (date.getMonth() + 1).toString().padStart(2, "0") +
    "-" +
    date.getDate().toString().padStart(2, "0")
  );
};

// 날짜 선택시 해당 날짜의 예약 내역 가져오는 함수
const handleDateChange = async (date) => {
  // 클릭한 date에 따른 예약 내역
  const req = await axios.get("/dummyBook.json");
  const data = await req.data.books;

  // 예약 내역이 있는 시간 배열
  let bookedTime = [];
  data.map((item) => {
    for (let t = item.startTime; t <= item.endTime; t++) {
      bookedTime.push(t);
    }
  });

  let startTimeList = document.querySelectorAll(".startTime");
  let endTimeList = document.querySelectorAll(".endTime");

  bookedTime.forEach((num) => {
    startTimeList[num].disabled = true;
    startTimeList[num].classList.add("disable");
    startTimeList[num].style.textDecoration = "line-through";

    endTimeList[num].disabled = true;
    endTimeList[num].classList.add("disable");
    endTimeList[num].style.textDecoration = "line-through";
  });
};

// DatePicker + TimePicker
export function MyDatePicker() {
  const [date, setDate] = useState(new Date());
  const [startTime, setStartTime] = useState(0);
  const [endTime, setEndTime] = useState(0);
  const [caution, setCaution] = useState(false);
  const [overlap, setOverlap] = useState(false);

  // 예약 시작 시간과 종료 시간 사이에 이미 예약된 시간이 있을 시 처리하는 함수
  const handleTimeChange = (startTime, endTime) => {
    let disableList = document.querySelectorAll(".disable");

    let booked = [];
    disableList.forEach((list) => {
      booked.push(Number(list.value));
    });
    booked = booked.slice(booked.length / 2);

    let newBookTime = [];
    for (let n = Number(startTime); n <= Number(endTime); n++) {
      newBookTime.push(n);
    }
    console.log("new:" + newBookTime + ", book:" + booked);
    const filtering = newBookTime.filter((x) => booked.includes(x));
    filtering.length > 0 ? setOverlap(true) : setOverlap(false);
  };

  // 첫 렌더링 시 오늘 날짜 선택되게
  useEffect(() => {
    handleDateChange();
  }, []);

  useEffect(() => {
    console.log(dateToString(date), startTime, endTime);
  }, [date, startTime, endTime]);

  // timePicker options
  const timeTable = [];
  for (let i = 0; i < 24; i++) {
    timeTable.push(i);
  }

  return (
    <>
      <DatePicker
        locale={ko}
        selected={date}
        onChange={(date) => {
          setDate(date);
          handleDateChange(date);
        }}
        minDate={new Date()} // 이전 날짜는 선택 불가
        inline
      />

      <div className="timePicker">
        <TimeSelect
          name="timeTable"
          size="3"
          onClick={(e) => {
            setStartTime(Number(e.target.value));
            handleTimeChange(Number(e.target.value), endTime);
            Number(e.target.value) < endTime
              ? setCaution(false)
              : setCaution(true);
          }}
        >
          <option className="title" disabled>
            시작 시간
          </option>
          {timeTable.map((time, i) => {
            return (
              <option key={i} name={time} value={time} className="startTime">
                {time}:00
              </option>
            );
          })}
        </TimeSelect>

        <span className="bookInfo"> ~ </span>

        <TimeSelect
          name="timeTable"
          size="3"
          onClick={(e) => {
            setEndTime(Number(e.target.value));
            handleTimeChange(startTime, Number(e.target.value));
            startTime < Number(e.target.value)
              ? setCaution(false)
              : setCaution(true);
          }}
        >
          <option className="title" disabled>
            종료 시간
          </option>
          {timeTable.map((time, i) => {
            return (
              <option key={i} name={time} value={time} className="endTime">
                {time}:00
              </option>
            );
          })}
        </TimeSelect>
      </div>
      <Guide caution={caution} overlap={overlap}>
        <p className="caution">*최소 예약시간은 1시간입니다.</p>
        <p className="overlap">*중복 예약 내역이 있습니다.</p>
      </Guide>
    </>
  );
}

const TimeSelect = styled.select`
  width: 100px;
  border: none;
  outline: 2px solid #8daef2;
  border-radius: 10px;
  text-align: center;

  & > option {
    padding: 5px;
    text-align: center;
  }

  & > option:checked {
    background-color: #8daef2;
  }

  & > option:hover {
    background-color: #bbd3fe;
  }

  & .title,
  & .title:hover {
    color: #fff;
    background-color: #8daef2;
  }

  & .disable:hover {
    background-color: transparent;
  }
`;

const Guide = styled.div`
  width: 100%;
  font-size: 0.7rem;
  color: red;

  & .caution {
    ${({ caution }) => (caution ? `display: block;` : `display: none;`)};
  }

  & .overlap {
    ${({ overlap }) => (overlap ? `display: block;` : `display: none;`)};
  }
`;
