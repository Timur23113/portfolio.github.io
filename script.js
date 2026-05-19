// --- ЛОГИКА ФОРМЫ КОНТАКТОВ (ДЛЯ PHP) ---
const contactForm = document.getElementById('contact-form');
const successMessage = contactForm.querySelector('.success-message');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();

    // Используем Fetch для отправки данных в наш PHP-скрипт
    fetch(contactForm.action, {
        method: contactForm.method,
        body: new FormData(contactForm)
    })
    .then(response => response.text()) // Получаем ответ от сервера (success или error)
    .then(data => {
        if (data === 'success') {
            contactForm.style.display = 'none';
            successMessage.style.display = 'block';
            setTimeout(() => {
                successMessage.style.display = 'none';
                contactForm.style.display = 'flex';
                contactForm.reset();
            }, 4000);
        } else {
            alert('Произошла ошибка при отправке. Попробуйте позже.');
        }
    })
    .catch(error => {
        console.error('Ошибка:', error);
        alert('Проблемы с соединением.');
    });
});
