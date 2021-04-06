let open = document.getElementById("open-icon");
let close = document.getElementById("close-icon")
let navbar = document.getElementById("navbar");


open.addEventListener("click", () => {
    navbar.classList.add("open");
})

close.addEventListener("click", () => {
    navbar.classList.remove("open")
})

