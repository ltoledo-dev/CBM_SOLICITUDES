import express, { Request, Response } from 'express';
import config from './Infrastructure/Infrastructure/Config/Config';
import cors from 'cors';
import bodyParser from 'body-parser';
import { exceptionMiddleware } from './Presentation/WebApi/Middleware/ExceptionMiddleware';
import clientRoutes from './Presentation/WebApi/Functionalities/Client/Routes/ClientRoutes';
import productRoutes from "./Presentation/WebApi/Functionalities/Product/Routes/ProductRoutes";
import requestRoutes from "./Presentation/WebApi/Functionalities/Request/Routes/RequestRoutes";
import authenticationRoutes from "./Presentation/WebApi/Functionalities/Authentication/Routes/AuthenticationRoutes";


const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

app.use('/api/v1', authenticationRoutes);
app.use('/api/v1', clientRoutes);
app.use('/api/v1', productRoutes);
app.use('/api/v1', requestRoutes);

app.get('/', (req: Request, res: Response) => {
    res.status(200).send('Bienvenido a la API');
});

app.listen(config.port, () => {
    console.log(`Servidor corriendo en ${config.host}:${config.port}`);
    console.log(`API URL: ${config.url}/api/v1`);
});

app.use(exceptionMiddleware);