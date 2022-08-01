import mongoose from "mongoose";
import games_model from "./games";
import users_model from "./users";

const users_games_schema = mongoose.Schema({
    users_id: {
        type: mongoose.Schema.ObjectId,
        ref: users_model,
        required: true,
        index: true
    },
    games_id: {
        type: mongoose.Schema.ObjectId,
        ref: games_model,
        required: true,
        index: true
    },
    liked: {
        type: Number,
        index: true
    }
})

//////////
const users_games_model = new mongoose.model("users_games", users_games_schema);
export default users_games_model;