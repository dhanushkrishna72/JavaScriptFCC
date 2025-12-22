let h1 = document.querySelector("h1");

h1.style.textDecoration = ("underline wavy #23ed");

h1.style.transitionDelay = ("3ms");

h1.style.background = "red";


let p = document.querySelector("p");

p.innerHTML = "<b>Updated</b> by JavaScript";


let ul = document.querySelector("ul");
let li = document.querySelectorAll("li");


let btn_re = document.getElementById("btn-reset");
let btn_ce = document.getElementById("btn-create");

btn_ce.addEventListener("click", () => {
    let number = prompt("Enter the number of values you need: ");

    for (let i = 0; i < number; i++) {
        let item = prompt("Enter the fruit Name:");
        let lis = document.createElement("li");
        lis.textContent = item;
        ul.appendChild(lis);
    }
})

btn_re.addEventListener("click", () => {
    if (ul.getElementsByTagName('li').length > 0) {
        ul.remove("ul");
    } else {
        alert("List is empty, Create a list first");
    }
})