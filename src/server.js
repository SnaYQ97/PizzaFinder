const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Serwer Express działa !');
});

const port = 3001; // Możesz zmienić numer portu, jeśli jest już zajęty

app.listen(port, () => {
    console.log(`Serwer Express uruchomiony na porcie ${port}`);
});
