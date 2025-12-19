const btn = document.getElementById("prompt-btn");
const output = document.getElementById("output");
btn.addEventListener("click", () => {
    const userName = prompt("Enter your name", "guest");
    
    // below code is update on 19th/dec, to showcase the dom manupilation.
    output.innerHTML = `<i style = "color: red;">${output.textContent = `Hello ${userName}!!`}</i>`;
});


const colorBtn = document.getElementById("color-btn");


