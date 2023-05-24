const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirmpassword');
const checkboxInput = document.getElementById('checkbox');
const registerButton = document.getElementById('register');
const errorMsg = document.getElementById('errorMsg');
const homepage = document.getElementById('homepage');


let uN = document.getElementById('userNamet');
let eN = document.getElementById('emailt');
let pN = document.getElementById('passwordt');

// Error messages

const nameE = document.getElementById('nameE');
const emailE = document.getElementById('emailE');
const passwordE = document.getElementById('passwordE');
const confirmPasswordE = document.getElementById('confirmPasswordE');

let viewE = document.getElementById('view');
viewE.onclick = function() {
  viewE.classList.toggle('fa-eye');
  viewE.classList.toggle('fa-eye-slash');
  if (passwordInput.type == 'text') {
    passwordInput.type = 'password';
  } else {
    passwordInput.type = 'text';
  }
};

function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

nameInput.addEventListener('blur', function() {
  if (nameInput.value === '') {
    nameE.textContent = 'Enter your name';
    nameInput.classList.add('np');
  } else {
    nameInput.classList.remove('np');
    nameE.textContent = '';
  }
});

emailInput.addEventListener('blur', function() {
  if (!validateEmail(emailInput.value)) {
    emailE.textContent = 'Please enter a valid email address';
    emailInput.classList.add('ep');
    emailInput.classList.add('textcolor');
  } else {
    emailInput.classList.remove('ep');
    emailE.textContent = '';
    emailInput.classList.remove('textcolor');
  }
});

passwordInput.addEventListener('blur', function() {
  if (passwordInput.value.length >= 1 && passwordInput.value.length < 6) {
    passwordE.textContent = 'Password must be at least 6 characters long';
    passwordInput.classList.add('pp');
    passwordInput.classList.add('textcolor');
  } else if (passwordInput.value.length === 0) {
    passwordE.textContent = 'Please enter a password';
    passwordInput.classList.add('pp');
  } else {
    passwordE.textContent = '';
    passwordInput.classList.remove('pp');
    passwordInput.classList.remove('textcolor');
  }
});

confirmPasswordInput.addEventListener('blur', function() {
  if (passwordInput.value !== confirmPasswordInput.value) {
    confirmPasswordE.textContent = 'Passwords do not match';
    confirmPasswordInput.classList.add('cpp');
    confirmPasswordInput.classList.add('textcolor');
  } else {
    confirmPasswordInput.classList.remove('cpp');
    confirmPasswordE.textContent = '';
    confirmPasswordInput.classList.remove('textcolor');
  }
});

const formData = {
  name: '',
  email: '',
  password: '',
  gender:'Male',
  status:'Active'
  
};

registerButton.addEventListener('click', function(e) {
  e.preventDefault();

  if (nameInput.value === '') {
    nameE.textContent = 'Enter your name';
    nameInput.classList.add('np');
  } else {
    nameE.textContent = '';
    nameInput.classList.add('np');
  }

  if (!validateEmail(emailInput.value)) {
    emailE.textContent = 'Please enter a valid email address';
    emailInput.classList.add('ep');
  } else {
    emailE.textContent = '';
    emailInput.classList.remove('ep');
  }

  if (passwordInput.value.length < 6) {
    passwordE.textContent = 'Password must be at least 6 characters long';
    passwordInput.classList.add('pp');
  } else {
    passwordE.textContent = '';
    passwordInput.classList.remove('pp');
  }

  if (passwordInput.value !== confirmPasswordInput.value) {
    confirmPasswordE.textContent = 'Passwords do not match';
    confirmPasswordInput.classList.add('cpp');
    confirmPasswordInput.classList.add('textcolor');
  } else {
    confirmPasswordInput.classList.remove('cpp');
    confirmPasswordE.textContent = '';
    confirmPasswordInput.classList.remove('textcolor');
  }

  if (
    nameE.textContent !== '' ||
    emailE.textContent !== '' ||
    passwordE.textContent !== '' ||
    confirmPasswordE.textContent !== ''
  ) {
    return;
  }

  if (!checkboxInput.checked) {
    errorMsg.textContent = 'You must agree to the terms and conditions';
    return;
  } else {
    errorMsg.textContent = '';
  }

  // All validation checks passed, so submit the form
  let Data = '';
  formData.name = nameInput.value;
  formData.email = emailInput.value;
  formData.password = passwordInput.value;

  //html table data elements

  

  submitFormData(formData);
});

function submitFormData(formData) {
  let options = {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      Accept: 'application/json',
      Authorization: 'Bearer 0498cd5cef9f60410a65dfdf5ef5f833b6e12a6e3b7d356cc22841a2f1d8a945'
    },
    body: JSON.stringify(formData)
  };

  let url = 'https://gorest.co.in/public/v2/users';
  fetch(url, options)
    .then(function(response) {
      return response.json();
    })
    .then(function(jsonData) {
      localStorage.setItem('userData', JSON.stringify(jsonData));
      window.location.href = 'Dropdown.html';
    });
    


    alert('successfuly submitted');
}
