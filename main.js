let inputText = document.querySelector('#UserInput');
let SubmitAlert = document.querySelector("#submitButton");
let form = document.querySelector('form');
let sandWich = [];
let Wich = document.querySelectorAll('#MakeAWich input');
let form2 = document.querySelector('#form2');
let date = document.querySelector("#DateAndTime");
let date1 = date.value;


let WhiteBread = document.querySelector('#whiteSelect');

let WheatBread = document.querySelector('#wheatSelect');

let RyeBread = document.querySelector('#RyeSelect');

let HouseBread = document.querySelector('#HouseSelect');

let Pesto = document.querySelector('#pestoSelect');

let Tomato = document.querySelector('#tomatoSelect');

let Cheese = document.querySelector('#mozzerellaSelect');

let Chicken = document.querySelector('#chickenSelctor');

let Turkey = document.querySelector('#turkeySelctor');

let Ham = document.querySelector('#HamSelector');

let Pepperonia = document.querySelector('#PepperoniSelctor');

form2.addEventListener('click',function(event){
event.preventDefault();
let bread = '';
if (WhiteBread.checked===true) {
    bread = 'White';
}else if (WheatBread.checked === true) {
    bread = 'wheat';
}else if (RyeBread.checked===true) {
    bread = 'Rye Bread';
}else if (HouseBread.check===true) {
    bread = 'House Bread';
}
if (Pesto.checked) {
    sandWich.push('Pesto');
}
if (Tomato.checked) {
    sandWich.push('Tomato');
}
if (Cheese.checked) {
    sandWich.push('mozzerella');
}
if (Chicken.checked) {
    sandWich.push('chicken');
}
if (Turkey.checked) {
    sandWich.push('turkey');
}
if (Ham.checked) {
    sandWich.push('ham');
}
if (Pepperonia.checked) {
    sandWich.push('pepperoni');
}

sandWich.join(',');
alert(`The Sandwich containes:${bread}bread,and your Toppings:${sandWich.join(', ')}.`);
});

let BarberName = document.querySelector("#BarberName");
let HairSizeS = document.querySelector('#Short');
let HairSizeL = document.querySelector('#Long');

let form3 = document.querySelector('#form3');

form3.addEventListener('submit',function(event){
event.preventDefault();

let hair = "";

if (HairSizeL.checked===true) {
    hair = 'long';
}

if (HairSizeS.checked===true) {
    hair = 'short';
}
  alert(`Your haircut is scheduled for ${date.value} with ${BarberName.value} for ${hair} `);
});

let alertA = "Your username dose not have enough characters";


let formFour = document.querySelector("#form4");
let User = document.querySelector('#UserName');
let PassWord = document.querySelector('#PassWord');
let ConfirmPass = document.querySelector('#Confirm');
let CreateAccount = document.querySelector('#CreateAccount');
formFour.addEventListener('submit',function(event){
event.preventDefault();
if(User.value.length <= 3 ){
alert(alertA);
}else if(!User.value.includes("@")){
    alert("Please make a valid Email");
}else if(PassWord.value.length <= 4 && !PassWord.value.includes("A-Z")&& !PassWord.value.includes('a-z')&&PassWord.value!==ConfirmPass.value){
    alert("please enter a valid password");
}else if(User.value.includes('@')&& User.value.length>=(4)&&PassWord.value===ConfirmPass.value){
    alert('you have made a valid account');
}
});



















// for (let i = 0; i < Wich.length; i++) {
//   let input1 = Wich.type;
//     if (input1[i]===true) {
//        input1[i].push(sandWich);
//    }
    
// }






// form.addEventListener('submit',function () {
//     alert('${Wich}'+'To your delivery address'+' ' + inputText.value);
// });

