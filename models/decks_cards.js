import mongoose from "mongoose";
import decks_model from "./decks.js";
import cards_model from "./cards.js";

const decks_cards_schema = mongoose.Schema({
    decks_id: {
        type: mongoose.Schema.ObjectId,
        ref: decks_model,
        required: true,
        index: true
    },
    cards_id: {
        type: mongoose.Schema.ObjectId,
        ref: cards_model,
        required: true,
        index: true
    }
})

//////////
const decks_cards_model = new mongoose.model("decks_cards", decks_cards_schema);
export default decks_cards_model;