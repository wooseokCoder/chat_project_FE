"use client"

import chatCore from "../core/chat-core";
import type{responseProps} from "../core/chat-core";
import { KeyboardEvent, useState, useRef, useEffect } from "react";
import {alert, confirm} from "../core/alert";
import "../css/main.css";
import ChatLoading from "@/core/loading";

interface responseChat extends responseProps{
    chat : chatData
}
interface chatData {
    chatAsw: string,
    userAsw : string,
}

const loadingPosition = {
    position: "relative",
    bottom: "72px",
    left: "-1px",
};

const ChatPhone = () =>{
    
    const messageBoxBottomRef = useRef<null | HTMLDivElement>(null);
    const progress = useRef<null | HTMLDivElement>(null);
    
    const [chatList,setChatList] = useState([
            {chatAsw : "안녕하세요.",
            userAsw : "안녕 Chat",
            }
        ]);

    useEffect(() =>{
        scrollToBottom();
    }, [chatList]);

    const scrollToBottom = () => {
        messageBoxBottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const progressCk = (ck:boolean) =>{
      if(progress.current){
        progress.current.style.display = ck ? "" : "none";
      }
    }

    const axiosConnection = (event: KeyboardEvent<HTMLInputElement>) =>{
      let target = event.currentTarget;

      if(!event || event && event.code != "Enter" || event.keyCode != 13){
          return false;
      }

      if(!target.value){
        event.preventDefault();
        alert("질문을 입력해주세요");
        return ;
      }
        progressCk(true);
        chatCore.postAxios("/hello133333",{userAsw:target.value},(result:responseChat)=>{
            if(result){
              setChatList([...chatList, result.chat]);
              target.value = "";
              progressCk(false);
            }
        },(error:responseChat)=>{
            if(error){
                alert("chat과의 통신에 실패했습니다.");
            }
        })
    }
    
    return (
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
        <div className="card__content">
          <div className="buttonDiv">
          <button> 음식 </button>
          <button> 영화 </button>
        </div>
        <div className="buttonDiv">
          <button> 여행지 </button>
          <button> OOO </button>
        </div>
        <div className="buttonDiv">
          <button> ZZZ </button>
          <button> XXX </button>
        </div>
        <div className="chatForm">
          {
            chatList.map((item,indx) =>{
                return <div key={indx}><div className="user-bubble">{item.userAsw}</div>
                        <div className="chatBot-bubble">{item.chatAsw}</div></div>;
            })
          }
        <span ref={messageBoxBottomRef}></span>
        </div>
        <div ref={progress} style={{display:"none"}}>
            <ChatLoading ldPosition={loadingPosition}></ChatLoading>
        </div>
        <input onKeyDown={(Event)=>{axiosConnection(Event)}}type="text" name="text" className="input" placeholder="Type here..."/>
        </div>
      </div>
    )
}

export default ChatPhone;