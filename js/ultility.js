function getInputFieldValueById(id)  {
    const inputValue = document.getElementById(id).value;
    const inputValueNumber = parseFloat(inputValue);
    console.log(inputValueNumber);
    return inputValueNumber;
}
function getTextFieldValueById(id){
    const textValue = document.getElementById(id).innerText;
    const textNumber = parseFloat(textValue);
    return textNumber;
}
function showSectionById(id){
    document.getElementById('form-add-money').classList.add('hidden');
    document.getElementById('form-cash-out').classList.add('hidden');
    document.getElementById('transaction-section').classList.add('hidden');

    document.getElementById(id).classList.remove('hidden');
}