import express from "express";
import { UserController } from "./user.controler";

const router = express.Router();

router.get("/", UserController.getAllFromDB);
router.post("/", UserController.createUser);

export const userRouter = router;
