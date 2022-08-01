import mongoose from "mongoose";

const cards_schema = mongoose.Schema({
    front: {
        type: String,
        default: "front-default-empty"
    },
    back: {
        type: String,
        default: "back-default-empty"
    },
    rank: {
        type: Number,
        default: 0
    }
})

//////////
const cards_model = new mongoose.model("users_decks", cards_schema);
export default cards_model;