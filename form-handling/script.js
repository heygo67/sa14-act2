function validateForm() {
    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const usernameError = document.getElementById('usernameError');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
  
    let valid = true;
  
    if (username.length < 6) {
        usernameError.textContent = "Username must be at least 6 characters long";
        valid = false;
    } else {
        usernameError.textContent = "";
    }
  
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        emailError.textContent = "Invalid email format";
        valid = false;
    } else {
        emailError.textContent = "";
    }
  
    const passwordPattern = /^(?=.*[A-Z])(?=.*[0-9]).{8,}$/;
    if (!passwordPattern.test(password)) {
        passwordError.textContent = "Password must be at least 8 characters long and contain at least one capital letter and one number";
        valid = false;
    } else {
        passwordError.textContent = "";
    }  
  
    return valid;
}
  