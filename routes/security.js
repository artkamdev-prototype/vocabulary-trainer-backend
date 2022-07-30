import express from "express";
import { security_read } from "../controllers/system/security_controller.js";

const router = express.Router();

router
    .route("*")
    .post(security_read)

export default router;