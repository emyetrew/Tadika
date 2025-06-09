document.querySelectorAll('.toggle-box').forEach(box => {
  box.addEventListener('click', () => {
    const text = box.querySelector('.toggle-text');
    text.style.display = text.style.display === 'none' ? 'block' : 'none';
  });
});
