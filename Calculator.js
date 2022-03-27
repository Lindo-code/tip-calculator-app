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
    element0.style.display = (isNaN(this.bill) && this.bill.length !== 0 || this.bill < 1 && this.bill.length !== 0) ? "block" : "none";
  }
  persons_(value3) {
    const element = document.getElementById("error1");
    this.persons = value3;
    element.style.display = (isNaN(this.persons) && this.bill.length !== 0|| this.persons < 2 && this.persons.length !== 0) ? "block" : "none";
  }
  calcTipPP(num) {
    this.tip = num;
    this.tipAmmount = (this.bill * this.tip)/100;
    this.tipAmmount = this.tipAmmount/this.persons;
    this.tipAmmount = Number(this.tipAmmount.toString().replace(/(?<=\.\d\d).*/, ""));
    this.total = isNaN(this.calcTotalPP(this.tipAmmount)) ? 0 :this.calcTotalPP(this.tipAmmount);
    const element = document.getElementById("error1");
    const element0 = document.getElementById("error0");

    if (this.bill < 1 || isNaN(this.bill) || this.bill === "") {
      element0.style.display = "block";
    }
    if (this.persons < 1 || isNaN(this.persons) || this.persons === "") {
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
    return isNaN(this.total) ? 0 : this.total;
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