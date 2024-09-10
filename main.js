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

// Create Community Active Drop Down Menu 
let communityLink = document.querySelector(".cummunity");
let socialIcons = document.querySelector(".social-links");

communityLink.addEventListener("click", () => {
    if (socialIcons.classList.contains("active")) {
        socialIcons.classList.remove("active");
    } else {
        socialIcons.classList.add("active");
    }
});


// Create Alart Function 
let alartMessage = document.querySelector('.alart');
let exitbutton = document.querySelector(".exit");
let cancelButton = document.querySelector(".cancel");
let joinButton = document.querySelector(".join");

function cancelMessage() {
    alartMessage.style.display = "none";
    // window.sessionStorage.setItem("alart show", 'true');
}

exitbutton.addEventListener("click", cancelMessage);
cancelButton.addEventListener("click", cancelMessage);
joinButton.addEventListener("click", cancelMessage);

