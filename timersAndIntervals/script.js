
let count = 0;
let progress = document.querySelector(".progress-bar");
let progressText = document.querySelector(".percentage");
let btn = document.querySelector("button");

btn.addEventListener("click", () => {
    let interval = setInterval(() => {
        if (count <= 99) {
            count++;
            progress.style.width = `${count}%`;
            progressText.textContent = `${count}%`;
        } else {
            document.querySelector("h2").textContent = "Downloded";
            clearInterval(interval);
        }
    }, 100)
})

// setTimeout(function () {
//     document.querySelector(".container").style.display = "none";
// }, 3000);