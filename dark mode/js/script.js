const buttonElement = document.querySelector(".drk-mode-button")
const documentBody = document.body;
const currentStateDarkmode = window.localStorage.getItem("Darkmode")

function check(){
    if (currentStateDarkmode === true){
        let isDarkmode = true
    }
}
check()

function toggleDarkmode (){
    isDarkmode = !isDarkmode
    window.localStorage.setItem("Darkmode", isDarkmode)
    if (isDarkmode){
         documentBody.style.backgroundColor = "Black";
        console.log("Dark mode activated:" + isDarkmode)
    } else {
        console.log("Dark mode activated:" + isDarkmode)
        documentBody.style.backgroundColor = "white";
    }
}

buttonElement.addEventListener("click", toggleDarkmode)

console.log(isDarkmode)