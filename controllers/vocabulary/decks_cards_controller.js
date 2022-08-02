import decks_cards_model from "../../models/decks_cards.js";
import { updateDB } from "../../utils/update.js";

const decks_cards_read = async (req, res) => {}

const decks_cards_update = async (req, res) => {
    console.log("decks_cards_update")
    try {
        const { decks_cards } = req.body;

        //EXIT: no decks_cards
        if (!decks_cards) {
            console.log("length ")
            return res.status(200).json({
                success: false,
                message: "Error! no decks_cards!"
            });
        }

        const data = await updateDB(decks_cards, decks_cards_model)

        // EXIT: Success
        return res.status(201).json({
            success: true,
            data: data,
        });
    } catch (err) {
        console.log("Error", err)

        // EXIT: Error
        return res.status(500).send({
            message: "Error",
            err: err.message,
        });
    }
}

const decks_cards_delete = async (req, res) => {}

//////////
export {
    decks_cards_update,
    decks_cards_read,
    decks_cards_delete,
}