import { Request, Response } from 'express'; // Asegúrate de tener esto
import { generateToken } from '../../../Utils/JWT';

export const login = async (req: Request, res: Response): Promise<void> => {
    const { usuario, clave } = req.body;

    if (usuario === 'admin' && clave === 'admin') {
        const user = { id: 1, username: usuario }; // Usuario simulado
        const token: string = generateToken({ userId: user.id, username: user.username });

        res.setHeader('Authorization', `Bearer ${token}`);
        res.setHeader('Access-Control-Expose-Headers', 'Authorization');

        res.status(200).json();
    } else {
        res.status(401).json({ message: 'Credenciales inválidas' });
    }
};

