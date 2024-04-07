let toggleButton = document.querySelector(".nav-toggle");
let Menu = document.querySelector(".menu");
let toBlur = document.querySelector(".to-blur");


toggleButton.addEventListener("click", function() {
    Menu.classList.toggle("activeMenu");
    toggleButton.classList.toggle("active");
    toBlur.classList.toggle("toBlur");
});

document.onclick = function(e){
    if(!toggleButton.contains(e.target) && !menubar.contains(e.target)){
        Menu.classList.remove("activeMenu");
        toggleButton.classList.remove("active");
    }
}