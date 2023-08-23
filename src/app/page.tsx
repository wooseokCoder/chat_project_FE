import React from 'react'
import Chatui from '../component/chatui';
import ChatMain from "../page/chat-main"

type Props = {}

const Home = ({}: Props) => {
  const TageName = ChatMain; 
  const footerString:any = {
    data:"0",
    footerdata:"저쩌구"
  }
    footerString.data = typeof footerString.data =="string" ? footerString.data : "문자열이 아니었음"
    return (<div>
        <TageName></TageName>
        Home</div>) 
}
 
export default Home