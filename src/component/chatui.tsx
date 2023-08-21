"use client"

import chatCore from "../core/chat-core";
import type{responseProps} from "../core/chat-core";
import { useState } from "react";

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
  
  const axiosConnection = () =>{chatCore.postAxios(process.env.NEXT_PUBLIC_API_URL + "/hello133333",{},(result:any)=>{
    if(result){
      setChatData(result);
    }
    //if(response.data && response.data.length > 1){
      // alert라이브러리가 없어 호출이안됨
      //alert("데이터 호출에 성공하였습니다.");
    //}
  },(error:responseChat)=>{
    if(error){
      setChatData(error);
    }
    //alert(error.errMsg);
  })
  }

    return (<div><h1>{data.data}</h1><span onClick={() =>axiosConnection()}>{chatData.chat[0].sendChat}11</span>
              {
                data.footerdata == "저쩌구"?
                  <span>{data.footerdata}{process.env.NEXT_PUBLIC_API_URL}</span>
                :
                  <span>저쩌구가 아닙니다</span>
              }
              </div>);
}

export default Chatui;