
function input_value(a){
        document.getElementById("show_container").innerHTML+=a;
}

function clear1(){
        document.getElementById("show_container").innerHTML="";
}
function cal(){
        let r=document.getElementById("show_container").innerText;
        let x=eval(r);
        document.getElementById("show_container").innerHTML=x;
        
}



