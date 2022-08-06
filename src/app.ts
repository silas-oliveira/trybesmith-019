import express from 'express';
import productsRouter from './api/routes/products.router';
import userRouter from './api/routes/user.router';

const app = express();

app.use(express.json());

app.use('/products', productsRouter);
app.use('/users', userRouter);

export default app;
