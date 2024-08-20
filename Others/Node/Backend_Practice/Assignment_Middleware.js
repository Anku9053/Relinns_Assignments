const express = require('express');
const app = express();
const port = 8000;

const details = (req, res, next) => {
    console.log(req)
    const method = req.method;
    const baseUrl = req.url;
    const currentTime = new Date().toLocaleString();

    console.log(`Request method: ${method}, Base URL: ${baseUrl}, Time: ${currentTime}`);

   
    next();
};

app.use(details);

app.get('/api/product', (req, res) => {
    res.send('Product route');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
