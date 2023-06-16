const express = require('express');
const app = express();

const port = 3000; // Możesz zmienić numer portu, jeśli jest już zajęty

app.get('/', (req, res) => {
    res.send('Hello.');
});


app.listen(port, () => {
    console.log(`Server running on [http://127.0.0.1:${port}]`);
});
