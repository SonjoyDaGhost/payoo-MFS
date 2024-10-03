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
function getElementById(id){
    const element = document.getElementById(id);
    return id;
}