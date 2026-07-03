import express from "express";
import { askQuestion } from "../controllers/chatController";

const router = express.Router();

router.post("/", askQuestion);

export default router;