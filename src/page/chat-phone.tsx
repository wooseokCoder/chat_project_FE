"use client"

import chatCore from "../core/chat-core";
import type{responseProps} from "../core/chat-core";
import { KeyboardEvent, KeyboardEventHandler, useState } from "react";
import {alert, confirm} from "../core/alert";
import "../css/main.css";

interface responseChat extends responseProps{
    chat : chatData[]
}
interface chatData {
    sendChat: string,
    receiveChat : string,
}

const ChatPhone = () =>{
    const [chatList,setChatList] = useState([
            {chatAsw : "안녕하세요.",
            userAsw : "안녕 Chat",
            }
        ])
    const [chatData,setChatData] = useState<responseChat>({
        chat : [{sendChat:"",receiveChat:""}],
        resultCode : ""
      });

    const axiosConnection = (event: KeyboardEvent<HTMLInputElement>) =>{
        
        if(!event || event && event.code != "Enter"){
            return false;
        }
        let target = event.currentTarget;
        let chating = {
            chatAsw : "",
            userAsw : target.value as string
        }
        chatCore.postAxios("/hello133333",{},(result:responseChat)=>{
            if(result){
              chating.chatAsw = result.chat[0].receiveChat;
              setChatList([...chatList, chating]);
              target.value = "";
            }
        },(error:responseChat)=>{
            if(error){
              setChatData(error);
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
            chatList.map(item =>{
                return <><div className="user-bubble">{item.userAsw}</div>
                        <div className="chatBot-bubble">{item.chatAsw}</div></>;
            })
          }
        </div>
          <input onKeyDown={(Event)=>{axiosConnection(Event)}}type="text" name="text" className="input" placeholder="Type here..."/>
        </div>
      </div>
    )
}

export default ChatPhone;