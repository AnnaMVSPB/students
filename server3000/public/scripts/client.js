const form = document.getElementById('formAdd');
const studentsDiv = document.querySelector('#divStudents');

if (form) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const {
      name, img, method, action,
    } = e.target;

    const res = await fetch('/students', {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify({
        name: name.value,
        img: img.value,
      }),
    });
    const data = await res.json();

    if (data.message) {
      document.querySelector('.errorAdd').innerHTML = data.message;
    } else {
      studentsDiv.insertAdjacentHTML('beforeend', data.html);
    }
  });
}

if (studentsDiv) {
  studentsDiv.addEventListener('click', async (e) => {
    if (e.target.classList.contains('icons')) {
      const res = await fetch(`/students/${e.target.dataset.id}`, {
        method: 'DELETE',
      });
      const data = await res.json();
      if (data.studentNum) {
        e.target.closest('.card').remove();
      }
    }
  });
}
