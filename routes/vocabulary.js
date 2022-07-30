import express from "express";
import { sync_delete, sync_read, sync_update } from "../controllers/vocabulary/snyc_controller";

const router = express.Router();

router
    .route("/sync")
    .put(sync_update)
    .post(sync_read)
    .delete(sync_delete)

router
    .route("/decks")
    .put(decks_update)
    .post(decks_read)
    .delete(decks_delete)

router
    .route("/cards")
    .put(cards_update)
    .post(cards_read)
    .delete(cards_delete)

router
    .route("/games")
    .put(games_update)
    .post(games_read)
    .delete(games_delete)

router
    .route("/users_decks")
    .put(users_decks_update)
    .post(users_decks_read)
    .delete(users_decks_delete)

router
    .route("/decks_cards")
    .put(decks_cards_update)
    .post(decks_cards_read)
    .delete(decks_cards_delete)

router
    .route("/users_games")
    .put(users_games_update)
    .post(users_games_read)
    .delete(users_games_delete)

router
    .route("/search")
    .post(search_read)

export default router;