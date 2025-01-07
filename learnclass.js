class Temperature {
    constructor(celcius){
        this.celcius = celcius;
    }

    get fahrenheit(){
        return this.celcius * 1.8 + 32;
    }

    set fahrenheit(value){
        this.celcius = (value + 32) / 18;
    }

    static fromFahrenheit(value){
        return new Temperature((value - 32) / 18);
    }
}

let temp = new Temperature(22);
console.log(temp.fahrenheit);

temp.fahrenheit = 86;
console.log(temp.celcius);

let boil = Temperature.fromFahrenheit(100);
console.log(boil.celcius);


// Regular Express

console.log(/abc/.test("abcde"));

console.log(/[0-9]/.test("in 1992"));

let dateTime = /\d\d-\d\d-\d\d\d\d \d\d:\d\d/;
console.log(dateTime.test("08-12-2013 17:56"));

console.log(dateTime.test("03-jan-1920 12:10"));

console.log(/'\d+'/.test("'123'"));

let dateTimes = /\d{1,2}-\d{1,2}-\d{4} \d{1,2}:\d{2}/;
console.log(dateTimes.test("1-30-2003 8:45"));