import express from "express";
import { credentials_delete, credentials_read, credentials_update } from "../controllers/authentification/credentials_controller.js";
import { jwt_delete, jwt_read, jwt_update } from "../controllers/authentification/jwt_controller.js";

const router = express.Router();

router
    .route("/credentials")
    .put(credentials_update)
    .post(credentials_read)
    .delete(credentials_delete)

router
    .route("/jwt")
    .put(jwt_update)
    .post(jwt_read)
    .delete(jwt_delete)

export default router;