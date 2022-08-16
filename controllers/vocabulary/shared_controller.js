import mongoose from "mongoose";
import decks_model from "../../models/decks.js";

const shared_read = async (req, res) => {
    console.log("shared_read")
    try {
        const { decks_id } = req.body;

        const data = await decks_model.aggregate([
            { $match: { $and: [{ _id: new mongoose.Types.ObjectId(decks_id) }, { shared: { $eq: true } }] } },

            { $project: { "decks": "$$ROOT" } },

            { $lookup: { from: "decks_cards", localField: "_id", foreignField: "decks_id", as: "decks_cards" } },

            { $lookup: { from: "cards", localField: "decks_cards.cards_id", foreignField: "_id", as: "cards" } }

        ])

        console.log(222222222222, data)

        // EXIT: SUCCESS
        return res.status(200).json({
            success: true,
            data: data
        });
    } catch (err) {
        console.log("Error", err)

        // EXIT: Error
        return res.status(500).send({
            message: "Error",
        });
    }
}

//////////
export {
    shared_read
}