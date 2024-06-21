class Taiyaki {
  constructor(taste) {
    this.taste = taste;
  }
  showTaste() {
    console.log(`中身は${this.taste}です`);
  }
}

let anko = new Taiyaki("あんこ");
let cream = new Taiyaki("クリーム");
let cheese = new Taiyaki("チーズ");

anko.showTaste();
cream.showTaste();
cheese.showTaste();
