// 獲取元素函式
const getElement = (selector) => document.querySelector(selector);

// 顯示或隱藏輸入框，並設定焦點
function toggleInputDisplay(button, input) {
    const isHidden = input.style.display === "none";
    input.style.display = isHidden ? "block" : "none";
    if (isHidden) input.focus();
}

// 修改數量的通用函式
function updateCount(element, delta) {
    const count = Number(element.innerHTML) + delta;
    if (count >= 0) element.innerHTML = count;
}

// 獲取所有相關元素
const arrivalBtn = getElement('#arrival-btn');
const arrivalInput = getElement('#arrival-input');
const departureBtn = getElement('#departure-btn');
const departureInput = getElement('#departure-input');
const adultMinusBtn = getElement('#adults .count-select__minus');
const adultNumber = getElement('#adults .count-select__number');
const adultPlusBtn = getElement('#adults .count-select__plus');
const childrenMinusBtn = getElement('#children .count-select__minus');
const childrenNumber = getElement('#children .count-select__number');
const childrenPlusBtn = getElement('#children .count-select__plus');

// 設定事件監聽器
arrivalBtn.addEventListener('click', () => toggleInputDisplay(arrivalBtn, arrivalInput));
departureBtn.addEventListener('click', () => toggleInputDisplay(departureBtn, departureInput));
[arrivalInput, departureInput].forEach(input => input.addEventListener('blur', () => input.style.display = "none"));

adultMinusBtn.addEventListener('click', () => updateCount(adultNumber, -1));
adultPlusBtn.addEventListener('click', () => updateCount(adultNumber, 1));
childrenMinusBtn.addEventListener('click', () => updateCount(childrenNumber, -1));
childrenPlusBtn.addEventListener('click', () => updateCount(childrenNumber, 1));
