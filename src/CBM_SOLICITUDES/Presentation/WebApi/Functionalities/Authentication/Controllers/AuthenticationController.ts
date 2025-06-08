import { Request, Response } from 'express'; // Asegúrate de tener esto
import { generateToken } from '../../../Utils/JWT';

export const login = async (req: Request, res: Response): Promise<void> => {
    const { usuario, clave } = req.body;

    // Aquí haces la validación contra una "base de datos" o valores simulados
    if (usuario === 'ltoledo' && clave === '123') {
        const user = { id: 1, username: usuario }; // Usuario simulado
        const token: string = generateToken({ userId: user.id, username: user.username });

        // Enviar token por header
        res.setHeader('Authorization', `Bearer ${token}`);
        res.setHeader('Access-Control-Expose-Headers', 'Authorization');

        // También puedes enviar el token en el cuerpo si quieres
        res.status(200).json();
    } else {
        res.status(401).json({ message: 'Credenciales inválidas' });
    }
};

