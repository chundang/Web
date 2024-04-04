const Check = document.getElementById('check');
const button = document.querySelector('.button');
//이름 입력창
const username = document.getElementById('name');
const successid = document.querySelector('.success-message');
const failid = document.querySelector('.failure-message');

//이메일 입력창
const email = document.getElementById('email');
const successem = document.querySelector('.email-message');
const failem = document.querySelector('.noemail-message');

//나이 입력창
const age = document.getElementById('age');
const suage = document.querySelector('.age-message');
const faage = document.querySelector('.noage-message');

//비밀번호 입력창
const password = document.getElementById('password');
const supass = document.querySelector('.yespassword-message');
const fapass = document.querySelector('.nopassword-message');

const chpassword = document.getElementById('password-confirm');
const suchpass = document.querySelector('.chpassword-message');
const nochpass = document.querySelector('.nchpassword-message');

const ValidateName = (str) => {
    return /^[A-Za-zㄱ-힣 ]{2,12}$/.test(str);
}

const ValidateEmail = (str) => {
    return /^[A-Za-z0-9.\-_]+@([A-Za-z0-9-]+\.)+[A-Za-z]{2,6}$/.test(str)
}

const ValidateAge = (str) => {

    if(!str){
        return false;
    }
    return /^[0-9]*$/.test(str);
}
const ValidatePassword = (str) => {
    return /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{4,12}$/.test(str);
}
const isMatch = (password, chpassword) =>{
     return password === chpassword;
}

    Check.onclick =() => {
    
     if(ValidateName(username.value)===false){
     successid.classList.add('hidden');
     failid.classList.remove('hidden'); // Show
       }
    
 
   
     else if(username.value) {
        successid.classList.remove('hidden');
        failid.classList.add('hidden');
     }
    
     
     if(ValidateEmail(email.value)===false){
     successem.classList.add('hidden');
     failem.classList.remove('hidden'); // Show
     }

     else if(email.value) {
        successem.classList.remove('hidden');
        failem.classList.add('hidden');
     }

     if(ValidateAge(age.value)){
        suage.classList.remove('hidden');
        faage.classList.add('hidden'); // Show
        }
   
     else  {
        suage.classList.add('hidden');
        faage.classList.remove('hidden');
    }

    if(ValidatePassword(password.value)===false){
        supass.classList.add('hidden');
        fapass.classList.remove('hidden'); // Show
        }
   
        else if(password.value) {
           supass.classList.remove('hidden');
           fapass.classList.add('hidden');
        }

    if(isMatch(password.value,chpassword.value)) {
            suchpass.classList.remove('hidden'); 
            nochpass.classList.add('hidden');
          }
    else {
            suchpass.classList.add('hidden');
            nochpass.classList.remove('hidden'); 
          }

    
          
    

};
chpassword.onkeyup = () => {
    if (password.value && chpassword.value) {
        Check.disabled = false;
        button.style.backgroundColor = "#0096F6";
      
    } 
    else {
      // 비밀번호 또는 비밀번호 확인 값이 입력되지 않은 경우
      Check.disabled = true;
      button.style.backgroundColor = "#C0DFFD";
     }
}