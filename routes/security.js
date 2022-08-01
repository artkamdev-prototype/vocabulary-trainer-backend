import express from "express";
import { security } from "../controllers/system/security_controller.js";

const router = express.Router();

router
    .route("*")
    .post(security)
    .put(security)
    .delete(security)

export default router;