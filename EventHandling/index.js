let h1 = document.querySelector("h1");

h1.addEventListener('click', () => {
    h1.style.color = "Blue"
    h1.style.fontSize = "142px";
    h1.style.textAlign = "center";
    h1.textContent = "Clicked";
})