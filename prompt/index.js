const btn = document.getElementById("prompt-btn");
const output = document.getElementById("output");
btn.addEventListener("click", () => {
    const userName = prompt("Enter your name", "guest");
    output.textContent = `Hello ${userName}!!`;
});


const colorBtn = document.getElementById("color-btn");

colorBtn.addEventListener("click", () => {
    document.body.style.backgroundColor = `#00664d`;
    output.textContent = "Helloooo Worlllldddddd.....!!!!!!!";
});


