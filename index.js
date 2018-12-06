const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');

const server = express();
const PORT = 5050;


const supplierRouter = require('./routers/supplier_router');
const itemRouter = require('./routers/item_router');


server.use(
    express.json(),
    helmet(),
    morgan('dev')
);


server.use('/api/suppliers', supplierRouter);

server.use('/api/items/', itemRouter);


server.listen(PORT, err => {
    console.log(`listening on port ${PORT}`);
})