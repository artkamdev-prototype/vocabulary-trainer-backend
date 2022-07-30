import express from "express";
import { security } from '../controllers/securityController.js'

const router = express.Router();

router
    .route("*")
    .get(security)

router
    .route("*")
    .post(security)


export default router;