
let ul = document.querySelector("div ul");
let li = document.querySelectorAll("li");


let btn_re = document.getElementById("btn-reset");
let btn_ce = document.getElementById("btn-create");
let btn_rm = document.getElementById("btn-rm");


btn_ce.addEventListener("click", () => {
    let number = prompt("Enter the number of values you need: ");

    for (let i = 0; i < number; i++) {
        let item = prompt("Enter the fruit Name:");
        let lis = document.createElement("li");
        lis.textContent = `${item} `;
        ul.appendChild(lis);
    }
});

btn_rm.addEventListener("click", () => {
    if (ul.getElementsByTagName('li').length > 0) {
        ul.removeChild(ul.lastElementChild);
    } else {
        alert("List is empty, Create a list first");
    }
});

btn_re.addEventListener("click", () => {
    if (ul.getElementsByTagName('li').length > 0) {
        ul.remove("ul");
    } else {
        alert("List is empty, Create a list first");
    }
});

let all_btn = document.querySelectorAll("button");

all_btn.forEach(function (ele) {
    ele.classList.add("buttons");
});

let divStyle = document.querySelector("div");

divStyle.classList.add("div")