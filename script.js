// 獲取 DOM 元素
const grid = document.getElementById("grid");
const versionToggle = document.getElementById("versionToggle");
let maxNumber = 75; // 預設為版本1

/**
 * 建立號碼按鈕的函式
 * @param {number} maxNum - 最大號碼
 */
function createGrid(maxNum) {
  grid.innerHTML = ''; // 清空現有的網格
  for (let i = 1; i <= maxNum; i++) {
    const cell = document.createElement("div");
    cell.className = "cell";
    cell.textContent = i;
    cell.onclick = () => cell.classList.toggle("selected");
    grid.appendChild(cell);
  }
}

/**
 * 重置選擇的號碼
 */
function resetSelection() {
  document.querySelectorAll(".cell.selected").forEach(cell => {
    cell.classList.remove("selected");
  });
}

/**
 * 切換版本時的處理函式
 */
function handleVersionToggle() {
  maxNumber = versionToggle.checked ? 90 : 75;
  resetSelection();
  createGrid(maxNumber);
}

// 添加切換開關的事件監聽器
versionToggle.addEventListener('change', handleVersionToggle);

// 初始化網格
createGrid(maxNumber);
