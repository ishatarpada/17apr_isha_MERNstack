function validateForm() {
  const email = document.getElementById('email').value.trim();
  const phoneNumber = document.getElementById('phoneNumber').value.trim();
  const password = document.getElementById('password').value.trim();
  let isValid = true;

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

  // Validate phone number
  if (phoneNumber === '') {
    isValid = false;
    document.getElementById('phoneError').innerText = 'Phone number is required';
  } else if (!validatePhoneNumber(phoneNumber)) {
    isValid = false;
    document.getElementById('phoneError').innerText = 'Invalid phone number format';
  } else {
    document.getElementById('phoneError').innerText = '';
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

function validatePhoneNumber(phoneNumber) {
  const phoneRegex = /^\d{10}$/;
  return phoneRegex.test(phoneNumber);
}