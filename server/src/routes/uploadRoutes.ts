import express from "express";
import multer from "multer";
import { uploadPDF } from "../controllers/uploadController";

const router = express.Router();

const upload = multer({
    dest: "upload/",
})

router.post("/", upload.single("pdf"), uploadPDF);

export default router;
