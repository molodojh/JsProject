let regWindow = document.querySelector(".regWindow");
let regButton = document.querySelector("#regButton");
let regWindowCloser = document.querySelector(".regWindowClose")
function popUpStyleChanger(){
    regWindow.classList.add("active");
};
function popUpCloser(){
    regWindow.classList.remove("active")
}
regButton.addEventListener("click", popUpStyleChanger);
regWindowCloser.addEventListener("click", popUpCloser)
