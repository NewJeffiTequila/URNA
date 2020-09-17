// Pegando todos os elementos da tela
let seuVotoPara = document.querySelector('.d1-1 span');
let cargo = document.querySelector('.d1-2 span');
let numeros = document.querySelector('.d1-3');
let descricao = document.querySelector('.d1-4');
let aviso = document.querySelector('.d2');
let lateral = document.querySelector('.d1-right');

// Selecionado em qual etapa estamos
let etapaAtual = 0;
// Pegando o 
let numero ='';
// Funcão que inicia a etapa
function comecarEtapa() {
    let etapa = etapas[etapaAtual];
    let numeroHtml = '';

 
// passando por todos os numeros daquela etapa
    for (let index = 0; index < etapa.numeros; index++) {
        // se o index do array for  igual a 0 adiciona a class pisca na div
        if (index===0) {
            numeroHtml += '<div class="numero pisca"></div>';
        } else {
            numeroHtml += '<div class="numero"></div>';
        }
    }
    // removendo o seu voto para da tela
    seuVotoPara.style.display='none';
    // passando o titulo referente a etapa
    cargo.innerHTML = etapa.titulo;
    // removendo a descirção da tela
    descricao.innerHTML='';
    // removendo o aviso da tela
    aviso.style.display = 'none';
    // removendo as fotos da tela
    lateral.innerHTML ='';
    // passando a quantidade de espaços referentes a quantidade de numeor na etapa
    numeros.innerHTML = numeroHtml;

    
}
function atualizarInteface() {
    // pega a etapa atual
    let etapa = etapas[etapaAtual];
    
    // faz um filtro noss candidatos
    let candidato = etapa.candidatos.filter((item)=>{
        if (item.numero === numero) {
            return true;
        }else{
            return false;
        }
    });
    console.log('Candidato', candidato);
}

function clicou(n) {
    // pega todos os elementos que tem a class numero e pisca
    let elNumero = document.querySelector('.numero.pisca');
    // VERIFICA SE O ELEMENTO NÃO 
    if (elNumero !== null) {
        // PASSA O NUMERO QUE VEI COMO PARAMENTRO PARA O ELEMENTO NUMERO
        elNumero.innerHTML = n;
        // CONCATENA O NUMERO DIGITADO COM O NUMERO QUE FOI DIGITADO ANTERIORMENTE
        numero = `${numero}${n}`;
        // remove a class pisca do elemento
        elNumero.classList.remove('pisca');
        // verifica se o proximo elemento é nulo
        if (elNumero.nextElementSibling !== null) {
            // adiciona a class pisca pro proximo elemento
            elNumero.nextElementSibling.classList.add('pisca');
        }else{
            atualizarInteface();
        }

    }
}
function branco( ) {
    
}
function corrige( ) {
    
}
function confirmar( ) {
    
}

comecarEtapa();