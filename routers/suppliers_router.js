const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.json({
        suppliers: [
            'coffee roaster',
            'food vendor',
            'tea distributor'
        ]
    })
});

router.post('/', (req, res) => {
    const supplier = req.body;
    res.status(201).json({ created: supplier })
});

router.delete('/:id', (req, res) => {
    const id = req.params.id;
    res.status(200).json({ deleted: id })
});

module.exports = router;
