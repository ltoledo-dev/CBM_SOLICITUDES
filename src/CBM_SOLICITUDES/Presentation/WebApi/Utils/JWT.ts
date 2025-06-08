import jwt, { SignOptions, JwtPayload } from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'default';

export const generateToken = (
    payload: string | object | Buffer,
    expiresIn: SignOptions['expiresIn'] = '1h'
) => {
    const options: SignOptions = { expiresIn };
    return jwt.sign(payload, JWT_SECRET, options);
};

export const verifyToken = (token: string): string | JwtPayload => {
    return jwt.verify(token, JWT_SECRET);
};