"use client";

import chatCore from "../core/chat-core";
import type { responseProps } from "../core/chat-core";
import { KeyboardEvent, useState, useRef, useEffect } from "react";
import { alert } from "../core/alert";
import "../css/main.css";
import ChatLoading from "@/core/loading";

interface responseChat extends responseProps {
  data: chatData;
}

interface chatData {
  chatAsw: string;
  userAsw: string;
}

const loadingPosition = {
  position: "relative",
  bottom: "72px",
  left: "-1px",
};

const ChatPhone = () => {
  const messageBoxBottomRef = useRef<null | HTMLDivElement>(null);
  const progress = useRef<null | HTMLDivElement>(null);

  const [chatList, setChatList] = useState<chatData[]>([{ chatAsw: "안녕하세요.", userAsw: "안녕 Chat" }]);

  useEffect(() => {
    scrollToBottom();
  }, [chatList]);

  const scrollToBottom = () => {
    messageBoxBottomRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const axiosConnection = (event: KeyboardEvent<HTMLInputElement>)=>{
    let target = event.currentTarget;

    if (!event || (event && event.code != "Enter") || event.keyCode != 13) {
      return false;
    }

    if (!target.value) {
      event.preventDefault();
      alert("질문을 입력해주세요");
      return false;
    }
    chatCore.visible(progress,true);
    chatCore.axios("put","/hello133333", { userAsw: target.value },(result: responseChat) => {
        if (result.data) { 
          setChatList([...chatList, result.data]);
          chatCore.setValue(target,"");
        }
        chatCore.visible(progress,false);
      });
    
  };

  return (

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
          {chatList.map((item, indx) => {
            return (
              <div key={indx}>
                <span style={{position: "relative",left: "348px",bottom:"-4px"}}>여행자</span>
                <div className="user-bubble">{item.userAsw}</div>
                <div className="chatBot-bubble">{item.chatAsw}</div>
                <span style={{position: "relative",bottom:"35px",right:"255px"}}>Chat</span>
              </div>
            );
          })}
          <span ref={messageBoxBottomRef}></span>
        </div>
        <div ref={progress} style={{ display: "none" }}>
          <ChatLoading ldPosition={loadingPosition}></ChatLoading>
        </div>
        <input
          onKeyDown={(Event) => {
            axiosConnection(Event);
          }}
          type="text"
          name="text"
          className="input"
          placeholder="Type here..."
        />
      </div>
  );
};


export default ChatPhone;
