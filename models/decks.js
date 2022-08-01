import mongoose from "mongoose";

const decks_schema = mongoose.Schema({
    name: {
        type: String,
        index: true,
        default: "name-default-empty" + Date.now
    },
    shared: {
        type: Boolean,
        index: true,
        required: true,
    }
});

//////////
const decks_model = new mongoose.model("decks", decks_schema);
export default decks_model;