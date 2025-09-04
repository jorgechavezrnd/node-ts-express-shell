import { Request, Response } from 'express';

export class AuthController {

  // DI
  constructor() {}

  registerUser = (req: Request, res: Response) => {

    res.json('registerUser');

  };

  loginrUser = (req: Request, res: Response) => {

    res.json('loginrUser');

  };

  validateEmail = (req: Request, res: Response) => {

    res.json('validateEmail');

  };

}
