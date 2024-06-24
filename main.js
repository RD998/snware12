x0=document.getElementById("s0");
x1=document.getElementById("s1");
x2=document.getElementById("s2");
x3=document.getElementById("s3");
 x0.style.color="#0c1013"
function user_login(){
window.location="Home.html";

}
function admin_login(){
    window.location="Home.html";
    
    }
document.addEventListener("DOMContentLoaded", function() {
    var x = document.getElementById("iframe1");

    function ClientRC() {
        console.log('working');
        x.src = "https://snware1.pythonanywhere.com/snware/clientRC";
        x0.style.color="#0c1013"
        x1.style.color="#FFF"
        x2.style.color="#FFF"
        x3.style.color="#FFF"
    }

    function SupplyRC() {
      console.log("workin");
        x.src = "https://snware1.pythonanywhere.com/snware/supplierRC";
        x1.style.color="#0c1013"
        x0.style.color="#FFF"
        x2.style.color="#FFF"
        x3.style.color="#FFF"
    }

    function DPquote() {
        x.src = "https://snware1.pythonanywhere.com/snware/DPquote";
        x2.style.color="#0c1013"
        x1.style.color="#FFF"
        x0.style.color="#FFF"
        x3.style.color="#FFF"
    }

    function SPquote() {
        x.src = "https://snware1.pythonanywhere.com/snware/SPquote";
        x3.style.color="#0c1013"
        x1.style.color="#FFF"
        x2.style.color="#FFF"
        x0.style.color="#FFF"
    }

 
    window.ClientRC = ClientRC;
    window.SupplyRC = SupplyRC;
    window.DPquote = DPquote;
    window.SPquote = SPquote;
});
