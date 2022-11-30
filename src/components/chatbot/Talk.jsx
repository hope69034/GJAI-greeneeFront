import React, { Component } from "react";
import axios from "axios";
import { useState, useRef } from "react";
//import { useSelector } from "react-redux";
//import { useEffect, useState } from "react";

/*   axios
  .post("http://127.0.0.1:5000/chatbotTalk", document.querySelector('#userInput').value)
  .then((res) => {
    console.log("라우터다녀옴");
    console.log("res: " + res);
  })
  .catch((res) => {
    console.log("error");
  }); */

function Talk() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit success", idRef.current.value);

    axios
      .post("http://127.0.0.1:5000/chatbotTalk", {
        id: idRef.current.value,
      })
      .then(() => {
        console.log("success");
      })
      .catch(() => {
        console.log("failed");
      });
  };

  const idRef = useRef();
  const pwRef = useRef();

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="id" ref={idRef}></input>

        <button type="submit">데이터 보내주기</button>
      </form>
    </>
  );
}

export default Talk;
