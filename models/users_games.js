import mongoose from "mongoose";

const users_games_schema = mongoose.Schema({
    users_id: {
        type: String,
        required: true,
        index: true
    },
    games_id: {
        type: String,
        required: true,
        index: true
    },
    liked: {
        type: Number,
        required: true
    }
})

//////////
const users_games_model = new mongoose.model("users_games", users_games_schema);
export default users_games_model;