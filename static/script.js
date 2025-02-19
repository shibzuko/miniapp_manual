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

//    alert("Страница загружена1");

    const params = new URLSearchParams(window.location.search);
    const myData = params.get("mydata");


//    alert(`myData: ${myData}`);

    const tg = window.Telegram.WebApp;

//    const username = tg.initDataUnsafe.user.username;
//    const user_id = tg.initDataUnsafe.user.id;
//    const user_platform = tg.platform;


    let profName = `${tg.initDataUnsafe.user.id}
    ${tg.initDataUnsafe.user.first_name}
    ${tg.initDataUnsafe.user.last_name}
    ${tg.initDataUnsafe.user.username}
    is_premium: ${tg.initDataUnsafe.user.is_premium}
    added_to_attachment_menu: ${tg.initDataUnsafe.user.added_to_attachment_menu}
    allows_write_to_pm: ${tg.initDataUnsafe.user.allows_write_to_pm}
    photo_url: ${tg.initDataUnsafe.user.photo_url}
    (${tg.initDataUnsafe.user.language_code})`;

    alert(`tg.initDataUnsafe:\n\n${profName}`);

//    alert(`tg.initDataUnsafe:\n\n${my_platform}\n${user_id}\n${username}\n${tg.initDataUnsafe.user.language_code}`);

//    alert(`tg.initDataUnsafe: ${tg.initDataUnsafe.user.username}`);
//    alert(`Платформа: ${tg.platform}`);
    //    alert(`Платформа: ${tg.initData.user}`);
//    console.log(tg.initDataUnsafe.user);
//    alert(`Платформа: ${tg.initDataUnsafe}`);
    //    alert(JSON.stringify(tg.initDataUnsafe, null, 2));
    //    alert(`Платформа: ${tg.user.id}`);



    alert("Страница загружена2");
    // Получаем платформу из Telegram WebApp
    const platform = window.Telegram && Telegram.WebApp && Telegram.WebApp.platform
        ? Telegram.WebApp.platform.toLowerCase()
        : "";

    console.log("Платформа:", platform);

    // Логика показа блоков в зависимости от платформы
    if (platform === "ios" || platform === "mac") {
        // Показываем только блок для iOS/Mac
        document.querySelector('.section_apple').style.display = 'block';
        document.querySelector('.section_android').style.display = 'none';
        document.querySelector('.section_windows').style.display = 'none';
        document.querySelector('.section_linux').style.display = 'none';
    } else if (platform === "android") {
        // Показываем только блок для Android
        document.querySelector('.section_apple').style.display = 'none';
        document.querySelector('.section_android').style.display = 'block';
        document.querySelector('.section_windows').style.display = 'none';
        document.querySelector('.section_linux').style.display = 'none';
    } else {
        // Если не iOS/Mac/Android – показываем все блоки
        document.querySelector('.section_apple').style.display = 'block';
        document.querySelector('.section_android').style.display = 'block';
        document.querySelector('.section_windows').style.display = 'block';
        document.querySelector('.section_linux').style.display = 'block';
    }

    // Применяем динамические стили из Telegram WebApp (если указаны)
    applyDynamicStyles();

    // Пример отправки данных через Telegram.WebApp.sendData
    document.getElementById('sendData')?.addEventListener('click', function() {
        if (window.Telegram && Telegram.WebApp) {
            Telegram.WebApp.sendData('example_data');
            // Если нужно закрыть миниапп после отправки данных, можно вызвать:
            // Telegram.WebApp.close();
        } else {
            alert('Объект Telegram.WebApp не найден. Запустите приложение внутри Telegram.');
        }
});
});
