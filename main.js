// Create Burger Icon Menu
let burgerIcon = document.querySelector(".burger-menu .icon");
let burgerMenu = document.querySelector(".burger-menu .burger");
let linksBurgerMenu = document.querySelectorAll(".burger ul li");

burgerIcon.addEventListener("click", () => {
    if (burgerMenu.classList.contains("active")) {
        burgerIcon.classList.remove("active");
        burgerMenu.classList.remove("active");
    } else {
        burgerIcon.classList.add("active");
        burgerMenu.classList.add("active");
    }
})

linksBurgerMenu.forEach((el) => {
    el.addEventListener("click", () => {
        burgerIcon.classList.remove("active");
        burgerMenu.classList.remove("active");
    })
});

// Create Back To Top Function 
let backTopButton = document.querySelector(".to-top");
backTopButton.addEventListener("click", () => {
    window.scrollTo(0, 0)
});
