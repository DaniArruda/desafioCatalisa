const imagem = document.querySelector('#img-0', '#img-1','#img-2');
const botao = document.querySelector('button');
const nomeDoPersonagem = document.querySelector('#nome-0');
const especie = document.querySelector('#especie-0');
const condicao = document.querySelector('#status-0');

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
        imagem.src = data.image;
        imagem.alt = data.alt;
        nomeDoPersonagem.innerHTML = data.name;
        especie.innerHTML = data.species;
        condicao.innerHTML = traduzirCondicao(data);
    });
}

botao.onclick = pegarPersonagem;