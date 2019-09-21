'use strict';

let album = [
  {src: 'img/1.jpg', msg: '山道が綺麗で癒される！'},
  {src: 'img/2.jpg', msg: '階段疲れた...'},
  {src: 'img/3.jpg', msg: '神社でお参り！'},
  {src: 'img/4.jpg', msg: '帰りはロープウェイで！'},
  {src: 'img/5.jpg', msg: '旅の締めは蕎麦！めっちゃ美味！'}
];

let mainImage = document.createElement('img');
mainImage.setAttribute('src', album[0].src);
mainImage.setAttribute('alt', album[0].msg);

let mainMsg = document.createElement('p');
mainMsg.innerText = mainImage.alt;

let mainFlame = document.querySelector('#gallery .main');
mainFlame.insertBefore(mainImage, null);
mainFlame.insertBefore(mainMsg, null);

//サムネイル写真画像の表示
let thumbFlam = document.querySelector('#gallery .thumb');
for(let i = 0; i < album.length; i++) {
  let thumbImage = document.createElement('img');
  thumbImage.setAttribute('src', album[i].src);
  thumbImage.setAttribute('alt', album[i].msg);
  thumbFlam.insertBefore(thumbImage, null);
}

//クリックした画像をメインにする
thumbFlam.addEventListener('click', function(event){
  if(event.target.src) {
    //処理を書いていく
    mainImage.src = event.target.src;
    mainMsg.innnerText = event.target.alt;
  }
})
