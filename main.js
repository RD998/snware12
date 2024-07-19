x0=document.getElementById("s0");
x1=document.getElementById("s1");
x2=document.getElementById("s2");
x3=document.getElementById("s3");

x0.style.color="blue"
function user_login(){
window.location="User credentials.html";

}
function admin_login(){
    window.location="User credentials2.html";
        
    }
document.addEventListener("DOMContentLoaded", function() {
    var x = document.getElementById("iframe1");

    function ClientRC() {
        console.log('working');
        x.src = "https://snware1.pythonanywhere.com/snware/clientRC";
        x0.style.color="blue"
        x1.style.color="black"
        x2.style.color="black"
        x3.style.color="black"
    }

    function SupplyRC() {
      console.log("workin");
        x.src = "https://snware1.pythonanywhere.com/snware/supplierRC";
        x1.style.color="blue"
        x0.style.color="black"
        x2.style.color="black"
        x3.style.color="black"
    }

    function DPquote() {
        x.src = "https://snware1.pythonanywhere.com/snware/DPquote";
        x2.style.color="blue"
        x1.style.color="black"
        x0.style.color="black"
        x3.style.color="black"
    }

    function SPquote() {
        x.src = "https://snware1.pythonanywhere.com/snware/SPquote";
        x3.style.color="blue"
        x1.style.color="black"
        x2.style.color="black"
        x0.style.color="black"
    }

 
    window.ClientRC = ClientRC;
    window.SupplyRC = SupplyRC;
    window.DPquote = DPquote;
    window.SPquote = SPquote;
});
function Logout(){
    console.log("ss");
    window.location="Signin.html";
    
}


