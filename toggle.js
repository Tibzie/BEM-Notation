const eyeBtn = document.querySelector('.eye-icon');
const passwBtn = document.querySelector('.password');

eyeBtn.addEventListener("click", () => {
    if (passwBtn.type === "password") {
        passwBtn.type = "text";
    } else {
        passwBtn.type = "password";
    }
});