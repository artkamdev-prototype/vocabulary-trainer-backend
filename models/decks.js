import mongoose from "mongoose";

const decks_schema = mongoose.Schema({
    name: {
        type: String,
        index: true,
        default: "name-default-empty"
    },
    shared: {
        type: Boolean,
        index: true,
        default: false
    }
});

//////////
const decks_model = new mongoose.model("users_decks", decks_schema);
export default decks_model;