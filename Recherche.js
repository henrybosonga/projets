
const searchInput = document.getElementById('search');
const listItems = document.querySelectorAll('#list li');

searchInput.addEventListener('input', function() {
  const value = this.value.toLowerCase();

  listItems.forEach(item => {
    const itemText = item.textContent.toLowerCase();
    item.style.display = itemText.includes(value) ? 'block' : 'none';
  });
});
