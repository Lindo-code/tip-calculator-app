class Tipcalculator {
  constructor() {
    this.bill = 0;
    this.persons = 0;
    this.tip = 0;
    this.tipAmmount = 0; //per person
    this.total = 0; //per person
  }
  billing(value1) {
    const element0 = document.getElementById("error0");
    this.bill = value1;
    if (element0.style.display === "block") {
      element0.style.display = "none";
    }
  }
  persons_(value3) {
    const element = document.getElementById("error1");
    this.persons = value3;
    if (element.style.display === "block") {
      element.style.display = "none";
    }
  }
  calcTipPP(num) {
    this.tip = num;
    this.tipAmmount = (this.bill * this.tip)/100;
    this.tipAmmount = this.tipAmmount/this.persons;
    this.tipAmmount = Number(this.tipAmmount.toString().replace(/(?<=\.\d\d).*/, ""));
    this.total = this.calcTotalPP(this.tipAmmount);
    const element = document.getElementById("error1");
    const element0 = document.getElementById("error0");

    if (this.bill === 0 || this.bill === NaN || this.bill === "") {
      element0.style.display = "block";
    }
    if (this.persons === 0 || this.persons === NaN || this.persons === "") {
      element.style.display = "block";
    } else {
      if (element0.style.display === "block" || element.style.display === "block") {
        element0.style.display = "none";
        element.style.display = "none";
      }
      const element1 = document.getElementById('tAResult');
      const element2 = document.getElementById('tPResult');
      element1.innerText = this.tipAmmount;
      element2.innerText = this.total;
    }
  }
  calcTotalPP(roundToTwo) {
    this.total = (this.bill/this.persons) + roundToTwo;
    this.total = Number(this.total.toString().replace(/(?<=\.\d\d).*/, ""));
    return this.total;
  }
  reset() {
    const element1 = document.getElementById('tAResult');
    const element2 = document.getElementById('tPResult');
    element1.innerText = 0;
    element2.innerText = 0;
  }
}
const calculator = new Tipcalculator();
/*calculator.billing(10)
calculator.persons_(3)
calculator.calcTipPP(50)
console.log(calculator)*/