const dropdown = document.querySelector("#circles");
const circleContainer = document.querySelector("#display")

dropdown.onchange = function () {
    circleContainer.innerHTML = "";
    for(let i = 1; i <= dropdown.value; i++){
        console.log(i);
        circleContainer.innerHTML += `
        <li>${i}</li>
        `
    }
};
