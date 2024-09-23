////////////// Getting All ids of Elements to Manipulate

let school_name = document.querySelector('#school-name') as HTMLElement;
let education = document.querySelector('#education') as HTMLElement;
let city_name = document.querySelector('#city-name') as HTMLElement;
let phone_number = document.querySelector('#phone-number') as HTMLElement;
let email = document.querySelector('#email') as HTMLElement;
let linkedin = document.querySelector('#linkedin') as HTMLElement;
let Name = document.querySelectorAll('#NAME') as NodeList;
let fathername = document.querySelector('#fathername') as HTMLElement;
let profession = document.querySelector('#profession') as HTMLElement;
let about = document.querySelector('#about') as HTMLElement;
let age = document.querySelector('#age') as HTMLElement;
let country = document.querySelector('#country') as HTMLElement;
let address = document.querySelector('#address') as HTMLElement;
let skills = document.querySelector('#skills') as HTMLElement;
let acheivement = document.querySelector('#acheivements') as HTMLElement;
let img = document.getElementById('img') as HTMLImageElement;

////////////////    Changing Values Of Elements with Input Values 

function changeText1(event:any) {
    Name[0].textContent = event.target.value;
    Name[1].textContent = event.target.value;
}
function changeText2(event:any) {
    fathername.textContent = event.target.value;
}
function changeText3(event:any) {
    profession.textContent = event.target.value;
}
function changeText4(event:any) {
    about.textContent = event.target.value;
}
function changeText5(event:any) {
    img.src = URL.createObjectURL(event.target.files[0])
}
function changeText6(event:any) {
    education.textContent = event.target.value;
}
function changeText7(event:any) {
    school_name.textContent = event.target.value;
}
function changeText8(event:any) {
    address.textContent = event.target.value;
}
function changeText9(event:any) {
    country.textContent = event.target.value;
}
function changeText10(event:any) {
    city_name.textContent = event.target.value;
}
function changeText11(event:any) {
    age.textContent = event.target.value;
}
function changeText12(event:any) {
    phone_number.textContent = event.target.value;
}
function changeText13(event:any) {
    email.textContent = event.target.value;
}
function changeText14(event:any) {
    linkedin.textContent = event.target.value;
}
function changeText15(event:any) {
    skills.textContent = event.target.value;
}
function changeText16(event:any) {
    acheivement.textContent = event.target.value;
}

//////   Adding Click Events on Buttons So We can Create And Edit Resume.

let button = document.querySelector('#button') as HTMLButtonElement;
button.addEventListener('click',(e) => {
    e.preventDefault()
    const showResume = document.querySelector('.resume-box') as HTMLElement;
    showResume.style.visibility = 'visible';


    const hideForm = document.querySelector('form') as HTMLElement;
    hideForm.style.display = 'none';


})

let editbutton = document.getElementById('Edit') as HTMLButtonElement;
editbutton.addEventListener('click',(e) => {
    e.preventDefault()
    const showResume = document.querySelector('.resume-box') as HTMLElement;
    showResume.style.visibility = 'hidden';


    const hideForm = document.querySelector('form') as HTMLElement;
    hideForm.style.display = 'block';

})


