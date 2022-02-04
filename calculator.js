

 
 function add(){
    var num1=parseInt(document.getElementById("num1").value);
    var num2=parseInt(document.getElementById("num2").value);
     var sum=num1+num2;
    var el= document.getElementById("sum");
    el.textContent="sum: " + sum;
 }
 function sub(){
    var num1=parseInt(document.getElementById("num1").value);
    var num2=parseInt(document.getElementById("num2").value);
    var sub=num1-num2;
    var el= document.getElementById("sum");
    el.textContent="difference: "+sub;

 }
 function mul(){
    var num1=parseInt(document.getElementById("num1").value);
    var num2=parseInt(document.getElementById("num2").value);
     var mul=num1*num2;
     var el= document.getElementById("sum");
    el.textContent="product: "+mul;

 }
 function div(){
    var num1=parseInt(document.getElementById("num1").value);
    var num2=parseInt(document.getElementById("num2").value);
    if(num2!==0){
        var div=num1/num2;
        var el= document.getElementById("sum");
       el.textContent="division: "+ div;
    }
    else{
        var el= document.getElementById("sum");
        el.textContent="num1 shold be different from 0 please try again!"
    }
     

 }