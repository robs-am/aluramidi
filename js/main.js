function tocaSom () {
  

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


    //listaDeTeclas[0] acessa a tecla referente ao numero (índice) digitado dentro do parenteses
    let contador = 0;  //pode sempre receber um valor novo

    
   

    //para acessar cada indice da lista de sons indivisulamente usamos a função while

    while(contador < listaDeTeclas.length) {
        listaDeTeclas[contador].onclick = tocaSomPom; //substituimos o 0 por contador, para variar o índice e assim abranger todos os sons das teclas. também substituimos o numero 9 por listaDeTeclas.length, pois nem sempre saberemos o tamanhao de uma lista, ficando assim mais semantico

        contador = contador + 1; // 0 + 1 ; segundo loop 1 +1 = 2 < 9; terceiro loop 2 + 1 = 3 <  e assim por diante

        console.log(contador)
    }







//desafio 06
//for (var i = 0; i < 10 ; i ++) {
    console.log(i);
//}

//const listaDeTeclas = document.querySelectorAll('input[type=button]');
//console.log(listaDeTeclas);