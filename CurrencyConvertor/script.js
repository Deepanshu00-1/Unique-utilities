
const BASE_URL="https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/";
const btn=document.querySelector("button");
const dropdowns=document.querySelectorAll(".dropdown select");
let fromcurr=document.querySelector(".from select");
let tocurr=document.querySelector(".To select");
for(let select of dropdowns){
    for(let currcode in countryList){
        let newOption=document.createElement("option");
        newOption.innerText=currcode;
        newOption.value=currcode;
        if(select.name=="from" && currcode=='USD'){
            newOption.selected="selected";
        }
        else if(currcode=='INR' && select.name=="To"){
            newOption.selected="selected";
        }
        select.append(newOption);
    }
    select.addEventListener("change",(evt)=>{
        updateflag(evt.target);
    })
}

const updateflag=(Element)=>{
    let currcode=Element.value;
    let countrycode=countryList[currcode];
    let newsrc=`https://flagsapi.com/${countrycode}/flat/64.png`;
    let img=Element.parentElement.querySelector("img");
    img.src=newsrc;
}

btn.addEventListener("click",async(evt)=>{
evt.preventDefault();
let amount =document.querySelector(".amount Input");
let amtvalue=amount.value;
if(amtvalue=="null" || amtvalue <0){
    amtvalue=1;
    amount.value="1";
}

const URL=`${BASE_URL}${fromcurr.value.toLowerCase()}.json`;
let response= await fetch(URL);
let data=await response.json();
let rate=data[fromcurr.value.toLowerCase()][tocurr.value.toLowerCase()];
let result=amtvalue * rate;
let msg=document.querySelector(".msg input");
msg.value=result;

})








