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

let h1 = document.querySelector("h1");

window.addEventListener("keydown", (ele) => {
    if (ele.key === " ") {
        h1.textContent = "SPACE";
    } else {
        h1.textContent = ele.key;
    }
})