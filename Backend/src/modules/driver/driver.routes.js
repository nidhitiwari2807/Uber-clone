import express from 'express';
import { authenticate } from '../../common/middleware/auth.middleware';
import { authorizeRole } from '../../common/middleware/role.middleware';




const router = express.Router();
 router.post('/register', authenticate,
    authorizeRole('DRIVER'),
    registerDriver,
 )

 export default router;