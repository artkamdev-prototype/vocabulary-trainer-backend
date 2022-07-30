import mongoose from "mongoose";

const decks_schema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        index: true
    },
    shared: {
        type: Boolean,
        required: true,
        index: true
    }
});

//////////
const decks_model = new mongoose.model("users_decks", decks_schema);
export default decks_model;