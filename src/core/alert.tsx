import Swal from 'sweetalert2';


const alert = (alertCntn:string) =>{
        Swal.fire({
            title: "Chat traveling",
            html: alertCntn,
            showCancelButton : false,
            confirmButtonText : "확인"
        })
    }


const confirm = (confirmCntn:string, trueCallback:Function, falseCallback?:Function) =>{
        Swal.fire({
            title: "Chat traveling",
            html : confirmCntn,
            showCancelButton : true,
            confirmButtonText : "확인",
            cancelButtonText : "취소"
        }).then((result) =>{
            if(result.value){
                trueCallback();
            }else if(result.dismiss && typeof result.dismiss == "string" && result.dismiss == "cancel" && falseCallback){
                falseCallback()
            }
            return false;
        });
    }

export {alert, confirm};