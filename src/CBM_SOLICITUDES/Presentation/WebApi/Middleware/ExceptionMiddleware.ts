import { Request, Response, NextFunction } from 'express';

interface CustomError extends Error {
    status?: number;
}

export const exceptionMiddleware = (
    err: CustomError,
    req: Request,
    res: Response,
    next: NextFunction
): void => {
    const status = err.status || 500;
    const response: { message: string; stack?: string } = {
        message: err.message || 'Error interno del servidor',
    };

    if (process.env.NODE_ENV === 'development' && err.stack) {
        response.stack = err.stack;
    }

    res.status(status).json(response);
};
