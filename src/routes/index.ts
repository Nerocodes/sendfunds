import { Router, Request, Response } from "express";
import UserController from "../controllers/UserController";

const router = Router();

const userController = new UserController();

router.get('/users', userController.getAllUsers);

export default router;