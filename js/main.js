const billPrice = document.querySelector("#price");
const customPercent = document.querySelector("#custom");
const numOfPeople = document.querySelector("#num-people");
const resetBtn = document.querySelector(".reset");
const taxAmount = document.querySelector(".tax");
let totalAmount = document.querySelector(".total");

const calculatePerPerson = () => {
  
  numOfPeople.value = 1;
  totalAmount.textContent = billPrice.value / numOfPeople.value;

}

billPrice.addEventListener('keyup', calculatePerPerson);
numOfPeople.addEventListener('keyup', calculatePerPerson);

  
