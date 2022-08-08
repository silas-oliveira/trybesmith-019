import express from 'express';
import 'express-async-errors';
import orderRouter from './api/routes/orders.router';
import productsRouter from './api/routes/products.router';
import userRouter from './api/routes/user.router';

const app = express();

app.use(express.json());

app.use('/products', productsRouter);
app.use('/users', userRouter);
app.use('/orders', orderRouter);

export default app;
