// // selection displayer section 
const totalDipositeInDisplay = document.getElementById('display-total-diposite')
const totalwithdrawInDisplay = document.getElementById('display-total-withdraw')
const totalBalanceInDisplay = document.getElementById('display-total-balance')


// utilitis
function getValueFromInputs (id) {
    const inputStringValue = document.getElementById(id).value;
    const inputNumberValue = parseFloat(inputStringValue);
    document.getElementById(id).value = ''
    return inputNumberValue;
}
function getValueFromElement (id) {
    const elementStringValue = document.getElementById(id).innerText;
    const elementNumberValue = parseFloat(elementStringValue);
    return elementNumberValue;
}


// handlers
document.getElementById('diposite-btn').addEventListener('click', function(){
    const elementValue = getValueFromElement('display-total-diposite');
    const inputValue = getValueFromInputs('diposite-input');
    let total = elementValue + inputValue;
    totalDipositeInDisplay.innerText = total;
    
    const balanceValue = getValueFromElement('display-total-balance');
    const totalBalance = balanceValue + inputValue;
    totalBalanceInDisplay.innerText = totalBalance;
});


document.getElementById('withdraw-btn').addEventListener('click', function(){
    const elementValue = getValueFromElement('display-total-withdraw');
    const inputValue = getValueFromInputs('withdraw-input');
    let total = elementValue + inputValue;
    totalwithdrawInDisplay.innerText = total;
    
    const balanceValue = getValueFromElement('display-total-balance');
    const totalBalance = balanceValue - inputValue;
    totalBalanceInDisplay.innerText = totalBalance;
});

// fix text uppercase 
