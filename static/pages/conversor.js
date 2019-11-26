function converte(){

var dolar = parseFloat(document.getElementById('valor_dolar').innerHTML);

var k = document.getElementById('entrada_usuario').value;
if(k == ''){
    alert("Campo de valor em reais obrigatório");
}else{
    var resposta = dolar * parseFloat(k);

    document.getElementById('resposta').innerHTML = "R$ " + resposta.toFixed(2);
}
    return;
}