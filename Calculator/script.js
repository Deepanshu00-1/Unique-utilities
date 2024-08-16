let result=document.getElementById("result");
let multiply=document.getElementById("multiply");
let divide=document.getElementById("divide");
let plus=document.getElementById("plus");
let point=document.getElementById("point");
let equal=document.getElementById("ans");
let one=document.getElementById("one");
let two=document.getElementById("two");
let three=document.getElementById("three");
let four=document.getElementById("four");
let five=document.getElementById("five");
let six=document.getElementById("six");
let seven=document.getElementById("seven");
let eight=document.getElementById("eight");
let nine=document.getElementById("nine");
let doublez=document.getElementById("doublez");
let zero=document.getElementById("zero");
let minus=document.getElementById("minus");
let AC=document.getElementById("Ac");
let del=document.getElementById("Del");


//one
one.addEventListener("click",function(){

result.innerHTML+=1;

})
//two
two.addEventListener("click",function(){

    result.innerHTML+=2;
    
})
//three
three.addEventListener("click",function(){
    result.innerHTML+=3;  
})
//four
four.addEventListener("click",function(){
    result.innerHTML+=4;  
})
//five
five.addEventListener("click",function(){
    result.innerHTML+=5;  
})

//six
six.addEventListener("click",function(){
    result.innerHTML+=6;   
})
 
//seven
seven.addEventListener("click",function(){
    result.innerHTML+=7;
 })
//eight
eight.addEventListener("click",function(){  
        result.innerHTML+=8;     
})
//nine
nine.addEventListener("click",function(){
    
        result.innerHTML+=9;
        
}) 
AC.addEventListener("click",function(){
    result.innerHTML='';

})

del.addEventListener("click",function(){
    let m=result.innerHTML.toString();
    result.innerHTML=m.slice(0,-1);

})

multiply.addEventListener("click",function(){
    
    result.innerHTML+= '*';
})
divide.addEventListener("click",function(){
    
    result.innerHTML+= '/';
})

minus.addEventListener("click", function(){
    result.innerHTML+= '-';

})
point.addEventListener("click", function(){
    result.innerHTML+= '.';

})
doublez.addEventListener("click", function(){
    result.innerHTML+= '00';

})
zero.addEventListener("click", function(){
    result.innerHTML+= '0';

})
plus.addEventListener("click", function(){
    result.innerHTML+= '+';

})
let answer;
let val;
equal.addEventListener("click", function(){
    answer=result.innerHTML.toString();
    let val=Number(eval(answer));
    if(!Number.isInteger(val)){
        val=val.toFixed(6);
        result.innerHTML=val;
    }
    else{
        result.innerHTML=val;
    }
  
  
})

