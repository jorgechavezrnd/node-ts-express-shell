import { Router } from 'express';
import { AuthController } from './controller';

export class AuthRoutes {

  static get routes(): Router {

    const router = Router();

    const controller = new AuthController();

    // Define routes
    router.post('/login', controller.loginrUser);
    router.post('/register', controller.registerUser);

    router.get('/validate-email/:token', controller.validateEmail);

    return router;

  }

}
