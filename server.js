const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Раздача статических файлов из папки public
app.use(express.static('public'));

// ✅ ИСПРАВЛЕННЫЙ маршрут
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Запуск сервера
app.listen(PORT, () => {
    console.log(`🚀 Сервер запущен: http://localhost:${PORT}`);
});