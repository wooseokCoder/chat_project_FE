
"use client"

import chatCore, { responseProps } from "@/core/chat-core";
import "../css/main.css";
import ChatPhone from "./chat-phone";

const ChatMain = () =>{
  
    const login = ()=>{
        chatCore.postAxios("/login",{} ,(result: responseProps)=>{
          if (result) {
            window.sessionStorage.setItem("sessionYn",result.data.pageSession);
            alert("로그인에 성공했습니다.");
          }
        })
      };
    return (
        <div className = "scroll-snap-card">
            <div className = "contents">
            <ChatPhone></ChatPhone>
            </div>
            <button onClick={() =>login()}>로그인</button>
        </div>
    )
}

export default ChatMain;