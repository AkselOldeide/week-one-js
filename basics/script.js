let car = {
    manufacturer: "Volvo",
    productionYear: 1992,
    condition: "Used",
    price: 10000,
    color: "brown",
}

let random = [
    {name: "Aksel Oldeide", age: 26, gender: "Male", married: false,},
    {name: "Helene Flått", age: 28, gender: "Female", married: false,},
    {name: "Poupée Panatheon", age: 32, gender: "Female", married: true,},
]
random.forEach(function (deltaker){
    const infoAksel = console.log("Navn: "+ deltaker.name+ " Alder: " + deltaker.age);
})