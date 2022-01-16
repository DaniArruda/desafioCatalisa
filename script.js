const botao = document.querySelector('#buscarPersonagens');

const imagem = document.querySelectorAll('#img, #imgUm, #imgDois');
const nomeDoPersonagem = document.querySelectorAll('#nome, #nomeUm, #nomeDois');
const especie = document.querySelectorAll('#especie, #especieUm, #especieDois');
const condicao = document.querySelectorAll('#status, #statusUm, #statusDois');

let currentIndex = 0;

traduzirCondicao = (data) => {
    if(data.status == 'unknown'){
        return 'Não sabemos';
    }else if(data.status == 'Alive'){
        return 'Sim';
    }else {
        return 'Não. Está morto';
    }
}

gerarValorAletorio = () => {
    return Math.floor(Math.random() * 671);
}

pegarPersonagem = () => {
    let numeroAleatorio = gerarValorAletorio();
    return fetch(`https://rickandmortyapi.com/api/character/${numeroAleatorio}`, {
        method:'GET',
        headers: {
            Accept: 'application/json',
            "Content-type": 'application/json'
        }
    }).then((Response) => Response.json()).then((data) => {
        imagem[currentIndex].src = data.image;
        imagem[currentIndex].alt = data.alt;
        nomeDoPersonagem[currentIndex].innerHTML = data.name;
        especie[currentIndex].innerHTML = data.species;
        condicao[currentIndex].innerHTML = traduzirCondicao(data);

        currentIndex++;

        if(currentIndex >= 3){
            currentIndex = 0;
        }

    });
}

function pegarTresPersonagens(){
    pegarPersonagem();
    pegarPersonagem();
    pegarPersonagem();
};

botao.onclick = pegarTresPersonagens;