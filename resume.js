"use strict";
let school_name = document.querySelector('#school-name');
let education = document.querySelector('#education');
let city_name = document.querySelector('#city-name');
let phone_number = document.querySelector('#phone-number');
let email = document.querySelector('#email');
let linkedin = document.querySelector('#linkedin');
let Name = document.querySelectorAll('#NAME');
let fathername = document.querySelector('#fathername');
let profession = document.querySelector('#profession');
let about = document.querySelector('#about');
let age = document.querySelector('#age');
let country = document.querySelector('#country');
let address = document.querySelector('#address');
let skills = document.querySelector('#skills');
let acheivement = document.querySelector('#acheivements');
let img = document.getElementById('img');
////////////// Input Elements ///////////////
let inputName = document.getElementById('#name');
let f_name = document.getElementById('#f-name');
let prof = document.getElementById('#prof');
let About = document.getElementById('#About');
let image = document.getElementById('#image');
let input_education = document.getElementById('#education');
let s_c_u_name = document.getElementById('#s_c_u_name');
let input_address = document.getElementById('#address');
let input_city = document.getElementById('#city');
let input_age = document.getElementById('#age');
let input_contact = document.getElementById('#contact');
let input_email = document.getElementById('#email');
let input_linkedin = document.getElementById('#linkedin');
let input_skills = document.getElementById('#skills');
let input_acheive = document.getElementById('#acheive');
let input_Country = document.getElementById('#Country');
// const elementsArray = [school_name, education, city_name, phone_number, email, linkedin, Name, fathername, profession, about, age, country, address, skills, acheivement, img]
// function changeText(event:any){
//     for (let array of elementsArray) {
//         if(array == school_name){
//             school_name.textContent = event.target.value;
//         }else if(){
//         } 
//     }
// }
function changeText1(event) {
    Name[0].textContent = event.target.value;
    Name[1].textContent = event.target.value;
}
function changeText2(event) {
    fathername.textContent = event.target.value;
}
function changeText3(event) {
    profession.textContent = event.target.value;
}
function changeText4(event) {
    about.textContent = event.target.value;
}
function changeText5(event) {
    img.src = URL.createObjectURL(event.target.files[0]);
}
function changeText6(event) {
    education.textContent = event.target.value;
}
function changeText7(event) {
    school_name.textContent = event.target.value;
}
function changeText8(event) {
    address.textContent = event.target.value;
}
function changeText9(event) {
    country.textContent = event.target.value;
}
function changeText10(event) {
    city_name.textContent = event.target.value;
}
function changeText11(event) {
    age.textContent = event.target.value;
}
function changeText12(event) {
    phone_number.textContent = event.target.value;
}
function changeText13(event) {
    email.textContent = event.target.value;
}
function changeText14(event) {
    linkedin.textContent = event.target.value;
}
function changeText15(event) {
    skills.textContent = event.target.value;
}
function changeText16(event) {
    acheivement.textContent = event.target.value;
}
let button = document.querySelector('#button');
button.addEventListener('click', (e) => {
    e.preventDefault();
    const showResume = document.querySelector('.resume-box');
    showResume.style.visibility = 'visible';
    const hideForm = document.querySelector('form');
    hideForm.style.display = 'none';
});
let editbutton = document.getElementById('Edit');
editbutton.addEventListener('click', (e) => {
    e.preventDefault();
    const showResume = document.querySelector('.resume-box');
    showResume.style.visibility = 'hidden';
    const hideForm = document.querySelector('form');
    hideForm.style.display = 'block';
});
// school_name.textContent = event.target.value;
// education.textContent = event.target.value;
// city_name.textContent = event.target.value;
// phone_number.textContent = event.target.value;
// email.textContent = event.target.value;
// linkedin.textContent = event.target.value;
// fathername.textContent = event.target.value;
// profession.textContent = event.target.value;
// about.textContent = event.target.value;
// age.textContent = event.target.value;
// country.textContent = event.target.value;
// address.textContent = event.target.value;
// skills.textContent = event.target.value;
// acheivement.textContent = event.target.value;
