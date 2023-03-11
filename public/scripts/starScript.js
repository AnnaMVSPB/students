const cardStudent = document.querySelector('.cardStudent');

if (cardStudent) {
  cardStudent.addEventListener('click', async (e) => {
    if (e.target.classList.contains('bi-dash-square-dotted')) {
      const res = await fetch(`/star/${e.target.dataset.id}/minus`, {
        method: 'PUT',
      });
      const data = await res.json();
      document.querySelector('.quantityStar').innerHTML = data.quantityStar;
      if (data.quantityStar === 0) {
        document.querySelector('.i-star').classList.remove('bi-star-fill');
        document.querySelector('.i-star').classList.add('bi-star');
      }
    } else if (e.target.classList.contains('bi-plus-square-dotted')) {
      const res = await fetch(`/star/${e.target.dataset.id}/plus`, {
        method: 'PUT',
      });
      const data = await res.json();
      document.querySelector('.quantityStar').innerHTML = data.quantityStar;
      if (data.quantityStar === 1) {
        document.querySelector('.i-star').classList.remove('bi-star');
        document.querySelector('.i-star').classList.add('bi-star-fill');
      }
    }
  });
}
