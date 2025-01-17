import {Router, Request, Response} from 'express';

import {User} from '../models/User';
import {AuthRouter} from './auth.router';

const router: Router = Router();

router.use('/auth', AuthRouter);

router.get('/' , async (req: Request, res: Response) => {
    res.send('users')
});

router.get('/:id', async (req: Request, res: Response) => {
  const {id} = req.params; // params객체에서 key가 id인 값을 id에 저장한다.
  const item = await User.findByPk(id);
  res.send(item);
});

export const UserRouter: Router = router;
