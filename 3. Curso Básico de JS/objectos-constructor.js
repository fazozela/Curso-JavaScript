function car(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
}

var cars = [];

for (var i = 0; i <= 10; i++) {
    var brand = "Suzuki"
    var model = "Jeep"
    var year = 2020
    cars.push(new car(brand, model, year));
}

for (var car of cars) {
    console.log(car)
}