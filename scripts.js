let elementoImagem = document.querySelector('.banner img');
let banners = [
  'images/banner1.jpg',
  'images/banner2.jpg',
  'images/banner3.jpg',
  'images/banner4.jpg',
  'images/banner5.jpg',
  'images/banner6.jpg',
  'images/banner7.jpg',
  'images/banner8.jpg',
  'images/banner9.jpg',
  'images/banner10.jpg'
];

let bannerAtual = 0;
let modal = document.querySelector('.modal');

function trocarBanner() {
  // Soma 1 na variável bannerAtual
  bannerAtual++
  // bannerAtual = bannerAtual + 1;

  // banners.length == ao comprimento dos elementos contidos na variável banners
  if (bannerAtual == banners.length) {
    bannerAtual = 0;
  }

  let imagem = banners[bannerAtual];
  elementoImagem.src = imagem;
  console.log(`Conteúdo do array >>>> ${banners[bannerAtual]}`);
  console.log(elementoImagem.src);
}

// Coloca um intervalo de tempo ao executar a função repetidamente
setInterval(trocarBanner, 3000);

function alternarModal() {
  if (modal.style.display == 'block') {
    modal.style.display = 'none';
  } else {
    modal.style.display = 'block';
  }
}
