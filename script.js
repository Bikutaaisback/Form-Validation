let nameError = document.getElementById('name-error');
let phoneError = document.getElementById('phone-error');
let emailError = document.getElementById('email-error');
let messageError = document.getElementById('message-error');
let submitError = document.getElementById('submit-error');
let contactName = document.getElementById('contact-name');
let contactPhone = document.getElementById('contact-phone');
let contactEmail = document.getElementById('contact-email');
let contactMessage = document.getElementById('contact-message');
let submit = document.getElementById('submit');

function validateName(){
    let name = document.getElementById('contact-name').value;

    if(name.length==0){
        nameError.innerHTML = 'name is required';
        return false;
    }
    if (!name.match(/^[A-Za-z]+(\s{1}[A-Za-z]+)+$/)) {
        nameError.innerHTML = "Write full name";
        return false;
        }
        nameError.innerHTML = `<i class="fa-regular fa-circle-check"></i>`;
        return true;
}
contactName.addEventListener('keyup', validateName);    

function validatePhone(){
let phone = contactPhone.value.trim();
    if(phone.length == 0){
        phoneError.innerHTML='Phone no is required';
        return false;
    }
    if(phone.length !== 10){
        phoneError.innerHTML='Phone no should be 10 digits';
        return false;
    }
    if(!phone.match(/^[0-9]{10}$/)){
        phoneError.innerHTML='Only digits please';
        return false;
    }
    phoneError.innerHTML = `<i class="fa-regular fa-circle-check"></i>`; 
    return true;
}
contactPhone.addEventListener('keyup', validatePhone);

function validateMail(){
    let email = contactEmail.value;
    if(email.length == 0){
        emailError.innerHTML = 'Email is required';
        return false;
    }
    if(!email.match(/^[A-Za-z0-9_.+%]+@+[a-z]+\.[a-z]{2,3}$/)){
        emailError.innerHTML= 'Email invalid';
        return false;
    }
    emailError.innerHTML = `<i class="fa-regular fa-circle-check"></i>`;
}
contactEmail.addEventListener('keyup', validateMail);

function validateMessage(){
    let message = contactMessage.value;
    let required = 30;
    let left = required - message.length;
    if(left <= 0){
        messageError.innerHTML = `<i class="fa-regular fa-circle-check"></i>`;
    }else{
        messageError.innerHTML = `${left} characters required`;
        return false;
    }
}
contactMessage.addEventListener('keyup', validateMessage);

function validateForm(){
    if(!validateName() || (!validatePhone)() || (!validateMail)() || (!validateMessage)()){
        submitError.style.display = 'block'
        submitError.innerHTML = 'please fix error to submit';
        setTimeout(function(){submitError.style.display = 'none';}, 4000);
        return false;
    }
}
submit.addEventListener('click', validateForm);