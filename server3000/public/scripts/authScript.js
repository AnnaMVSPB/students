const formReg = document.querySelector('#formReg');

if (formReg) {
  formReg.addEventListener('submit', async (e) => {
    e.preventDefault();
    const {
      name, email, password, password2, action, method,
    } = e.target;
    const res = await fetch(action, {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name.value, email: email.value, password: password.value, password2: password2.value,
      }),
    });
    const data = await res.json();
    if (data.message === 'ok') {
      window.location.assign('/');
    } else {
      document.querySelector('.error').innerHTML = data.message;
    }
  });
}
