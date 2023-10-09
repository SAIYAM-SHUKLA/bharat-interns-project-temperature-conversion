let cleinput = document.querySelector('.digc > input')
let fahinput = document.querySelector('.digf > input')
let kelinput = document.querySelector('.digk > input')
let btn = document.querySelector('.button > button')

function roundnumber(number){
    return Math.round(number*100)/100
}
 cleinput.addEventListener('input', function (){
    let cTemp = parseFloat( cleinput.value)
    let fTemp  = (cTemp*(9/5))+32
    let kTemp = cTemp +273.15
    fahinput.value =roundnumber(fTemp)
    kelinput.value =roundnumber(kTemp)

 })

 fahinput.addEventListener('input', function (){
   let fTemp  = parseFloat( fahinput.value)
    let cTemp = (fTemp -32)+(5/9)
    let kTemp = (fTemp +32)+(5/9) +273.15
    cleinput.value =roundnumber(cTemp)
    kelinput.value =roundnumber(kTemp)

 })

 kelinput.addEventListener('input', function (){
     let kTemp =parseFloat( kelinput.value)
    let cTemp = kTemp - 273.15
    let fTemp  = (kTemp -273.15)*(9/5)+32
    fahinput.value =roundnumber(fTemp)
    cleinput.value =roundnumber(cTemp)

 })
 btn.addEventListener('click',()=>{
    cleinput.value = ""
    fahinput.value =""
    kelinput.value = ""
 })