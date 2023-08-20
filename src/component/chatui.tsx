
interface footerData {
  data:string,
  footerdata:string
}

const chatui = ({data}:{data:footerData}) =>{
    const data1 = process.env.NEXT_PUBLIC_API_URL;
    return (<div><h1>{data.data}</h1>{data.footerdata}{process.env.NEXT_PUBLIC_API_URL}</div>);
} 

export default chatui;