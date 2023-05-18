import {Router} from 'express';
import * as routerHome from '../controllers/homeController';
import * as routerUser from '../controllers/userController';

const router = Router();

router.get('/', routerHome.Home);
router.post('/newUser', routerUser.newUser);
router.get('/usuario/:id/createIdade', routerUser.updateUser);

export default router;