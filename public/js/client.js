// Регистрация
const regForm = document.querySelector('#regForm');
if (regForm) {
  regForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const {
      login, email, addres, password1, password2, method,
    } = e.target;
    const res = await fetch('/auth/reg', {
      method,
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({
        login: login.value,
        email: email.value,
        addres: addres.value,
        password1: password1.value,
        password2: password2.value,
      }),
    });
    const data = await res.json();

    if (!data.status) {
      const errorBlock = document.querySelector('.errorBlock');
      errorBlock.innerHTML = data.message;
      errorBlock.style.visibility = 'visible';
    } else {
      window.location.assign('/');
    }
  });
}
