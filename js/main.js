// user action button
// transaction btn
document.getElementById('btn-transaction').addEventListener('click', function(){
    showSectionById('transaction-section');
})
// add cash btn
document.getElementById('btn-addCash').addEventListener('click', function(){
    showSectionById('form-add-money')
})
// Cash out btn
document.getElementById('btn-cashOut').addEventListener('click', function(){
    
    showSectionById('form-cash-out');
})
// add cash form 
document.getElementById('btn-add-cash').addEventListener('click', function(event){
    event.preventDefault();
    if (isNaN(addMoney) == true) {
        
    }
    const addMoney = getInputFieldValueById('input-add-cash');
    const pin = getInputFieldValueById('input-pin-add');
    if (pin == 1234) {
        const currentBalance = getTextFieldValueById('current-balance');
        const newBalance = currentBalance + addMoney;
        document.getElementById('current-balance').innerText = newBalance;
        document.getElementById('input-add-cash').value = '';
        document.getElementById('input-pin-add').value = '';
        
    }
    else{
        alert('can not add money. Please try later!');
    }
})
// cash out form
document.getElementById('btn-cash-out').addEventListener('click', function(event){
    event.preventDefault();
    const cashOutMoney = getInputFieldValueById('input-cash-out');
    const pin = getInputFieldValueById('input-pin-out');
    if (pin == 1234) {
        const currentBalance = getTextFieldValueById('current-balance');
        const newBalance = currentBalance - cashOutMoney;
        document.getElementById('current-balance').innerText = newBalance;
        document.getElementById('input-cash-out').value = '';
        document.getElementById('input-pin-out').value = '';
        
    }
    else{
        alert('can not add money. Please try later!');
    }
})