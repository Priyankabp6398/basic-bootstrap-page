let userName=document.getElementById("txtUserName");
let email=document.getElementById("txtEmail");
let password=document.getElementById("txtPwd");
let conpassword=document.getElementById("txtConpwd");
let form=document.querySelector("form");

function validateInput(){
    // check username is empty
        if(userName.value.trim()===""){
            onError(userName,"User Name cannot be empty");
        }
        else{
            onSuccess(userName);
        }

        // email
        if(email.value.trim()===""){
            onError(email,"email cannot be empty");
        }else{
            if(!isvalidEmail(email.value.trim())){
                onError(email,"email is not valid");
            }else{
                onSuccess(email);
            }
        }

        // password
        if(pwd.value.trim()===""){
            onError(pwd,"Password Cannot be empty");
        }
        else{
            onSuccess(pwd);
        }

        // confirm password
        if(conpwd.value.trim()===""){
            onError(conpwd,"confirm Password Cannot be empty");
        }
        else{
            if(pwd.value.trim()!==conpwd.value.trim()){
                onError(conpwd,"password and confirm password not match");
            }
            else
            onSuccess(conpwd);
        }
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

function isValidEmail(email){
    return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}