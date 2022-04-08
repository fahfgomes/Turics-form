function validation() {
var text = document.getElementById("text");
var email = document.getElementById("email");
var number = document.getElementById("form-number");
var password = document.getElementById("form-password");
    
    if (text.value == '') {
        alert("o Campo NAME não pode ser vazio");
        text.focus();
        return false;
    } 
    if (email.value =='' ) {
        alert("o Campo EMAIL não pode ser vazio");
        email.focus();
        return false;
    }
    if (email.value.indexOf('@')==-1 || email.value.indexOf('.')==-1) {
        alert("Preencha o e-mail corretamente");
        email.focus();
        return false;
    }
    if (number.value == '') {
        alert("o Campo NUMBER não pode ser vazio");
        number.focus();
        return false;
    }
    if (password.value =='' ) {
        alert("o Campo SENHA não pode ser vazio");
        password.focus();
        return false;
    }
    if (password.value.length<8) {
        alert("A senha deve conter no minimo 8 caracteres");
        password.focus();
        return false;
    }


    else {
        alert("Cadastro feito com sucesso")
    }    



}

