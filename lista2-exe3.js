
chefe()

function chefe(){
    // não mais vamos declarar variárveis usando a palavra-chave var (escopo global)
    // a partir de agora vamos declarar usando o let (escopo local da função onde é declardo)
    let vetor = [] // este vetor vai existir apenas dentro desta função
    do {

        var opcao = Number(prompt(`Digite \n [1]. Entrada \n [2]. Média de idade \n [3]. Maior idade \n [4]. Qtde \n [5]. Percentual \n [6]. Sair`))
        switch(opcao){
            case 1: entrada(vetor) // estamos passando uma referência na memória do vetor
                    break
            case 2: calcularMedia(vetor) // estamos passando uma referência na memória do vetor
                    break
            case 3: calcularMaiorIdade(vetor) // estamos passando uma referência na memória do vetor
                    break
            case 4: calcularQtde(vetor) // estamos passando uma referência na memória do vetor
                    break
            case 5: calcularPercentual(vetor) // estamos passando uma referência na memória do vetor
                    break
            case 6: console.log(`Obrigado por utilizar nosso programa`)
                    break
            default: console.log(`Opção inválida, tente novamente`)
        }
    
    }
    while (opcao != 6)
}

function entrada(vet){ // vet vai apontar para vetor
    console.log(`Entrou na função entrada`)
    // cria objeto
    let objeto = new Object()
    objeto.sexo = prompt(`Informe M para masculino e F para feminino`).toUpperCase() // converte para letra maiúscula
    objeto.altura = Number(prompt(`Informe a altura`))
    objeto.idade = Number(prompt(`Informe a idade`))
    objeto.olhos = prompt(`Informe A (azuis) V (Verde) C (castanho)`).toUpperCase() // converte para letra maiúscula
    // vamos inserir em vetor e não em vet
    vet.push(objeto) //
    console.log(`Habitante inserido com sucesso`)
}

function calcularMedia(vet){ // vet vai apontar para vetor
    console.log(`Entrou na função calcular média`)
    let soma = 0 // soma as idades
    let qtde = 0 // conta qts pessoas tem olhos castanho e altura superior a 1.60
    for(let i=0;i<vet.length;i++){
        if ((vet[i].olhos == "C") && (vet[i].altura > 1.60)){
            soma = soma + vet[i].idade
            qtde++
        }
    }
    console.log(`A média da idade é ${soma/qtde}`)
}

function calcularMaiorIdade(vet){
    let maiorIdade = vet[0].idade 
    for(let i=1; i < vet.length; i++){
        if (vet[i].idade > maiorIdade){
            maiorIdade = vet[i].idade // atualiza maior idade
        }
    }
    console.log(`Entrou na função calcular maior idade`)
}

function calcularQtde(vet){ // vet vai apontar para vetor
    console.log(`Entrou na função calcular qtde`)
}

function calcularPercentual(vet){ // vet vai apontar para vetor
    console.log(`Entrou na função calcular percentual`)
}