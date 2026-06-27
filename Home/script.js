const searchInput = document.getElementById('search');

searchInput.addEventListener('input', (event) => {
    const value = formatString(event.target.value);

    const items = document.querySelectorAll('.items .item');

    items.forEach(item => {
        if(formatString(item.textContent).indexOf(value) !== -1) {
            item.computedStyleMap.display = 'flex';
        } else {
            item.computedStyleMap.display = 'none';
        }
    })
});

function formatString(value) {
    return value.toLowerCase().trim();
}