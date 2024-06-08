function validForm() {
  const name = document.getElementById('name').value.trim();
  const address = document.getElementById('name1').value.trim();
  const birthDate = document.getElementById('name2').value.trim();
  const username = document.getElementById('name3').value.trim();
  const email = document.getElementById('name4').value.trim();
  const password = document.getElementById('name5').value.trim();
  const phoneNumber = document.getElementById('name6').value.trim();
  const confirmPassword = document.getElementById('name7').value.trim();

  const gender = document.querySelector('input[name="gender"]:checked');

  // Regular expression patterns
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phonePattern = /^\d{10}$/;

  if (!name || !address || !birthDate || !username || !email || !password || !phoneNumber || !confirmPassword || !gender) {
    alert('Please fill in all fields.');
    return false;
  }

  if (!emailPattern.test(email)) {
    alert('Please enter a valid email address.');
    return false;
  }

  if (!phonePattern.test(phoneNumber)) {
    alert('Please enter a valid 10-digit phone number.');
    return false;
  }

  if (password !== confirmPassword) {
    alert('Passwords do not match.');
    return false;
  }

  alert('Form submitted successfully!');
  return true;
}
