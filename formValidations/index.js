let nm = document.querySelector("#name");
let form = document.querySelector("form");

form.addEventListener("submit", (evObj) => {
    evObj.preventDefault();
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

})