import express from "express";
import { security_middleware } from "../controllers/system/security_controller.js";

const router = express.Router();

router
    .route("*")
    .post(security_middleware)
    .put(security_middleware)
    .delete(security_middleware)

export default router;