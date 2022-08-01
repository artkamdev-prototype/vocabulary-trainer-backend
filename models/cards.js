import mongoose from "mongoose";

const cards_schema = mongoose.Schema({
    front: {
        type: String,
        default: ""
    },
    back: {
        type: String,
        default: ""
    },
    rank: {
        type: Number,
        default: 0
    }
})

//////////
const cards_model = new mongoose.model("cards", cards_schema);
export default cards_model;