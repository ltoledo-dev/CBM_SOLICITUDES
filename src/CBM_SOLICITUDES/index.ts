import express, { Request, Response } from 'express';
import config from './Infrastructure/Infrastructure/Config/Config';
import cors from 'cors';
import bodyParser from 'body-parser';
import clientRoutes from './Presentation/WebApi/Functionalities/Client/Routes/ClientRoutes';
import { exceptionMiddleware } from './Presentation/WebApi/Middleware/ExceptionMiddleware'
const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use('/api/v1', clientRoutes);

app.get('/', (req: Request, res: Response) => {
    res.status(200).send('Welcome to the API');
});

app.listen(config.port, () => {
    console.log(`Server is running on ${config.host}:${config.port}`);
    console.log(`API URL: ${config.url}/api/v1`);
});

app.use(exceptionMiddleware);