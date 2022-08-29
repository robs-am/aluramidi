function tocaSomPom () {
  

    document.querySelector('#som_tecla_pom').play()
  
 
    //executa a função play da tecla pom
}

document.querySelector('.tecla_pom').onclick = tocaSomPom;

    //onclick é um atributo e com o = definimos um valor a ele usando a classe do button correspondente a tecla. quando o onclick é executado é executado a funçao tocaSomPom

//nao colocamos o parenteses ao final da funcao tocaSomPom pois ja extamos a executando na função onclick


function tocaSomClap () {
    document.querySelector ('.tecla_clap');
    document.querySelector('#som_tecla_clap').play()
}



const listaDeTeclas = document.querySelectorAll('.tecla');
    listaDeTeclas[0].onclick = tocaSomPom;

    let contador = 0;  //pode sempre receber um valor novo

    //listaDeTeclas[0] acessa a tecla referente ao numero (índice) digitado dentro do parenteses,
   

    while(contador < 9) {
        listaDeTeclas[0].onclick = tocaSomPom;
    }
//para acessar cada indice da lista de sons indivisulamente usamos a função while






//desafio 06
//for (var i = 0; i < 10 ; i ++) {
    console.log(i);
//}

//const listaDeTeclas = document.querySelectorAll('input[type=button]');
//console.log(listaDeTeclas);