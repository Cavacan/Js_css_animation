// ボタンと要素を取得
const button = document.getElementById('start-button');
const loadingScreen = document.getElementById('loading-screen');
const loadText = document.querySelector('.load-text');


// ボタンがクリックされた時の処理
button.addEventListener('click', () => {
  // ボタンを非表示にして、ローディング画面を表示
  button.style.display = 'none';
  loadingScreen.style.visibility = 'visible'; // ローディング画面を表示
  loadText.style.opacity = '1';
  loadText.style.visibility = 'visible'
  
  // 4秒後にローディング画面を変更
  setTimeout(() => {
    console.log("over 4sec, loading complete.");
    
    // Now Loading... を非表示にして完了メッセージを表示
    loadText.textContent = "Loading Complete!";
    loadText.style.opacity = "0.7";
    loadText.style.animation = 'none';
    
    // 背景色を薄緑に変更
    loadingScreen.style.backgroundColor = '#ccffcc'; // 薄緑色に変更
    
  }, 4000); // 4秒後
});
