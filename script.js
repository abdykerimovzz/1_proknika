// DOM 1: Элементтерди өзгөртүү
document.getElementById('change-text').addEventListener('click', () => {
    document.getElementById('dom1-text').textContent = "Текст өзгөрдү!";
});

// Поиск
const searchInput = document.getElementById('search-input');
const searchList = document.getElementById('search-list').getElementsByTagName('li');
searchInput.addEventListener('input', () => {
    const filter = searchInput.value.toLowerCase();
    Array.from(searchList).forEach(item => {
        item.style.display = item.textContent.toLowerCase().includes(filter) ? '' : 'none';
    });
});

// Калькулятор
document.getElementById('calc-sum').addEventListener('click', () => {
    const num1 = parseFloat(document.getElementById('num1').value) || 0;
    const num2 = parseFloat(document.getElementById('num2').value) || 0;
    document.getElementById('sum-result').textContent = `Сумма: ${num1 + num2}`;
});

// DOM 3: Текст редактор
document.getElementById('save-text').addEventListener('click', () => {
    const text = document.getElementById('editor').value;
    document.getElementById('saved-text').textContent = `Сакталган текст: ${text}`;
});

// DOM4: SetAttribute & GetAttribute
document.getElementById('change-img').addEventListener('click', () => {
    const img = document.getElementById('my-img');
    img.setAttribute('src', 'https://via.placeholder.com/200');
    document.getElementById('img-attr').textContent = `Сүрөт URL: ${img.getAttribute('src')}`;
});

// DOM5: createElement & prepend
document.getElementById('add-item').addEventListener('click', () => {
    const ul = document.getElementById('item-list');
    const li = document.createElement('li');
    li.textContent = document.getElementById('new-item').value;
    ul.prepend(li);
});
