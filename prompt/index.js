const btn = document.getElementById("prompt-btn");
const output = document.getElementById("output");
btn.addEventListener("click", () => {
    const userName = prompt("Enter your name", "guest");
    output.textContent = `Hello ${userName}!!`;
});