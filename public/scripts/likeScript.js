const divStudents = document.querySelector('#divStudents');

if (divStudents) {
  divStudents.addEventListener('click', async (e) => {
    if (e.target.classList.contains('i-like')) {
      const res = await fetch(`/like/${e.target.dataset.id}`, {
        method: 'PUT',
      });
      const data = await res.json();
      document.querySelector(`.quantityLikes${e.target.dataset.id}`).innerHTML = data.quantityLikes;
      if (data.quantityLikes === 1 || data.quantityLikes === 0) {
        e.target.classList.toggle('bi-heart-fill');
        e.target.classList.toggle('bi-heart');
      }
    }
  });
}
