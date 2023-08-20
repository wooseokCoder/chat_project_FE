import chatCore from "./chat-core";
import ReactDOM from "react-dom";
import type{responseProps} from "./chat-core";
import { observer } from "mobx-react-lite";

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

const Chatui = observer(({data}:{data:footerData}) =>{
  let result = ".";
  chatCore.postAxios(process.env.NEXT_PUBLIC_API_URL + "/hello11",{},(data1:any)=>{
      if(data1){
        result = data1.data;
      }
      //if(response.data && response.data.length > 1){
        // alert라이브러리가 없어 호출이안됨
        //alert("데이터 호출에 성공하였습니다.");
      //}
    },(error:responseChat)=>{
      if(error){
        result = "실패";
      }
      //alert(error.errMsg);
    })

    return (<div><h1>{data.data}</h1><span>{result}</span>
              {
                data.footerdata == "저쩌구"?
                  <span>{data.footerdata}{process.env.NEXT_PUBLIC_API_URL}</span>
                :
                  <span>저쩌구가 아닙니다</span>
              
              }
              </div>);
})

ReactDOM.render(<Chatui data={data} />, document.body)

export default chatui;