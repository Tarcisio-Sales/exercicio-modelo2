function verificaIdade(){
    var data = new Date()
    var ano = data.getFullYear()

    var fano = document.getElementById('inasci')
    var res = document.querySelector('div#res')

    if (fano.value.length == 0 || fano.value > ano){
        window.alert('ERRO! Preencha o ano de nascimento.')

    }else{

        var fsex = document.getElementsByName('sexo')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if(fsex[0].checked){
            genero = 'homem'
            if(idade <=10){
                //bebe
                img.setAttribute('src', 'imagens/bebe-menino.jpg')
                genero = 'bebe'
            }else if(idade < 21){
                //jovem
                genero = jovem
                img.setAttribute('src', 'imagens/rapaz.jpg')
            }else if(idade < 50){
                //adulto
                genero = adulto
                img.setAttribute('src', 'imagens/homem.jpg')

            }else{
                //idoso
                genero = idoso
                img.setAttribute('src', 'imagens/idoso.jpg')
            }
        }else{
            genero = 'mulher'
            if(idade <=10){
                //criança
                mg.setAttribute('src', 'imagens/bebe-menina.jpg')
                genero = 'bebe'
            }else if(idade < 21){
                //jovem
                mg.setAttribute('src', 'imagens/moça.jpg')
                genero = 'jovem'
            }else if(idade < 50){
                //adulto
                mg.setAttribute('src', 'imagens/mulher.jpg')
                genero = 'mulher'
            }else{
                //idoso
                mg.setAttribute('src', 'imagens/idosa.jpg')
                genero = 'idosa'
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)

    }
}