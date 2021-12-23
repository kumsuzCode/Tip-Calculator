// Selectors & Event listeners

const tip5 = document.querySelector('#tip5');
const tip10 = document.querySelector('#tip10');
const tip15 = document.querySelector('#tip15');
const tip25 = document.querySelector('#tip25');
const tip50 = document.querySelector('#tip50');
const customTipInput = document.querySelector('#custom input');

const tipAmount = document.querySelector('#tip-amt');
const totalAmount = document. querySelector('#total-amt');


tip5.addEventListener('click', calc.bind(null, 0.05));
tip10.addEventListener('click', calc.bind(null, 0.10));
tip15.addEventListener('click', calc.bind(null, 0.15));
tip25.addEventListener('click', calc.bind(null, 0.25));
tip50.addEventListener('click', calc.bind(null, 0.50));
customTipInput.addEventListener('input', customCalc.bind(null));


//Functions

function calc(tipPercentage) {

    const bill = document.querySelector('#bill-input').value;
    const numPeople = document.querySelector('#num-people-input').value;
    const numPeopleInput = document.querySelector('#num-people-input');

    if (numPeople > 0) {

        numPeopleInput.style.border = "none";

        const tipCalculation = (tipPercentage*bill) / numPeople;
        const totalCalculation = ((1+tipPercentage)*bill) / numPeople;

        tipAmount.innerText = `$${tipCalculation.toFixed(2)}`;
        totalAmount.innerText = `$${totalCalculation.toFixed(2)}`;

    } else {
        numPeopleInput.style.border = "2px solid red";
    }

}

function customCalc() {

    const bill = document.querySelector('#bill-input').value;
    const numPeople = document.querySelector('#num-people-input').value;
    const numPeopleInput = document.querySelector('#num-people-input');
    const customTip = document.querySelector('#custom input').value;
    const customTipPercentage = customTip/100;

    if (numPeople > 0) {

        numPeopleInput.style.border = "none";

        const tipCalculation = (customTipPercentage*bill) / numPeople;
        const totalCalculation = ((1+customTipPercentage)*bill) / numPeople;

        tipAmount.innerText = `$${tipCalculation.toFixed(2)}`;
        totalAmount.innerText = `$${totalCalculation.toFixed(2)}`;

    } else {
        numPeopleInput.style.border = "2px solid red";
    }
}