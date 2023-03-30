function toogleMode(){
const html = document.documentElement
html.classList.toggle('light')
//if(html.classList.contains('light')){
//html.classList.remove('light')
//}
//else{
//    html.classList.add('light')
//}


//pegar a tag img
const img = document.querySelector("#profile img")
//substituir a imagem
if(html.classList.contains('light')){
    img.setAttribute('src','./assets/avatar-light.png')
    img.setAttribute('alt','Foto no espelho do Eduardo Segurando um celular azul com camisa da los grandes')
}
else{
    img.setAttribute('src','./assets/avatar.png')
    img.setAttribute('alt','Foto do Eduardo de terno preto e gravata vermelha com fundo de azulejos amarelo')
}
//se tiver light mode, adicionar a imagem light
// se tiver sem light mode, manter a imagem normal

}