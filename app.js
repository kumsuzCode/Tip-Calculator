// Selectors & Event listeners
console.log('hello')
const tip5 = document.querySelector('#tip5');
const tip10 = document.querySelector('#tip10');
const tip15 = document.querySelector('#tip15');
const tip25 = document.querySelector('#tip25');
const tip50 = document.querySelector('#tip50');
const customTipInput = document.querySelector('#custom input');
const resetBtn = document.querySelector('#reset-btn');

const tipAmount = document.querySelector('#tip-amt');
const totalAmount = document. querySelector('#total-amt');

const numPeopleInput = document.querySelector('#num-input').value = 0;

tip5.addEventListener('click', calc.bind(null, 0.05));
tip10.addEventListener('click', calc.bind(null, 0.10));
tip15.addEventListener('click', calc.bind(null, 0.15));
tip25.addEventListener('click', calc.bind(null, 0.25));
tip50.addEventListener('click', calc.bind(null, 0.50));
customTipInput.addEventListener('input', customCalc.bind(null));

resetBtn.addEventListener('click', ()=> {
    tipAmount.innerText = `$0.00`;
    totalAmount.innerText = `$0.00`;
    document.querySelector('#bill-input').value = null;
    document.querySelector('#num-input').value = null;
    document.querySelector('#num-input').style.border = "none"
})


//Functions

function calc(tipPercentage) {

    const bill = document.querySelector('#bill-input').value;
    const numPeopleInput = document.querySelector('#num-input').value;
    const numPeopleLabel = document.querySelector('#num-input'); 

    if (numPeopleInput > 0) {

        numPeopleLabel.style.border = "none";

        const tipCalculation = (tipPercentage*bill) / numPeopleInput;
        const totalCalculation = tipCalculation * numPeopleInput;

        tipAmount.innerText = `$${tipCalculation.toFixed(2)}`;
        totalAmount.innerText = `$${totalCalculation.toFixed(2)}`;

    } else {
        numPeopleLabel.style.border = "2px solid red";
    }

}

function customCalc() {

    const bill = document.querySelector('#bill-input').value;
    const numPeopleInput = document.querySelector('#num-input').value;
    const numPeopleLabel = document.querySelector('.num-people-label');

    const customTip = document.querySelector('#custom input').value;

    const customTipPercentage = customTip/100;

    if (numPeopleInput > 0) {

        numPeopleLabel.style.border = "none";

        const tipCalculation = (customTipPercentage*bill) / numPeopleInput;
        const totalCalculation = ((1+customTipPercentage)*bill) / numPeopleInput;

        tipAmount.innerText = `$${tipCalculation.toFixed(2)}`;
        totalAmount.innerText = `$${totalCalculation.toFixed(2)}`;

    } else {
        numPeopleLabel.style.border = "2px solid red";
    }
}