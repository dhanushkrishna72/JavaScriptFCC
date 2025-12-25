// let h1 = document.querySelector("h1");

// h1.addEventListener('click', () => {
//     h1.style.color = "Blue"
//     h1.style.fontSize = "142px";
//     h1.style.textAlign = "center";
//     h1.textContent = "Clicked";
// })


// let input = document.querySelector("input");

// function myFunc(evt) {
//     console.log(evt.data);
// }

// input.addEventListener("input", myFunc);


// let selec = document.querySelector("select");

// selec.addEventListener("change", (ele) => {
//     let el = ele.target.value;
//     if (el === "apple") {
//         document.body.style.backgroundColor = "Red";

//     } else {
//         document.body.style.background = "blue";
//     }
// });

// let h1 = document.querySelector("h1");

// window.addEventListener("keydown", (ele) => {
//     if (ele.key === " ") {
//         h1.textContent = "SPACE";
//     } else {
//         h1.textContent = ele.key;
//     }
// })

// let btn = document.querySelector("#btn");
// let file = document.querySelector("#fileInp");

// btn.addEventListener("click", () => {
//     file.click();
// });


// file.addEventListener("change", (ele) => {

//     (ele.target.files[0]) ? (btn.textContent = ele.target.files[0].name) : (btn.textContent = "No files selected");
// });

let abcd = document.querySelector("#abcd");

// abcd.addEventListener("mouseover", function () {
//     abcd.style.backgroundColor = "antiquewhite";
// });

// abcd.addEventListener("mouseout", function () {
//     abcd.style.backgroundColor = "rgb(74, 74, 112)";
// });

window.addEventListener("mousemove", (ele) => {
    abcd.style.top = ele.clientY + "px";
    abcd.style.left = ele.clientX + "px";
});