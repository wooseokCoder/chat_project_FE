
import axios, { AxiosResponse } from "axios";
import {alert} from "./alert";
export interface responseProps {
    resultCode : string,
    data? : any
}


axios.defaults.withCredentials = true;
axios.defaults.baseURL = "http://localhost:8080";
axios.defaults.validateStatus= (status) => {
    return status == 200;
}

const headers = {
    headers : {
        "Content-Type": "application/json"
    }
}

const axiosResult = (result:Promise<AxiosResponse<any, any>>, callback:Function, error?:Function)=>{
    result.then((response: AxiosResponse<any, any>) => {
            callback({resultCode : response.status,data:response.data})
    })
    .catch((err) =>{
        if(err.response && error){
            error(err.response)
        }else if(err.response){
            alert(err.response.data.errMsg);
        }else{
            alert("axios 통신에 실패하였습니다");
        }
    })
}

const chatCore = {
    axios : (requestKind:("put"|"delete"|"post"),url:string,param:any,callback:Function, error?:Function) =>{
        axiosResult(axios[requestKind](url,JSON.stringify(param),headers),callback,error);
    },
    asyncAxios : async (requestKind:("put"|"delete"|"post"),url:string,param:any,callback:Function, error?:Function)=>{
        await axiosResult(axios[requestKind](url,JSON.stringify(param),headers),callback,error);
    },
}


export default chatCore;