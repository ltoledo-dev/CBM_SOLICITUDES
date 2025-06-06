import express, { Request, Response } from 'express';
import config from './Infrastructure/Infrastructure/Config/Config';
import cors from 'cors';
import bodyParser from 'body-parser';
import clientRoutes from './Presentation/WebApi/Functionalities/Client/Routes/ClientRoutes';
import { exceptionMiddleware } from './Presentation/WebApi/Middleware/ExceptionMiddleware'
import productRoutes from "./Presentation/WebApi/Functionalities/Product/Routes/ProductRoutes";

const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

app.use('/api/v1', clientRoutes);
app.use('/api/v1', productRoutes);

app.get('/', (req: Request, res: Response) => {
    res.status(200).send('Bienvenido a la API');
});

app.listen(config.port, () => {
    console.log(`Servidor corriendo en ${config.host}:${config.port}`);
    console.log(`API URL: ${config.url}/api/v1`);
});

app.use(exceptionMiddleware);