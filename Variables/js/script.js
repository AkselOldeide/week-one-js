// const infernalTriad = ["Aksel","Helene","Panida"]
// console.log(infernalTriad)

// console.log(".pushed 'Berken' and .unshifted 'Kenneth'")

// infernalTriad.push("Berken")
// infernalTriad.unshift("Kenneth")
// console.log(infernalTriad)

// console.log("Used .pop that removes Berken (as last entry) and used .shift() to remove Kenneth (As first entry)")
// infernalTriad.pop()
// infernalTriad.shift()
// console.log(infernalTriad)
// console.log("The index of Panida is " + infernalTriad.indexOf("Panida"))

// function buttonPress(){
//     document.body.style.backgroundColor = "Black";
//     document.getElementById(knapp1).style.backgroundColor = "Red";
//     document.getElementById(knapp1).style.fontFamily = "Roboto"
// }

// const aksel = {
//     name: "Aksel",
//     age: 26,
//     study: "Front-end development",
//     blind: false,
//     deaf: false, 
// }

// console.log(`Hello, my name is ${aksel.name}, i am ${aksel.age} years old and i study ${aksel.study}`)

const infernalTriad = [
    {
        name: "Aksel",
        age: 26,
        gender: "male"
    },
    {
        name: "Helene",
        age: 28,
        gender: "female"
    },
    {
        name: "Panida",
        age: 34,
        gender: "female"
    },
]

var amHome = true
var wantCompany = true

function changeValueAmHome(){
    wantCompany=!wantCompany
    console.log("Value changed")
}

function changeValueWantCompany(){
    amHome=!amHome;
    console.log("Value changed")
}

function doorbellRing(){

    if ((amHome == true && wantCompany == true)){
        console.log("Open door");
    } else if ((amHome == true && wantCompany == false)){
        console.log("Don't open");
    } else {
        console.log("No answer");
    }
}

doorbellRing();