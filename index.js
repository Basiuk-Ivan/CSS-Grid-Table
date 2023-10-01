const gridItem = document.querySelectorAll('.grid-item');

gridItem.forEach((item, index) => {
  item.addEventListener('mouseover', function (event) {
    item.innerHTML = index + 1;
    item.style.backgroundColor = getRandomColor();
  });
  item.addEventListener('mouseout', function (event) {
    item.innerHTML = ``;
    item.style.backgroundColor = '';
  });
});

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
