

console.log("hi") ;   

function passwordCheck(){
userpwd=document.getElementById("pwd").value;
b1=document.getElementById("status");
    
    if (userpwd == "snware@4848"){
window.location= "Home.html";

    }
else{
    
    b1.textContent= "Wrong password";
    b1.style.display="block";

}}

function passwordCheck2(){
    adminpwd=document.getElementById("pwd2").value;
b1=document.getElementById("status2");
    
    if (adminpwd == "admin_login@7866"){
window.location= "Home.html";

    }
else{
    
    b1.textContent= "Wrong password";
    b1.style.display="block";

}
}
