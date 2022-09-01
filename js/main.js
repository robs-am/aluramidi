function tocaSom (idElementoAudio) {  
  
    document.querySelector(idElementoAudio).play();

    
}

//idElementoAudio é um parametro. Os parâmetros são os nomes que damos a valores que uma função pode receber em sua chamada, que podem ou não ter um valor padrão. Os parâmetros de uma função são como variáveis que ficam disponíveis apenas no corpo da função.


/* document.querySelector('.tecla_pom').onclick = tocaSom;

    //onclick é um atributo e com o = definimos um valor a ele usando a classe do button correspondente a tecla. quando o onclick é executado é executado a funçao tocaSomPom

//nao colocamos o parenteses ao final da funcao tocaSomPom pois ja extamos a executando na função onclick
 */

/* function tocaSomClap () {
    document.querySelector ('.tecla_clap');
    document.querySelector('#som_tecla_clap').play()
} */



const listaDeTeclas = document.querySelectorAll('.tecla');
    //listaDeTeclas[0].onclick = tocaSomPom;


    //listaDeTeclas[0] acessa a tecla referente ao numero (índice) digitado dentro do parenteses
    let contador = 0;  //pode sempre receber um valor novo

    
   

    //para acessar cada indice da lista de sons individulamente usamos a função while
    //while(contador < listaDeTeclas.length)
     
    //trocamos a funçao while pela for each
    for (let contador = 0; contador < listaDeTeclas.length; contador++) {

        const tecla = listaDeTeclas[contador];
        const instrumento = tecla.classList[1] // dessa maneira conseguimos definicar cada instrumento
        //separado

        //template string
        const idAudio = `#som_${instrumento}`
        


        tecla.onclick = function() {
            tocaSom(idAudio);
        }; 

        tecla.onkeydown = function(evento) {
            tecla.classList.add('ativa');
        }
            if(evento.code === 'Space') {
                tecla.classList.add('ativa');
            }
        
        
        
        
        tecla.onkeyup = function() {
            tecla.classList.remove('ativa')
        }
        
        //substituimos o 0 por contador, para variar o índice e assim abranger todos os sons das teclas. também substituimos o numero 9 por listaDeTeclas.length, pois nem sempre saberemos o tamanhao de uma lista, ficando assim mais semantico

        //contador = contador + 1; // 0 + 1 ; segundo loop 1 +1 = 2 < 9; terceiro loop 2 + 1 = 3 <  e assim por diante

        console.log(contador)
    }







//desafio 06
//for (var i = 0; i < 10 ; i ++) {
    console.log(i);
//}

//const listaDeTeclas = document.querySelectorAll('input[type=button]');
//console.log(listaDeTeclas);


//desafio 09
//https://codepen.io/robs89/pen/OJvKrrX?editors=1010


//desafio 04-05

//const listaDeTeclas = document.querySelectorAll('input[type=button]');

//for(indice = 0; indice < listaDeTeclas.length ; i++)
  
  //const tecla = listaDeTecla[indice];

     /*  tecla.onekeyup = function(evento) {
        if (evento.code === "Enter" || evento.code ===          "Space") {tecla.classList.add('ativa');
                                                         }
}
      tecla.onekeydown = function(evento) {
        if(evento.code === "Enter" || evento.code === "Space") {tecla.classList.remove('ativa');
                                                               }
      } */

      /* const aluraFone = { //Cria um objeto que contém o input de telefone e os inputs de botão.
        numero: document.querySelector('input[type="tel"]'), //Item "numero" que recebe o input onde o usuário irá pôr o seu telefone.
        teclas: document.querySelectorAll('input[type="button"]') //Item "teclas" que recebe todos os inputs de botão.
       };
       
       for (let c = 0; c < aluraFone.teclas.length; c++){ // Laço de repetição que irá repetir enquanto o let "c" for menor do que o length do item "teclas" do objeto "aluraFone".
         aluraFone.teclas[c].addEventListener("click", function (){ //Adiciona um "escuta-evento" (addEventListener) que tem uma propriedade semelhante a de um "onclick". Após isso, abre-se uma função vazia.
           aluraFone.numero.value += aluraFone.teclas[c].value; //Adiciona o "value" do botão pressionado ao "value" do espaço para o número de telefone. 
         })
       
         aluraFone.teclas[c].onkeydown = function (evento){ //Função ativa após alguma tecla ser pressionada para baixo. Adicionamos o parâmetro "evento" apenas para podermos ter alguma referência à página para pegar o keyCode — código esse que é gerado após apertarmos alguma tela e, dependendo de qual seja ela, nos retornará um código diferente — do usuário. 
           if (evento.keyCode == "13" || evento.keyCode == "32"){ //O código do enter e do espaço são 13 e 32, respectivamente. Dessa forma, os botões apenas irão receber a classe "ativa" caso o código retornado seja um desses dois.
             aluraFone.teclas[c].classList.add("ativa"); //Adiciona a classe "ativa" a todos os elementos do item "teclas" através da repetição.
           }
         }
       
         aluraFone.teclas[c].onkeyup = function (){ //Funciona exatamente igual ao último, mas, dessa vez, não temos necessidade de passar um keycode, pois o usuário estará soltando a tecla, e não apertando-a.
           aluraFone.teclas[c].classList.remove("ativa"); //Remove a classe "ativa" do elemento após o usuário soltar a tecla antes pressionada.
         }
       }
 */