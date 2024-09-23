

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

////////////// Input Elements ///////////////

let inputName = document.getElementById('#name') as HTMLInputElement;
let f_name = document.getElementById('#f-name') as HTMLInputElement;
let prof = document.getElementById('#prof') as HTMLInputElement;
let About = document.getElementById('#About') as HTMLInputElement;
let image = document.getElementById('#image') as HTMLInputElement;
let input_education = document.getElementById('#education') as HTMLInputElement;
let s_c_u_name = document.getElementById('#s_c_u_name') as HTMLInputElement;
let input_address = document.getElementById('#address') as HTMLInputElement;
let input_city = document.getElementById('#city') as HTMLInputElement;
let input_age = document.getElementById('#age') as HTMLInputElement;
let input_contact = document.getElementById('#contact') as HTMLInputElement;
let input_email = document.getElementById('#email') as HTMLInputElement;
let input_linkedin = document.getElementById('#linkedin') as HTMLInputElement;
let input_skills = document.getElementById('#skills') as HTMLInputElement;
let input_acheive = document.getElementById('#acheive') as HTMLTextAreaElement;
let input_Country = document.getElementById('#Country') as HTMLInputElement;

// const elementsArray = [school_name, education, city_name, phone_number, email, linkedin, Name, fathername, profession, about, age, country, address, skills, acheivement, img]

// function changeText(event:any){
//     for (let array of elementsArray) {
//         if(array == school_name){
//             school_name.textContent = event.target.value;
//         }else if(){

//         } 
//     }
// }


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
