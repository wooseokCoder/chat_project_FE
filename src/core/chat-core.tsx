
import axios from "axios";
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



const chatCore = {
    getAxios :(url:string,param:any,callback:Function, error?:Function) =>{
        axios.get(url)
        .then((response) => {callback(response)})
        .catch((err) =>{
            if(error){
                error(err)
            }
        })
    },
    postAxios : (url:string,param:any,callback:Function, error?:Function) =>{
        axios.post(url,JSON.stringify(param))
        .then((response) => {
            if(response.status == 200){
                callback({resultCode : response.status,data:response.data})
            }else if(error){
                error(response);
            }else{
                alert("axios 통신에 실패하였습니다");
            }
        })
        .catch((err) =>{
            if(err && error){
                error(err)
            }else{
                alert("axios 통신에 실패하였습니다");
            }
        })
    },
    putAxios: (url:string,param:any,callback:Function, error?:Function) =>{
        axios.put(url,JSON.stringify(param))
        .then((response) => {
            if(response.status == 200){
                callback({resultCode : response.status,data:response.data})
            }else if(error){
                error(response);
            }else{
                alert("axios 통신에 실패하였습니다");
            }
        })
        .catch((err) =>{
            if(error){
                 error(err)
            }else{
                alert("axios 통신에 실패하였습니다");
            }
        })
    },
    deleteAxios:(url:string,param:any,callback:Function, error?:Function) =>{
        axios.delete(url,{data:JSON.stringify(param)})
        .then((response) => {
            if(response.status == 200){
                callback({resultCode : response.status,data:response.data})
            }else if(error){
                error(response);
            }else{
                alert("axios 통신에 실패하였습니다");
            }
        })
        .catch((err) =>{
            if(error){
                 error(err)
            }else{
                alert("axios 통신에 실패하였습니다");
            }
        })
    },
    asyncPostAxois:async (url:string,param:any,callback:Function, error?:Function) =>{
        await axios.post(url,JSON.stringify(param))
        .then((response) => {
            if(response.status == 200){
                callback({resultCode : response.status,data:response.data})
            }else if(error){
                error(response);
            }else{
                alert("axios 통신에 실패하였습니다");
            }
        })
        .catch((err) =>{
                        //alert("axios통신 중 오류가 발생했습니다.");
            if(err && error){
                error(err)
            }else{
                alert("axios 통신에 실패하였습니다");
            }
        })
    },
    asyncPutAxios: async (url:string,param:any,callback:Function, error?:Function) =>{
        await axios.put(url,JSON.stringify(param))
        .then((response) => {
            if(response.status == 200){
                callback({resultCode : response.status,data:response.data})
            }else if(error){
                error(response);
            }else{
                alert("axios 통신에 실패하였습니다");
            }
        })
        .catch((err) =>{
            if(error){
                 error(err)
            }else{
                alert("axios 통신에 실패하였습니다");
            }
        })
    },
    asyncDeleteAxios:async (url:string,param:any,callback:Function, error?:Function) =>{
        await axios.delete(url,{data:JSON.stringify(param)})
        .then((response) => {
            if(response.status == 200){
                callback({resultCode : response.status,data:response.data})
            }else if(error){
                error(response);
            }else{
                alert("axios 통신에 실패하였습니다");
            }
        })
        .catch((err) =>{
            if(error){
                 error(err)
            }else{
                alert("axios 통신에 실패하였습니다");
            }
        })
    },
}

export default chatCore;