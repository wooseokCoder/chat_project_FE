
"use client"

import chatCore,{ responseProps } from "@/core/chat-core";
import "../css/main.css";
import ChatPhone from "./chat-phone";
import {alert} from "../core/alert"
import { useRef } from "react";

const ChatMain = () =>{
  const userId = useRef<null | HTMLInputElement>(null);
  const loginButton = useRef<null | HTMLButtonElement>(null);
  const logoutButton = useRef<null | HTMLButtonElement>(null);

    const login = ()=>{
      if(userId.current && userId.current.value){
        chatCore.axios("post","/login",{userId:userId.current.value} ,(result: responseProps)=>{
          if (result) {
            if(result.data.pageSession == 'Y'){
              window.sessionStorage.setItem("sessionYn",result.data.pageSession);
              alert("로그인에 성공했습니다.");
              if(userId.current &&  loginButton.current && logoutButton.current){
                userId.current.style.display = "none";
                userId.current.value = "";
                loginButton.current.style.display = "none";
                logoutButton.current.style.display = "";
              }
            }else{
              alert("이미 로그인이 되어있습니다.")
            }
          }
        })
      }else{
        alert("ID를 입력해주세요");
      }
    };
    const logout = ()=>{
        chatCore.axios("post","/logout",{} ,(result: responseProps)=>{
          if (result) {
            window.sessionStorage.setItem("sessionYn","");
            alert("로그아웃에 성공했습니다.");
            if(userId.current &&  loginButton.current && logoutButton.current){
              userId.current && (userId.current.style.display = "");
              loginButton.current.style.display = "";
              logoutButton.current.style.display = "none";
            }
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
            <button ref={loginButton} onClick={() =>login()}>로그인</button>
            <input ref={userId} type="text"></input>
            <button ref={logoutButton} style={{display:"none"}}onClick={() =>logout()}>로그아웃</button>
            </div>
        </div>
    )
}

export default ChatMain;