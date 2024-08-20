const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 4000;
const jpgDir = path.join(__dirname, 'assets/images/jpg');
const pngDir = path.join(__dirname, 'assets/images/png');


app.use('/public-png', express.static(pngDir));
app.use('/public-jpeg', express.static(jpgDir));

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
