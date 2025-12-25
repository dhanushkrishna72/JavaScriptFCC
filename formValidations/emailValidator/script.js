let form = document.querySelector("form");

let email = document.querySelector("#email");
let password = document.querySelector("#password");

form.addEventListener("submit", (evObj) => {
    evObj.preventDefault();
    document.querySelector("#emailError").textContent = "";
    document.querySelector("#passwordError").textContent = "";
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    isValid = true;

    let emailAns = emailRegex.test(email.value);
    let passAns = passwordRegex.test(password.value);

    if (!emailAns) {
        document.querySelector("#emailError").textContent = "Email is invalid";
        isValid = false;
    }
    if (!passAns) {
        document.querySelector("#passwordError").textContent = "Password is invalid";
        isValid = false;
    }

    if (isValid) {
        document.querySelector("#resultMessage")
            .textContent = "Thank you for correct credentials.";
        document.querySelector("#resultMessage").style.color = "green";
    } else {
        document.querySelector("#resultMessage")
            .textContent = "given credentials are wrong.";
    }
})