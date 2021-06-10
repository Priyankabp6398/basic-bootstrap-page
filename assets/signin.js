let userName=document.getElementById("txtUserName");
let password=document.getElementById("txtPwd");
let form=document.querySelector("form");

function validateInput(){
    // check username is empty
        if(userName.value.trim()===""){
            onError(userName,"User Name cannot be empty");
        }
        else{
            onSuccess(userName);
        }

        // password
        if(pwd.value.trim()===""){
            onError(pwd,"Password Cannot be empty");
        }
        else{
            onSuccess(pwd);
        }

        // confirm password
       
}


document.querySelector("button")
.addEventListener("click",(event)=>{
    event.preventDefault();
    validateInput();
});
function onSuccess(input){
    let parent=input.parentElement;
    let messageEle=parent.querySelector("small");
    messageEle.style.visibility="hidden";
    parent.classList.remove("error");
    parent.classList.add("success");
}
function onError(input,message){
    let parent=input.parentElement;
    let messageEle=parent.querySelector("small");
    messageEle.style.visibility="visible";
    messageEle.innerText=message;
    parent.classList.add("error");
    parent.classList.remove("success");
}
