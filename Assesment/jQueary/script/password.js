function checkPasswordStrength() {
    // Get the password value
    var password = $('#password').val();

    // Regular expressions for different strength levels
    var weakRegex = /^.{1,5}$/;
    var mediumRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,10}$/;
    var strongRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{11,}$/;

    // Check the strength and update the display
    if (weakRegex.test(password)) {
        $('#strength-text').text('Weak').removeClass().addClass('weak');
    } else if (mediumRegex.test(password)) {
        $('#strength-text').text('Medium').removeClass().addClass('medium');
    } else if (strongRegex.test(password)) {
        $('#strength-text').text('Strong').removeClass().addClass('strong');
    } else {
        $('#strength-text').text('Very Strong').removeClass();
    }
}