const FORMULARIO_COMPARADOR = document.querySelector('#formulario-comparador')
const PRIMEIRO_VALOR = document.querySelector('#primeiro-valor')
const SEGUNDO_VALOR = document.querySelector('#segundo-valor')

function validandoComparacao(){
    return Number(PRIMEIRO_VALOR.value) < Number(SEGUNDO_VALOR.value)
}

FORMULARIO_COMPARADOR.addEventListener('submit', function(eventoSubmit){
    eventoSubmit.preventDefault()

    let primeiroValor = PRIMEIRO_VALOR.value
    let segundoValor = SEGUNDO_VALOR.value

    const AVISO = document.querySelector('.aviso')
    const MSG_ERRO_MAIOR = `Tente novamente! O primeiro valor: <strong>${primeiroValor}</strong> é maior que o segundo valor: <strong>${segundoValor}</strong>.`
    const MSG_ERRO_IGUAL = `Tente novamente! O primeiro valor: <strong>${primeiroValor}</strong> é igual ao segundo valor: <strong>${segundoValor}</strong>.`
    const MSG_POSITIVA_MAIOR = `Certo! O primeiro valor: <strong>${primeiroValor}</strong> é menor que o segundo valor: <strong>${segundoValor}</strong>.`
    let comparacaoValida = false
    comparacaoValida = validandoComparacao()

    if(comparacaoValida === false){
        if(Number(primeiroValor) === Number(segundoValor)){
            document.querySelector('.sinal').style.background = '#ec1b1b'
            document.querySelector('.sinal').style.display = 'block'
            document.querySelector('.sinal').innerHTML = '='
            AVISO.style.background = ''
            AVISO.style.display = 'block'
            AVISO.innerHTML = MSG_ERRO_IGUAL
            PRIMEIRO_VALOR.classList.add('erro')
            SEGUNDO_VALOR.classList.add('erro')
        }
        else{
            document.querySelector('.sinal').style.background = '#ec1b1b'
            document.querySelector('.sinal').style.display = 'block'
            document.querySelector('.sinal').innerHTML = '>'
            AVISO.style.background = ''
            AVISO.style.display = 'block'
            AVISO.innerHTML = MSG_ERRO_MAIOR
            PRIMEIRO_VALOR.classList.add('erro')
            SEGUNDO_VALOR.classList.add('erro')
        } 
    }
    else{
        document.querySelector('.sinal').style.background = ''
        document.querySelector('.sinal').style.display = 'block'
        document.querySelector('.sinal').innerHTML = '<'
        AVISO.style.background = '#1cff67'
        AVISO.style.display = 'block'
        AVISO.innerHTML = MSG_POSITIVA_MAIOR
        PRIMEIRO_VALOR.classList.remove('erro')
        SEGUNDO_VALOR.classList.remove('erro')
    }
})