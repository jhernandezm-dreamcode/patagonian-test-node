import express from "express";
import { ProcessFileController } from "../controllers/processFileController";
import multer from 'multer';

const router = express.Router();
const upload = multer({ dest: 'uploads/' })
const processFileController = new ProcessFileController();

router.route("/upload").post(upload.single('file'),processFileController.processFile).all();

export default router;
