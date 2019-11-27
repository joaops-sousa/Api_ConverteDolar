function converte_dolar_real(){

var dolar = parseFloat(document.getElementById('valor_dolar').innerHTML);

var k = document.getElementById('entrada_usuario_dolar').value;
if(k != ''){
    var resposta = dolar * parseFloat(k);

    document.getElementById('entrada_usuario_real').value = resposta.toFixed(2);
}
    return;
}

function converte_real_dolar(){
var dolar = parseFloat(document.getElementById('valor_dolar').innerHTML);

var k = document.getElementById('entrada_usuario_real').value;
if(k != ''){
    var resposta = parseFloat(k) / dolar;

    document.getElementById('entrada_usuario_dolar').value = resposta.toFixed(2);
}

    return;
}

window.onload=function(){
    document.getElementById('entrada_usuario_dolar').value = 1;
    converte_dolar_real();
}