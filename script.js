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
    applyDynamicStyles();

    document.getElementById('sendData').addEventListener('click', function() {
        if (window.Telegram && Telegram.WebApp) {
            Telegram.WebApp.sendData('example_data');
            // Если нужно закрыть миниапп после отправки данных:
            // Telegram.WebApp.close();
        } else {
            alert('Объект Telegram.WebApp не найден. Запустите приложение внутри Telegram.');
        }
    });
});
