const formReg = document.querySelector('#formReg');
const formLogin = document.querySelector('#formLogin');

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
      document.querySelector('.errorReg').innerHTML = data.message;
    }
  });
}

if (formLogin) {
  formLogin.addEventListener('submit', async (e) => {
    e.preventDefault();
    const {
      email, password, action, method,
    } = e.target;
    const res = await fetch(action, {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email.value, password: password.value,
      }),
    });
    const data = await res.json();
    if (data.message === 'ok') {
      window.location.assign('/');
    } else {
      document.querySelector('.errorLogin').innerHTML = data.message;
    }
  });
}
