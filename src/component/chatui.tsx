"use client"

import chatCore from "../core/chat-core";
import type{responseProps} from "../core/chat-core";
import { useState } from "react";
import {alert, confirm} from "../core/alert";

interface footerData { 
  data:string,
  footerdata:string
}
interface responseChat extends responseProps{
  chat : chatData[]
}
interface chatData {
  sendChat: string,
  receiveChat : string,
}


const Chatui = ({data}:{data:footerData}) =>{
  const [chatData,setChatData] = useState<responseChat>({
    chat : [{sendChat:"",receiveChat:""}],
    resultCode : ""
  });
  
  const axiosConnection = () =>{chatCore.postAxios("/hello133333",{},(result:responseChat)=>{
    if(result){
      alert("요청에 성공하였습니다");
      setChatData(result);
    }
  },(error:responseChat)=>{
    if(error){
      setChatData(error);
    }
    //alert(error.errMsg);
  })
  }

    return (<div><h1>{data.data}</h1><button onClick={() =>confirm("요청 confirm",()=>{axiosConnection()},()=>{alert("취소되었습니다.")})}>{chatData.chat[0].sendChat}api요청</button>
              {
                data.footerdata == "저쩌구"?
                  <span>{data.footerdata}{process.env.NEXT_PUBLIC_API_URL}</span>
                :
                  <span>저쩌구가 아닙니다</span>
              }
              </div>);
}

export default Chatui;