import express from "express"
import { getWelcome } from "./profile.controller"


const router = express.Router();

router.get('/:userId/welcome', authenticate, getWelcome);
export default router;