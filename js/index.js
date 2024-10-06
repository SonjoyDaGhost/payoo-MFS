document.getElementById('btn-login').addEventListener('click', function(event){
    event.preventDefault();
    const phone = getInputFieldValueById('input-phone-number');
    const password = getInputFieldValueById('input-password');
    if (phone === 5 && password === 1234) {
        window.location.href = 'https://sonjoydaghost.github.io/payoo-MFS/home.html';
        
    }
    else{
        alert('wrong phone number or pin');
    }
})