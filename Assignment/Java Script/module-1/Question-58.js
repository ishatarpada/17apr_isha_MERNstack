const form = document.getElementById('myForm');
const usernameInput = document.getElementById('username');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  validateForm();
});

usernameInput.addEventListener('input', function() {
  validateUsername();
});

emailInput.addEventListener('input', function() {
  validateEmail();
});

passwordInput.addEventListener('input', function() {
  validatePassword();
});

function validateUsername() {
  const username = usernameInput.value.trim();
  const usernameError = document.getElementById('usernameError');
  if (username === '') {
    usernameError.textContent = 'Username is required';
  } else {
    usernameError.textContent = '';
  }
}

function validateEmail() {
  const email = emailInput.value.trim();
  const emailError = document.getElementById('emailError');
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email === '') {
    emailError.textContent = 'Email is required';
  } else if (!emailRegex.test(email)) {
    emailError.textContent = 'Invalid email format';
  } else {
    emailError.textContent = '';
  }
}

function validatePassword() {
  const password = passwordInput.value.trim();
  const passwordError = document.getElementById('passwordError');
  if (password === '') {
    passwordError.textContent = 'Password is required';
  } else if (password.length < 6) {
    passwordError.textContent = 'Password must be at least 6 characters long';
  } else {
    passwordError.textContent = '';
  }
}

function validateForm() {
  validateUsername();
  validateEmail();
  validatePassword();
}