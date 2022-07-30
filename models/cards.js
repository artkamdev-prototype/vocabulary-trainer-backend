import mongoose from "mongoose";

const cards_schema = mongoose.Schema({
    front: {
        type: String,
        required: true
    },
    back: {
        type: String,
        required: true
    },
    rank: {
        type: Number,
        required: true
    }
})

//////////
const cards_model = new mongoose.model("users_decks", cards_schema);
export default cards_model;