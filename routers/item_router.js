const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.json({
        items: [
            'coffee beans',
            'scones',
            'tea bags'
        ]
    })
});

router.post('/', (req, res) => {
    const item = req.body;
    res.status(201).json({ created: item })
});

router.delete('/:id', (req, res) => {
    const id = req.params.id;
    res.status(200).json({ deleted: id })
});

module.exports = router;
