import mongoose from "mongoose";

const games_schema = mongoose.Schema({
    name: {
        type: String,
        required: true
    }
});

//////////
const games_model = new mongoose.model("games_decks", games_schema);
export default games_model;