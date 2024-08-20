const express = require('express');
const router = express.Router();

router.delete('/:id', (req, res) => {
    console.log(req.params);
    const id = req.params.id;
    res.send(`Item with ID ${id} deleted`);
});

module.exports = router;
