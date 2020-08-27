
chefe()

function chefe(){
    var vetor = [] // declara o vetor
    exe7(vetor) // estamos passando o vetor como parâmetro - escopo global

}

function exe7(vet){ // vet representa vetor -> o que fizermos com vet, será feito em vetor

    var numero = Number(prompt(`Informe um numero`))
    do {

        // coloca o numero em vet
        vet.push(numero)
        numero = Number(prompt(`Informe outro numero, informe número negativo para encerrar`))
    }
    while (numero >= 0)
}

