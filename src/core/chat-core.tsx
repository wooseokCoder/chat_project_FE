
import axios from "axios";
export interface responseProps {
    resultCode : string,
    data? : any
}
axios.defaults.withCredentials = true;
axios.defaults.baseURL = "http://localhost:8080";

const chatCore = {
    getAxios : (url:string,param:any,callback:Function, error?:Function) =>{
        axios(url)
        .then((response) => {callback(response)})
        .catch((err) =>{
                        //alert("axios통신 중 오류가 발생했습니다.");
                        if(error){
                            error(err)
                        }
                        })
    },
    postAxios : (url:string,param:any,callback:Function, error?:Function) =>{
        axios(url,{
            method : "post",
            data : param
        })
        .then((response) => {callback({resultCode : response.status,chat:response.data});})
        .catch((err) =>{
                        //alert("axios통신 중 오류가 발생했습니다.");
            if(err && error){
                error(err)
            }
        })
    },
    putAxios: (url:string,param:any,callback:Function, error?:Function) =>{
        axios(url,{
            method : "put",
            data : param
        })
        .then((response) => {callback(response)})
        .catch((err) =>{
                        //alert("axios통신 중 오류가 발생했습니다.");
                        if(error){
                            error(err)
                        }
                        })
    },
    deleteAxios:(url:string,param:any,callback:Function, error?:Function) =>{
        axios(url,{
            method : "put",
            data : param
        })
        .then((response) => {callback(response)})
        .catch((err) =>{
                        //alert("axios통신 중 오류가 발생했습니다.");
                        if(error){
                            error(err)
                        }
                        })
    }

}

export default chatCore;