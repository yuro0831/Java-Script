let a = 9; // aは10ではない
let b = 12; // bは10以上20未満の偶数

// aが10でないことを確認
if (a != 10) {
  console.log(`aは10ではありません。a = ${a}`);
} else {
  console.log(`aは10です。a = ${a}`);
}

// bが10以上20未満で偶数であることを確認
if (b >= 10 && b < 20 && b % 2 === 0) {
  console.log(`bは10以上20未満の偶数です。b = ${b}`);
} else {
  console.log(`bは条件を満たしません。b = ${b}`);
}

let x = 10;
if (x >= 10 && x <= 20) {
  console.log("成功です");
} else {
  console.log("失敗です");
}

let y = 0;
if (y % 2 === 0) {
  console.log("偶数です");
} else if (y % 2 !== 0) {
  console.log("奇数です");
}
