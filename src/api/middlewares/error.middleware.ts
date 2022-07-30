import { Request, Response, NextFunction } from 'express';

const errorHandler = (err: Error, _req: Request, res: Response, _next: NextFunction) => {
  const { message } = err;
  
  if (err) {
    const [msg, status] = message.split('/');
    console.log('msg', msg);
    res.status(Number(status)).json({ message: msg });
  }
};

export default { errorHandler }; 