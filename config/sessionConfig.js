const session = require('express-session');
const FileStore = require('session-file-store')(session);

const sessionConfig = {
  store: new FileStore(), // тип хранилища - FileStore, который создаёт нам папку с файлами
  key: 'user_uid', // ключ - название куки
  secret: 'cookie', // слово используемое для шифрования, может быть любым
  resave: false, // настройка пересохранения куки, при каждом запросе
  saveUninitialized: false, // настройка для создания сессии, даже без авторизации
  cookie: {
    expires: 1000 * 60 * 60 * 12, // время "протухания" куки в миллисекундах
    httpOnly: true, // серверная установка флага httpOnly, запрет доступа к куке для клиентского JS
  },
};

module.exports = sessionConfig;