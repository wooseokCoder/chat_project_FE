
"use client"

import chatCore, { responseProps } from "@/core/chat-core";
import "../css/main.css";
import ChatPhone from "./chat-phone";

const ChatMain = () =>{
  
    const login = ()=>{
        chatCore.axios("post","/login",{} ,(result: responseProps)=>{
          if (result) {
            window.sessionStorage.setItem("sessionYn",result.data.pageSession);
            alert("로그인에 성공했습니다.");
          }
        })
      };
    return (
        <div className = "scroll-snap-card">
            <div className = "contents">
            <div className="card">
            <div className="tools">
              <div className="circle">
                <span className="red box"></span>
              </div>
              <div className="circle">
                <span className="yellow box"></span>
              </div>
              <div className="circle">
                <span className="green box"></span>
              </div>
            </div>
            <ChatPhone></ChatPhone>
            </div>
            <button onClick={() =>login()}>로그인</button>
            </div>
        </div>
    )
}

export default ChatMain;