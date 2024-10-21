const letters = []
while(true){
   let option = prompt(`voce tem atualmente ${letters.length}cartas no seu baralho;
    voce deseja:
    1.Adicionar uma carta;
    2.Puxar uma carta;
    3.sair;`)

    if(option === '1'){
        addletter = prompt('digite o nome da carta')
        letters.unshift(addlatter)
        console.log(`a carta ${addlater} adicionada ao seu baralho. `)
    } else if(option === '2'){
        if(letters.length > 0){
            const pullCard = letters.shift()
            console.log(`voce puxou a carta ${pullCard}`)
        }
    }else if(option === '3'){
        console.log('saindo do programa...')
    }else{
        console.log('opcao invalida tente novamente')
    }

}
