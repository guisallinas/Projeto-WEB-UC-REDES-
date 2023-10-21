const express = require('express');
const moment = require('moment');
const cors = require('cors'); // Importe o módulo cors

const app = express();
const port = 3000;

app.use(cors()); // Use o middleware cors

app.get('/api/data', (req, res) => {
    const clientIP = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    const ipv4 = (clientIP.indexOf(':') >= 0) ? clientIP.split(':').pop() : clientIP;
    const ip = ipv4;
    const date = moment().format('YYYY-MM-DD');
    const time = moment().format('HH:mm:ss');
    res.json({ ip, date, time });
});

app.listen(port, () => {
  console.log(`Servidor Node.js rodando na porta ${port}`);
});
