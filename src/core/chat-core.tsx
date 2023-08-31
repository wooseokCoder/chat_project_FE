
import axios, { AxiosResponse } from "axios";
import {alert} from "./alert";
export interface responseProps {
    resultCode : string,
    data? : any
}

axios.defaults.withCredentials = true;
axios.defaults.baseURL = "http://localhost:8080";
axios.defaults.headers.post = {
    "Content-Type": "application/json"
};
axios.defaults.headers.put = {
    "Content-Type": "application/json"
};
axios.defaults.headers.delete = { 
    "Content-Type": "application/json"
};
axios.defaults.validateStatus= (status) => {
    return status == 200;
} 

const axiosResult = (result:Promise<AxiosResponse<any, any>>, callback:Function, error?:Function)=>{
    result.then((response: AxiosResponse<any, any>) => {
            callback({resultCode : response.status,data:response.data})
    })
    .catch((err) =>{
        if(err && error){
            error(err)
        }else{
            alert("axios 통신에 실패하였습니다");
        }
    })
}

const chatCore = {
    axios : (requestKind:("put"|"delete"|"post"),url:string,param:any,callback:Function, error?:Function) =>{
        if(url != "/login" && window.sessionStorage.getItem("sessionYn") != "Y"){
            event?.preventDefault();
            alert("세션이 없습니다. 로그인 후 이용해주세요");
            return false;
        }
        axiosResult(axios[requestKind](url,JSON.stringify(param)),callback,error);
    },
    asyncAxios : async(requestKind:("put"|"delete"|"post"),url:string,param:any,callback:Function, error?:Function)=>{
        if(url != "/login" && window.sessionStorage.getItem("sessionYn") != "Y"){
            event?.preventDefault();
            alert("세션이 없습니다. 로그인 후 이용해주세요");
            return false;
        }
        await axiosResult(axios[requestKind](url,JSON.stringify(param)),callback,error);
    },
}


export default chatCore;