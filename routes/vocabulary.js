import express from "express";
import { cards_delete, cards_read, cards_update } from "../controllers/vocabulary/cards_controller.js";
import { decks_cards_delete, decks_cards_read, decks_cards_update } from "../controllers/vocabulary/decks_cards_controller.js";
import { decks_delete, decks_read, decks_update } from "../controllers/vocabulary/decks_controller.js";
import { games_delete, games_read, games_update } from "../controllers/vocabulary/games_controller.js";
import { search_read } from "../controllers/vocabulary/search_controller.js";
import { shared_read } from "../controllers/vocabulary/shared_controller.js";
import { sync_delete, sync_read, sync_update } from "../controllers/vocabulary/snyc_controller.js";
import { users_decks_delete, users_decks_read, users_decks_update } from "../controllers/vocabulary/users_decks_controller.js";
import { users_games_delete, users_games_read, users_games_update } from "../controllers/vocabulary/users_games_controller.js";

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

router
    .route("/shared")
    .post(shared_read)

export default router;