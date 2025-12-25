function setDark() {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.body.classList.add("dark");
    } else {
        document.body.classList.remove("dark");
    }
}

if (localStorage.getItem("theme")) {
    document.body.classList.add(localStorage.getItem("theme"));
} else {
    setDark();
}




let btn = document.querySelector("button");
btn.addEventListener("click", () => {
    if (document.body.classList.contains("dark")) {
        document.body.classList.remove("dark");
        document.body.classList.add("light")
        localStorage.setItem("theme", "light");
    } else {
        document.body.classList.add("dark");
        document.body.classList.remove("light");
        localStorage.setItem("theme", "dark");
    }
});


window.matchMedia('(prefers-color-scheme: dark)').addEventListener("change", () => {
    if (!localStorage.getItem("theme")) {
        setDark();
    }
});