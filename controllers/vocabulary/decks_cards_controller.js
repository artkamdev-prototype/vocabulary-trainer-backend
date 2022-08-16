import decks_cards_model from "../../models/decks_cards.js";
import { updateDB } from "../../utils/update.js";

const decks_cards_read = async (req, res) => {}

const decks_cards_update = async (req, res) => {
    console.log("decks_cards_update")
    try {
        const { decks_cards } = req.body;

        //EXIT: no decks_cards
        if (!decks_cards) {
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

const decks_cards_delete = async (req, res) => {
    console.log("decks_cards_delete")
    try {
        const { decks_cards_ids } = req.body;

        //EXIT: no cards
        if (!decks_cards_ids) {
            return res.status(200).json({
                success: false,
                message: "Error! no cards_id!"
            });
        }

        const data = await decks_cards_model.deleteMany({ _id: { $in: decks_cards_ids } })
        console.log(11111, "decks_cards_delete", data)
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

//////////
export {
    decks_cards_update,
    decks_cards_read,
    decks_cards_delete,
}