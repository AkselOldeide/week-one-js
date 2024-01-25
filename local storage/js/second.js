const myCat = window.localStorage.getItem("My cat's name");
const myAttributes = window.localStorage.getItem("My attributes");
const theInfernalTriad = window.localStorage.getItem("The Infernal Triad");
const theInfernalTriadParsed = JSON.parse(theInfernalTriad) 
const myAttributesParsed = JSON.parse(myAttributes);

console.log(myCat);
console.log(myAttributesParsed);
console.log(theInfernalTriadParsed)