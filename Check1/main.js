let numbers = [2, 5, 12, 13, 15, 18, 22];

function isEven(num) {
  if (num % 2 === 0) {
    console.log(num + "は偶数です");
  }
}

for (let i = 0; i < numbers.length; i++) {
  isEven(numbers[i]);
}

class Car {
  constructor(gas, number) {
    this.gas = gas;
    this.number = number;
  }
  getNumGas() {
    console.log("ガソリンは${this.gas}です。ナンバーは${this.number}です");
  }
}

let redCar = new Car("満タン", "1234");
let blueCar = new Car("半分", "5678");

redCar.getNumGas();
blueCar.getNumGas();
