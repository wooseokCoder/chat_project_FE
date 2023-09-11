import axios, { AxiosHeaders, AxiosResponse } from "axios";
import {alert} from "./alert";
import { MutableRefObject} from "react";
import { Type } from "typescript";

export interface responseProps {
    resultCode : string,
    data? : any
}

interface HTMLValueElement extends HTMLElement{
    value? : string,
    current? : HTMLValueElement
}

axios.defaults.withCredentials = true;
axios.defaults.baseURL = "http://localhost:8080";
axios.defaults.validateStatus= (status) => {
    return status == 200;
}
const headers = {
    headers : {
        "Content-Type": "application/json",
        "csrfToken":""
    }
}


const axiosResult = (result:Promise<AxiosResponse<Type, Type>>, callback:Function, error?:Function)=>{

    result.then((response: AxiosResponse<Type, Type>) => {
        if(response.headers instanceof AxiosHeaders && response.headers.has('csrftoken')){
            window.sessionStorage.setItem("csrfToken",response.headers['csrftoken']);
        }
        callback({resultCode : response.status,data:response.data})
    })
    .catch((err) =>{
        if(err.response && error){
            error(err.response)
        }else if(err.response && err.response.data.exceptionClass && err.response.data.exceptionClass == "SessionCheckException"){
            window.location.href ="/chat-traveling/error";
        }else if(err.response){
            alert(err.response.data.errMsg);
        }else{
            alert("axios 통신에 실패하였습니다");
        }
    })
}

const chatCore = {
    axios : (requestKind:("put"|"delete"|"post"),url:string,param:any,callback:Function, error?:Function) =>{
        // csrfToken 세팅
        headers.headers.csrfToken = window.sessionStorage.getItem("csrfToken")||"";
        axiosResult(axios[requestKind](url,JSON.stringify(param),headers),callback,error);
    },
    asyncAxios : async (requestKind:("put"|"delete"|"post"),url:string,param:any,callback:Function, error?:Function)=>{
        // csrfToken 세팅
        headers.headers.csrfToken = window.sessionStorage.getItem("csrfToken")||"";
        await axiosResult(axios[requestKind](url,JSON.stringify(param),headers),callback,error);
    },
    visible : (el:MutableRefObject<HTMLValueElement|null>, visibleYn?:boolean):boolean|void => {
        if(el && el.current && visibleYn != undefined){
            el.current.style.display = (visibleYn ? "" : "none");
        }
        else if(el && el.current && visibleYn == undefined){
            return el.current.style.display != "none";
        }
    },
    setValue : (el:MutableRefObject<HTMLValueElement|null> | HTMLValueElement, str:string) =>{
        if(el && "current" in el && el.current && el.current.tagName){
            el.current.value = str;
        }else if(el && "value" in el){
            el.value = str;
        }
    }
}

export default chatCore;
