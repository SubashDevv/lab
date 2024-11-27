const arrowSet=document.querySelector(".nextPageBtn");
const arrowCheck=document.querySelector(".nextPage");
const signInPop=document.querySelector("#signIn");
const signInBox=document.querySelector("#signInBox");
const endScreen=document.querySelector("#endScreen");
const logIn=document.querySelector("#login");
const logInMsg=document.querySelector("#loginMsg");
const signInMsg=document.querySelector("#signInMsg");
let nameArr=[];
let passArr=[];
let nameCheck="F";
let passCheck="F";
for(let i=0;i<localStorage.length;i++)
    {
        if(localStorage.key(i)!=0)
        {
        nameArr.push(localStorage.key(i));
    passArr.push(localStorage.getItem(nameArr[i]));
        }
    }
arrowSet.addEventListener("click",()=>{
    const name=document.querySelector(".nameBox").value;
    const password=document.querySelector(".passBox").value;
    if(name!="" && password!=""){
        localStorage.setItem(name,password);
        signInMsg.innerText="Registered sucessfully"
        signInMsg.style.color="lime"; 
    }
else{
signInMsg.innerHTML="<h1>Enter correctly</h1>"
signInMsg.style.color=" rgb(202, 8, 8)";
}
})
signInBox.addEventListener("click",()=>{
    signInPop.style.zIndex=2;
    signInPop.style.display="flex";
    logIn.style.display="none";

})
arrowCheck.addEventListener("click",()=>{
    const name=document.querySelector(".nameBox2").value;
    const password=document.querySelector(".passBox2").value;
    nameArr.forEach((key)=>{
        if(name===key){
            nameCheck="T";
        }
    })
    passArr.forEach((value)=>{
        if (password===value){
            passCheck="T";
        }
    })
    if(nameCheck==="T" && passCheck==="T")
    {
        console.log("sucessfull");
        endScreen.innerHTML="<h1>login sucessfull</h1>";
        endScreen.style.color="lime";
        login.style.display="none";
         nameCheck="F";
         passCheck="F";
    }
    else{
logInMsg.innerText="invald name or password";
logInMsg.style.color=" rgb(202, 8, 8)";
    }

})