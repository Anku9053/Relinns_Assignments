const express = require('express');
const app = express();
const port = 8000;

app.use((req, res, next) => {
    console.log(`Requested URL: ${req.url}`);
    next();
});


app.get('/ab*cd', (req, res) => {
    res.send('Route matched with /ab*cd');
});


app.use(express.json())
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
