var numeroSecreto = parseInt(Math.random() * 1001);
var chute;
var tentativas = 0;

alert('Você tem 10 tentativas para acertar o Número Secreto entre 0 e 1000, boa sorte ;)')

while (chute != numeroSecreto && tentativas < 10) {   
    if (tentativas > 0) {
        alert('Você ja fez ' + tentativas + ' tentativa');
    }  
    
    chute = prompt('Digite um número entre 0 e 1000');

    if (chute == numeroSecreto) {
        alert('Acertou! Parabéns :)');
    } else if (chute > numeroSecreto) {
        alert('O número secreto é menor que ' + chute);
    } else if (chute < numeroSecreto) {
        alert('O número secreto é maior que ' + chute);
    }

    tentativas += 1;
}
