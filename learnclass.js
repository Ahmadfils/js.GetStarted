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