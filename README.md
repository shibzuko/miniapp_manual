https://shibzuko.github.io/miniapp_manual/


sudo apt update && sudo apt upgrade -y
sudo apt install python3 python3-pip -y

sudo apt update && sudo apt upgrade -y
sudo apt install python3 python3-pip python3-venv nginx -y


python3 -m venv env-miniapp
source env-miniapp/bin/activate
pip install flask gunicorn

gunicorn --bind 0.0.0.0:8003 wsgi:app

sudo nano /etc/systemd/system/flask_app.service

##################################
[Unit]
Description=Gunicorn instance to serve Flask app
After=network.target

[Service]
User=root
Group=root
WorkingDirectory=/root/bot_vpn
Environment="PATH=/root/miniapp_manual/bot-env/bin"
ExecStart=/root/miniapp_manual/env-miniapp/bin/gunicorn --workers 3 --bind 0.0.0.0:8003 wsgi:app

[Install]
WantedBy=multi-user.target
###################################3



sudo systemctl daemon-reload
sudo systemctl start flask_app
sudo systemctl enable flask_app


sudo apt install nginx -y


sudo nano /etc/nginx/sites-available/flask_app


########################################
server {
    listen 80;
    server_name manual.vlesvpn.ru 62.217.181.95;

    location / {
        proxy_pass http://127.0.0.1:8003;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    }
}
########################################


sudo ln -s /etc/nginx/sites-available/flask_app /etc/nginx/sites-enabled
sudo systemctl restart nginx

Запускаем curl для проверки:
curl http://62.217.181.95:8003

curl http://manual.vlesvpn.ru


sudo ufw allow OpenSSH
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp
sudo ufw enable


Устанавливаем SSL через Let’s Encrypt:
sudo apt install certbot python3-certbot-nginx -y
sudo certbot --nginx -d manual.vlesvpn.ru




