const Base_URL="https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";

const dropdowns=document.querySelectorAll(".dropdown select");

const button = document.querySelector("form button");
const fromCurr=  document.querySelector(".from select");
const toCurr=  document.querySelector(".to select");




for(let select of dropdowns)
{

for( currcode in countryList)
{
    let newOption= document.createElement("option");
    newOption.innerText=currcode;
    newOption.value=currcode;
    if(select.name=="from" && currcode=="USD" )
    {
        newOption.selected="selected";
    }else if(select.name=="to" && currcode=="INR")
    {
        newOption.selected="selected";
    }
    
    select.append(newOption);
}
select.addEventListener("change",(evt) =>
{
   updateflag(evt.target);
});

}



const updateflag= (element) =>
{
    console.log(element);
    let currcode =element.value;
    console.log(currcode);
    let countrycode = countryList[currcode];
    console.log(countrycode);
    let newsrc = `https://flagsapi.com/${countrycode}/flat/64.png`
  let img =   element.parentElement.querySelector("img");
  img.src=newsrc;
}



button.addEventListener("click", async(evt) =>
{
   evt.preventDefault();
   let amount = document.querySelector(".amount input");
   let amountvalue = amount.value;
   if( amountvalue ==="" || amountvalue<1)
   {
    amountvalue=1;
    amount.value="1";
   }
   console.log(amountvalue)
   console.log(fromCurr.value,toCurr.value);
const URL = `${Base_URL}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`;
let response = await fetch(URL);
let data = await response.json();
console.log(data);




})
