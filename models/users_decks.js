import mongoose from "mongoose";
import users_model from "./users.js";
import decks_model from "./decks.js";

const users_decks_schema = mongoose.Schema({
    users_id: {
        type: mongoose.Schema.ObjectId,
        ref: users_model,
        required: true,
        index: true
    },
    decks_id: {
        type: mongoose.Schema.ObjectId,
        ref: decks_model,
        required: true,
        index: true
    },
    author: {
        type: mongoose.Schema.ObjectId,
        ref: users_model,
        required: true,
        index: true
    },
    liked: {
        type: Number
    }
});

//////////
const users_decks_model = new mongoose.model("users_decks", users_decks_schema);
export default users_decks_model;