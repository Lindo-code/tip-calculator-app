class Tipcalculator {
  constructor() {
    this.bill = 100;
    this.persons = 5;
    this.tip = 15;
    this.tipAmmount = 0; //per person
    this.total = 0; //per person
  }
  billing(value1) {
    this.bill = value1;
  }
  persons_(value3) {
    this.persons = value3;
  }
  calcTipPP(num) {
    this.tip = num;
    this.tipAmmount = (this.bill * this.tip)/100;
    this.tipAmmount = this.tipAmmount/this.persons;
    this.tipAmmount = Number(this.tipAmmount.toString().replace(/(?<=\.\d\d).*/, ""));
    this.total = this.calcTotalPP(this.tipAmmount);
  }
  calcTotalPP(roundToTwo) {
    this.total = (this.bill/this.persons) + roundToTwo;
    this.total = Number(this.total.toString().replace(/(?<=\.\d\d).*/, ""));
    return this.total;
  }
  calculate() {
    const element1 = document.getElementById('tAResult');
    const element2 = document.getElementById('tPResult');
    element1.innerText = this.tipAmmount;
    element2.innerText = this.total;
  }
}
const calculator = new Tipcalculator();
/*calculator.billing(10)
calculator.persons_(3)
calculator.calcTipPP(50)
console.log(calculator)*/