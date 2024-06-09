function validateForm() {
  const username = document.getElementById('username').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();
  let isValid = true;

  // Validate username
  if (username === '') {
    isValid = false;
    document.getElementById('usernameError').innerText = 'Username is required';
  } else {
    document.getElementById('usernameError').innerText = '';
  }

  // Validate email
  if (email === '') {
    isValid = false;
    document.getElementById('emailError').innerText = 'Email is required';
  } else if (!validateEmail(email)) {
    isValid = false;
    document.getElementById('emailError').innerText = 'Invalid email format';
  } else {
    document.getElementById('emailError').innerText = '';
  }

  // Validate password
  if (password === '') {
    isValid = false;
    document.getElementById('passwordError').innerText = 'Password is required';
  } else if (password.length < 6) {
    isValid = false;
    document.getElementById('passwordError').innerText = 'Password must be at least 6 characters long';
  } else {
    document.getElementById('passwordError').innerText = '';
  }

  return isValid;
}

function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
