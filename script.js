// Бургер-меню для мобильных устройств
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li');

burger.addEventListener('click', () => {
     navLinks.classList.toggle('active');
});
// Закрытие меню при клике на ссылку (для мобильных)
links.forEach(link => link.addEventListener('click', () => navLinks.classList.remove('active')));


// Обработка формы обратной связи (без отправки на сервер)
const form = document.getElementById('contact-form');
const successMessage = document.querySelector('.success-message');

form.addEventListener('submit', function(e) {
     e.preventDefault();
     
     // Здесь можно добавить отправку на сервер (например, через fetch)
     
     form.style.display = 'none';
     successMessage.style.display = 'block';
     
     // Сброс формы через несколько секунд
     setTimeout(() => {
         successMessage.style.display = 'none';
         form.style.display = 'flex';
         form.reset();
     }, 4000);
});
