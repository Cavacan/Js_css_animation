// ボタンと要素を取得
const button = document.getElementById('start-button');
const loadingScreen = document.getElementById('loading-screen');
const loadText = document.querySelector('.load-text');


// ボタンがクリックされた時の処理
button.addEventListener('click', () => {
  button.style.display = 'none';  // ボタンを非表示
  loadingScreen.style.visibility = 'visible'; // ローディング画面を表示
  loadText.style.visibility = 'visible' // ローディング文字表示
  
  // 4秒後にローディング画面を変更
  setTimeout(() => {
    
    // Now Loading... を非表示にして完了メッセージを表示
    loadText.textContent = "Loading Complete!";
    loadText.style.opacity = "0.7";
    loadText.style.animation = 'none';
    
    // 背景色を薄緑に変更
    loadingScreen.style.backgroundColor = '#ccffcc'; // 薄緑色に変更    
  }, 4000); // 4秒後
});
