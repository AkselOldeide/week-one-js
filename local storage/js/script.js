const catName = "Luna" 
const infernalTriad = ["Aksel, Helene, Panida"]
const aksel = {
    year: 1997,
    Gender: "Male",
    height: "183",
}



window.localStorage.setItem("My cat's name", catName);
window.localStorage.setItem("The Infernal Triad", JSON.stringify(infernalTriad));
window.localStorage.setItem("My attributes", JSON.stringify(aksel));
