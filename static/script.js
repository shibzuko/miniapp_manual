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

    const tg = window.Telegram.WebApp;

    const params = new URLSearchParams(window.location.search);
    const StaticKey = params.get("static_key");

    let decodedStaticKey = "StaticKey не найден в URL";
    if (StaticKey) {
            try {
                // Декодируем StaticKey из Base64
                const safeStaticKey = decodeURIComponent(StaticKey);
                decodedStaticKey = atob(safeStaticKey);

            } catch (error) {
                console.error("Ошибка декодирования Base64:", error);
            }
    } else {
        console.warn("StaticKey не найден в URL");
    }

//    alert(`decodedStaticKey: ${decodedStaticKey}`);

    // Подставляем статический ключ в ссылку Apple
    const appleVPNLink = document.getElementById("appleVPNLink");
    if (appleVPNLink) {
        appleVPNLink.href = `https://vless-outline.ru/auto/?url=v2RayTun://import/${encodeURIComponent(decodedStaticKey)}`;
    }

    // Подставляем статический ключ в ссылку Android
    const androidVPNLink = document.getElementById("androidVPNLink");
    if (androidVPNLink) {
        androidVPNLink.href = `https://vless-outline.ru/auto/?url=v2RayTun://import/${encodeURIComponent(decodedStaticKey)}`;
    }

    // Подставляем статический ключ в ссылку Windows 1
    const windowsVPNLink = document.getElementById("windowsVPNLink");
    if (windowsVPNLink) {
        windowsVPNLink.href = `https://vless-outline.ru/auto/?url=v2RayTun://import/${encodeURIComponent(decodedStaticKey)}`;
    }

    // Подставляем статический ключ в ссылку Linux
    const linuxVPNLink = document.getElementById("linuxVPNLink");
    if (linuxVPNLink) {
        linuxVPNLink.href = `https://vless-outline.ru/auto/?url=v2RayTun://import/${encodeURIComponent(decodedStaticKey)}`;
    }

    // Функция для открытия во внешнем браузере
    window.openExternalLink = function (event) {
        event.preventDefault(); // Предотвращаем стандартное поведение ссылки

        if (window.Telegram && Telegram.WebApp) {
            const url = vpnLink.getAttribute("data-url");
            Telegram.WebApp.openLink(url, { try_instant_view: false });
        } else {
            alert("Ошибка: Telegram WebApp не доступен!");
        }
    };

    // Выводим ключ в HTML
    document.getElementById('staticKey').textContent = decodedStaticKey;

    // Функция для копирования ключа
    window.copyStaticKey = function () {
        const keyElement = document.getElementById("staticKey");
        const textArea = document.createElement("textarea");
        textArea.value = keyElement.textContent;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand("copy");
        document.body.removeChild(textArea);

        alert("Ключ скопирован в буфер обмена!");
    };

    // Функция для закрытия окна
    window.closeWindow = function () {
        Telegram.WebApp.close();
    };

    //    const username = tg.initDataUnsafe.user.username;
    //    const user_id = tg.initDataUnsafe.user.id;
    //    const user_platform = tg.platform;


    //    let profName = `${tg.initDataUnsafe.user.id}
    //    ${tg.initDataUnsafe.user.first_name}
    //    ${tg.initDataUnsafe.user.last_name}
    //    ${tg.initDataUnsafe.user.username}
    //    is_premium: ${tg.initDataUnsafe.user.is_premium}
    //    added_to_attachment_menu: ${tg.initDataUnsafe.user.added_to_attachment_menu}
    //    allows_write_to_pm: ${tg.initDataUnsafe.user.allows_write_to_pm}
    //    photo_url: ${tg.initDataUnsafe.user.photo_url}
    //    photo_url: ${myData}
    //    (${tg.initDataUnsafe.user.language_code})`;

    //    alert(`tg.initDataUnsafe:\n\n${profName}`);

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
