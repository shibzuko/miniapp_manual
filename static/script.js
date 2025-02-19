//static/script.js
// Функция для установки динамических стилей из Telegram WebApp
function applyDynamicStyles() {
    if (window.Telegram && Telegram.WebApp && Telegram.WebApp.themeParams) {
        // Если указан цвет фона в themeParams, применяем его
        const bgColor = Telegram.WebApp.themeParams.bg_color;
        if (bgColor) {
            document.documentElement.style.setProperty('--app-bg-color', bgColor);
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    console.log("Страница загружена");

//    alert(window.Telegram);
    alert(window.Telegram.WebApp.platform);
    console.log("=== Debugging window.Telegram ===");
    console.log(window.Telegram);  // Выведет весь объект Telegram
    console.log("=== Debugging Telegram.WebApp ===");
    console.log(window.Telegram ? window.Telegram.WebApp : "Telegram.WebApp не найден!");

    if (window.Telegram && Telegram.WebApp) {
        console.log("Telegram.WebApp найден, выводим данные:");
        console.table(Telegram.WebApp);
    } else {
        console.error("Telegram.WebApp не найден!");
    }

    applyDynamicStyles();

    document.getElementById('sendData').addEventListener('click', function() {

        if (window.Telegram && Telegram.WebApp) {
            Telegram.WebApp.sendData('example_data');
            // Если нужно закрыть миниапп после отправки данных:
//             Telegram.WebApp.close();
        } else {
            alert('Объект Telegram.WebApp не найден. Запустите приложение внутри Telegram111.');
            console.log("Привет, мир111!");
        }
    });
});
