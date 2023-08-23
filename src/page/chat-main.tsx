
import "../css/main.css";
import ChatPhone from "./chat-phone";

const ChatMain = () =>{

    return (
        <div className = "scroll-snap-card">
        <div className = "contents">
        <ChatPhone></ChatPhone>
        </div>
        <div className = "contents">
          <div className ="chartForm">
            <div className ="chartDiv"> <h1>차트 들어갈 곳</h1></div>
            <div className ="chartDiv"> <h1>차트 들어갈 곳</h1></div>
            <div className ="chartDiv"> <h1>차트 들어갈 곳</h1></div>
            <div className ="chartDiv"> <h1>차트 들어갈 곳</h1></div>
          </div>
        </div>
    </div>
    )
}

export default ChatMain;