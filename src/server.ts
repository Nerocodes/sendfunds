import express, { Request, Response } from 'express';
import router from './routes';

const app = express();
const port:number = 9000;

app.use(express.json());
app.use('/api/', router);

app.get('/', ( req:Request, res:Response ) => {
    return res.send('Hello world');
})

app.listen(port, () => {
    console.log('Server is running on http://localhost:9000');
});