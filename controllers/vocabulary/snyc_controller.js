import mongoose from "mongoose";
import { generateAccessToken, verifyToken } from "../../jwt/jwt.js";
import users_model from "../../models/users.js";

const sync_read = async (req, res) => {
    console.log("sync_read")
    try {
        const { authorization } = req.body;

        const token = authorization.split(" ")[1];

        let isError = false
        let decodedToken
        verifyToken(
            token,
            decoded => decodedToken = decoded,
            err => isError = true
        )

        const userId = decodedToken.userId

        const data = await users_model.aggregate([
            { $match: { _id: new mongoose.Types.ObjectId(userId) } },

            { $project: { "users": "$$ROOT" } },

            { $lookup: { from: "users_decks", localField: "_id", foreignField: "users_id", as: "users_decks" } },

            { $lookup: { from: "decks", localField: "users_decks.decks_id", foreignField: "_id", as: "decks" } },

            { $lookup: { from: "decks_cards", localField: "decks._id", foreignField: "decks_id", as: "decks_cards" } },

            { $lookup: { from: "cards", localField: "decks_cards.cards_id", foreignField: "_id", as: "cards" } }
        ])

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

const sync_update = async (req, res) => { }

const sync_delete = async (req, res) => { }

//////////
export {
    sync_update,
    sync_read,
    sync_delete,
}