let userName = "池田";
console.log(userName + "くん");
let number = 10;
console.log(number * 3);

console.log(`${userName}くんは${number}月生まれです`);

var price = 100;
console.log(price * 2);

var price = 500;
console.log(price * 2);

let num1 = 10;
let num2 = 4;
let result;
//足し算
result = num1 + num2;
console.log(result);
//引き算
result = num1 - num2;
console.log(result);
//掛け算
result = num1 * num2;
console.log(result);
//割り算
result = num1 / num2;
console.log(result);
//余剰
result = num1 % num2;
console.log(result);

//文字列の結合の例
//HelloとWorldに空白を入れたいときは、Helloの直後か、Worldの直前にスペースを入れてください
console.log("Hello" + "World");
//変数の結合の例
let lastName = "田中";
let firstName = "一郎";
let fullName = lastName + firstName;

console.log(fullName);

let x = 10;
x++;
console.log(x);
let y = 10;
y--;
console.log(y);

console.log(10 === 10);
console.log(10 === 5);
console.log(10 !== 5);
console.log(10 > 20);
console.log(10 <= 10);

console.log("10" === 10);
console.log("10" == 10);

let score = 0;
if (score >= 70) {
  console.log("合格");
} else if (score === 0) {
  console.log("０点はまずいです...");
} else {
  console.log("不合格");
}

let a = 10;
let b = 15;

if (a % 2 === 0) {
  console.log(a);
}

if (b % 2 !== 0) {
  console.log(b);
}
