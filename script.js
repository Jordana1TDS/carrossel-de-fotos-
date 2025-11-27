// Lista de imagens locais
const imagens = ["elefante.jfif", "elefante 2.jpg", "elefante 3.jpg", "elefante 4.webp"];

//Começa na primeira imagem 
let indice = 0;

//Seleciona elementos HTML 
const imagem = document.getElementById("imagem");
const botaoAnterior = document.getElementById ("anterior");
const botaoProximo =  document.getElementById("proximo");

//Queando clicar em "próximo"
botaoProximo.addEventListener("click", () =>{
    indice++;
    if (indice >= imagens.length){
        indice = 0; // volta para a primeira 
    }
    imagem.src = imagens[indice];
});

//Queando clicar em "anterior"
botaoAnterior.addEventListener("click", () =>{
    indice--;
    if (indice < 0){
        indice = imagens.length -1; // volta para a ultima
    }
    imagem.src = imagens[indice];
}); 
