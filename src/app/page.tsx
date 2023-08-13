import React from 'react'
import Chatui from './component/chatui';

type Props = {}

const Home = ({}: Props) => {
  const TageName = Chatui; 
  const footerString:any = {
    data:0,
    footerdata:"저쩌구"
  }
  if(TageName.name == "chatui"){
    footerString.data = typeof footerString.data =="string" ? footerString.data : "문자열이 아니었음"
    return (<div>
        <TageName data={footerString}></TageName>
        Home</div>) 
  }
}
 
export default Home