export class ComponentService {
  constructor() {
    this.counter = 0;
    this.incrementButton1 = document.getElementById("increment1");
    this.decrementButton1 = document.getElementById("decrement1");
    this.incrementButton2 = document.getElementById("increment2");
    this.decrementButton2 = document.getElementById("decrement2");
    this.resultDiv = document.getElementById("result");
  }

  setResult(str) {
    this.resultDiv.innerText = str;
    console.log("pressed");
  }

  onClickIncrement(cb) {
    this.incrementButton1.addEventListener("click", cb);
    this.incrementButton2.addEventListener("click", cb);
  }
  onClickDecrement(cb) {
    this.decrementButton1.addEventListener("click", cb);
    this.decrementButton2.addEventListener("click", cb);
  }
}
