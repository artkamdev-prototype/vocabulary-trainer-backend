import express from "express";

import { login_credentials_delete, login_credentials_read, login_credentials_update } from "../controllers/authentification/login_credentials_controller.js";
import { login_jwt_delete, login_jwt_read, login_jwt_update } from "../controllers/authentification/login_jwt_controller.js";
import { register_credentials_delete, register_credentials_read, register_credentials_update } from "../controllers/authentification/register_credentials_controller.js";

const router = express.Router();

router
    .route("/login/jwt")
    .put(login_jwt_update)
    .post(login_jwt_read)
    .delete(login_jwt_delete)

router
    .route("/login/credentials")
    .put(login_credentials_update)
    .post(login_credentials_read)
    .delete(login_credentials_delete)

router
    .route("/register/credentials")
    .put(register_credentials_update)
    .post(register_credentials_read)
    .delete(register_credentials_delete)

export default router;