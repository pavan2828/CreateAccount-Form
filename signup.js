const nameInput = document.getElementById('name');
      const emailInput = document.getElementById('email');
      const passwordInput = document.getElementById('password');
      const confirmPasswordInput = document.getElementById('confirmpassword');
      const checkboxInput = document.getElementById('checkbox');
      const registerButton = document.getElementById('register');
      const errorMsg = document.getElementById('errorMsg');
      const homepage = document.getElementById('homepage');

      // Error messages 
      

      const nameE = document.getElementById('nameE');

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

      nameInput.addEventListener('blur',function(n){
        if (nameInput.value ==='' ){
          nameE.textContent = 'Enter your name';
          nameInput.classList.add('np');
        }
        else{
          nameInput.classList.remove('np');
          nameE.textContent = '';
        }
      });

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

        if (passwordInput.value.length >=1 && passwordInput.value.length<6) {
          passwordE.textContent = 'Password must be at least 6 characters long';
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

      confirmPasswordInput.addEventListener('blur',function(n){
        if (passwordInput.value !== confirmPasswordInput.value) {
          confirmPasswordE.textContent = 'Passwords do not match';
          confirmPasswordInput.classList.add('cpp');
          confirmPasswordInput.classList.add('textcolor');
        }
        else{
          confirmPasswordInput.classList.remove('cpp');
          confirmPasswordE.textContent = '';
          confirmPasswordInput.classList.remove('textcolor');
        }

      });

    


      
      registerButton.addEventListener('click', function(e) {
        e.preventDefault();
        
        if (nameInput.value === '' ){
          nameE.textContent = 'Enter your name';
          nameInput.classList.add("np");

        }
        else{
          nameE.textContent = '';
          nameInput.classList.add('np');
        }
        
        if (!validateEmail(emailInput.value)) {
          emailE.textContent = 'Please enter a valid email address';
          emailInput.classList.add('ep');
        }
        else{
          emailE.textContent = '';
          emailInput.classList.remove('ep');
        }
        if (passwordInput.value.length < 6) {
          passwordE.textContent = 'Password must be at least 6 characters long';
          passwordInput.classList.add('pp');
        }
        else{
          passwordE.textContent = '';
          passwordInput.classList.remove('pp');
        }
        if (passwordInput.value !== confirmPasswordInput.value) {
          confirmPasswordE.textContent = 'Passwords do not match';
          confirmPasswordInput.classList.add('cpp');
          confirmPasswordInput.classList.add('textcolor')
        }
        else{
          confirmPasswordInput.classList.remove('cpp');
          confirmPasswordE.textContent = '';
          confirmPasswordInput.classList.remove('textcolor');
        }
       
        if (nameE.textContent !== '' || emailE.textContent !== '' || passwordE.textContent !== '' || confirmPasswordE.textContent !== '') {
          return;
          
        }
        if (!checkboxInput.checked) {
          errorMsg.textContent = 'You must agree to the terms and conditions';
          
          return;
        } else{
          errorMsg.textContent = '';
        }

        // All validation checks passed, so submit the form
        errorMsg.textContent = '';
        
        document.querySelector('form').submit();
        window.location.href = 'homepage.html';
      });