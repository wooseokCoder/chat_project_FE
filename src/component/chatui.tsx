import chatCore from "./chat-core";
import type{responseProps} from "./chat-core";

interface footerData { 
  data:string,
  footerdata:string
}
interface responseChat extends responseProps{
  data? : chatData[]
}
interface chatData {
  sendChat: string,
  receiveChat : string,
}

const chatui = ({data}:{data:footerData}) =>{
  chatCore.postAxios(process.env.NEXT_PUBLIC_API_URL + "/insert",{},(response:responseChat)=>{
      if(response.data && response.data.length > 1){
        // alert라이브러리가 없어 호출이안됨
        //alert("데이터 호출에 성공하였습니다.");
      }
    },(error:responseChat)=>{
      //alert(error.errMsg);
    })

    return (<div><h1>{data.data}</h1>{data.footerdata}{process.env.NEXT_PUBLIC_API_URL}</div>);
} 

export default chatui;