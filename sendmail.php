<?php
    // --- НАСТРОЙКИ ---
    $to = "demochko2261@gmail.com"; // Твоя почта
    $subject = "Новое сообщение с сайта";

    // Собираем данные из формы
    $name = htmlspecialchars(trim($_POST['name']));
    $email = htmlspecialchars(trim($_POST['email']));
    $message = htmlspecialchars(trim($_POST['message']));

    // Формируем тело письма
    $body = "Новое сообщение с сайта!\n\n";
    $body .= "От кого: $name\n";
    $body .= "Email: $email\n\n";
    $body .= "Сообщение:\n$message";

    // Заголовки (чтобы письмо не попало в спам и был виден Reply-To)
    $headers = "From: noreply@твойсайт.com\r\n"; // Замени на свой домен, если есть
    $headers .= "Reply-To: $email\r\n";

    // Отправляем письмо
    if (mail($to, $subject, $body, $headers)) {
        // Если письмо отправлено успешно
        echo "success";
    } else {
        // Если произошла ошибка
        echo "error";
    }
?>
