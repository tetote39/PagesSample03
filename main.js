const main = document.getElementById("main");
const number = document.querySelector(".number");

// 説明時間（4分）
const intervalTime = 4 * 60 * 1000;

// 開始時間
let startTime = Date.now();

// カウントダウン処理
setInterval(() => {
  const diff = Date.now() - startTime;
  const remaining = Math.max(0, intervalTime - diff);
  const minutes = Math.ceil(remaining / 60 / 1000);
  number.textContent = minutes;
}, 1000);

// クリックでリセット
const box = document.querySelector(".box");
box.addEventListener("click", () => {
  startTime = Date.now();
});
