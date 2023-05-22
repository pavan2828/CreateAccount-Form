const emailInput = document.getElementById('email');
        const passwordInput = document.getElementById('password');
        const checkboxInput = document.getElementById('checkbox');
        const registerButton = document.getElementById('loginbtn');
        const errorMsg = document.getElementById('errorMsg');


        // password 
        let viewE = document.getElementById('view');

        viewE.onclick = function(){
          viewE.classList.toggle('fa-eye');
          viewE.classList.toggle('fa-eye-slash');
          if(passwordInput.type == 'text'){
            passwordInput.type = 'password';
           }
         else{
          passwordInput.type = 'text';
         }
        }
        
        function validateEmail(email) {
          const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          return regex.test(email);
        }


        emailInput.addEventListener('blur',function(n){
        if (!validateEmail(emailInput.value) ){
          emailE.textContent = 'Please enter valid email address';
          emailInput.classList.add('ep');
          emailInput.classList.add('textcolor');
          
        }
        else{
          emailInput.classList.remove('ep');
          emailE.textContent = '';
          emailInput.classList.remove('textcolor');
        }
      });


      passwordInput.addEventListener('blur',function(n){

      if (passwordInput.value !== '123456') {
        passwordE.textContent = 'Invalid password';
        passwordInput.classList.add('pp');
        passwordInput.classList.add('textcolor');
  

       }
     else if (passwordInput.value.length === 0) {
        passwordE.textContent = 'Please enter password';
        passwordInput.classList.add('pp');
        }
     else{
        passwordE.textContent = '';
        passwordInput.classList.remove('pp');
        passwordInput.classList.remove('textcolor');
      }
     });


        
        
      registerButton.addEventListener('click', function(e) {
        e.preventDefault();
        
        
        if (!validateEmail(emailInput.value)) {
          emailE.textContent = 'Please enter a valid email address';
          emailInput.classList.add('ep');
        }
        else{
          emailE.textContent = '';
          emailInput.classList.remove('ep');
        }
        
        if (passwordInput.value !== '123456' ) {
          passwordE.textContent = 'Invalid Password';
          passwordInput.classList.add('pp');
          return;
        }
        
        else{
          passwordE.textContent = '';
          passwordInput.classList.remove('pp');
        }
        
       
       if(emailInput.value !== '123456@xyz.com' || passwordInput.value !== '123456'){
          passwordE.textContent = 'Invalid Password/email';
          return;
        }

        // All validation checks passed, so submit the form
        errorMsg.textContent = '';
        document.querySelector('form').submit();
        window.location.href = 'Dropdown.html';
      });