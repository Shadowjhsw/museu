const imagem = document.getElementById("imagem");

function img1(){
    imagem.src = "imagens/img1.jpg";
    setTimeout("img2()", 1000);
}
function img2(){
    imagem.src = "imagens/img2.webp";
    setTimeout("img3()", 1000);
}
function img3(){
    imagem.src = "imagens/img3.webp";
    setTimeout("img1()", 1000);
}

img1();