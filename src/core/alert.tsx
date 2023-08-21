import Swal from 'sweetalert2';


const alert = (alertCntn:string) =>{
        Swal.fire({
            title: "Chat traveling",
            html: alertCntn,
            showCancelButton : false,
            confirmButtonText : "확인"
        })
    }


const confirm = (confirmCntn:string, callback:Function) =>{
        Swal.fire({
            title: "Chat traveling",
            html : confirmCntn,
            showCancelButton : true,
            confirmButtonText : "확인",
            cancelButtonText : "취소"
        }).then((result) =>{
            if(result.value){
                callback();
            }
        });
    }

export {alert, confirm};