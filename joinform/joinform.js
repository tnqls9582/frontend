// ID
function idcheck() {
    var exp = /^(?=.*[a-z])(?=.*\d)[a-z\d]{6,10}$/;
    var id = document.getElementById('id').value;
    var idcheck = document.getElementById('idcheck');
    if(id.length == 0) {
        idcheck.innerHTML = '필수입력입니다';
        idcheck.style.color = 'red';
    } else if(id.match(exp)) {
        idcheck.innerHTML = '유효한 형식입니다';
        idcheck.style.color = 'green';
    } else {
        idcheck.innerHTML = '형식에 맞지 않습니다';
        idcheck.style.color = 'red';
    }
}

// PassWord
function pwcheck() {
    var exp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!#$*])[a-zA-Z\d!#$*]{8,16}$/;
    var pw = document.getElementById('pw').value;
    var pwcheck = document.getElementById('pwcheck');
    if(pw.length == 0) {
        pwcheck.innerHTML = '필수입력입니다';
        pwcheck.style.color = 'red';
    } else if(pw.match(exp)) {
        pwcheck.innerHTML = '유효한 형식입니다';
        pwcheck.style.color = 'green';
    } else {
        pwcheck.innerHTML = '형식에 맞지 않습니다';
        pwcheck.style.color = 'red';
    }            
}

// PassWord Check
function pwresult() {
    var pw = document.getElementById('pw').value;
    var check = document.getElementById('check').value;
    var pwresult = document.getElementById('pwresult');
    if(pw == check) {
        pwresult.innerHTML = '일치합니다';
        pwresult.style.color = 'green';
    } else {
        pwresult.innerHTML = '일치하지 않습니다';
        pwresult.style.color = 'red';
    }
}

// Name
function namecheck() {
    var name = document.getElementById('name').value;
    var namecheck = document.getElementById('namecheck');
    if(name.length == 0) {
        namecheck.innerHTML = '필수입력입니다';
        namecheck.style.color = 'red';
    } else {
        namecheck.innerHTML = '';
    }
}

// EMail
function email() {
    var selectemail = document.getElementById('selectemail').value;
    document.getElementById('email').value = selectemail;
}

// Phone
function phonecheck() {
    var exp = /^\d{3}-\d{4}-\d{4}$/;
    var phone = document.getElementById('phone').value;
    var phonecheck = document.getElementById('phonecheck');
    if(phone.length == 0) {
        phonecheck.innerHTML = '필수입력 항목입니다';
        phonecheck.style.color = 'red';
    } else if(phone.match(exp)) {
        phonecheck.innerHTML = '유효한 형식입니다';
        phonecheck.style.color = 'green';
    } else {
        phonecheck.innerHTML = '형식에 맞지 않습니다';
        phonecheck.style.color = 'red';
    }
}