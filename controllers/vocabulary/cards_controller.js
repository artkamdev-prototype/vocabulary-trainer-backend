import cards_model from "../../models/cards.js";
import { updateDB } from "../../utils/update.js";

const cards_read = async (req, res) => {
    console.log("cards_read")
    try {
        const { cards } = req.body;

        //EXIT: no cards
        if (!cards) {
            return res.status(200).json({
                success: false,
                message: "Error! no cards!"
            });
        }

        const data = await updateDB(cards, cards_model)

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

const cards_update = async (req, res) => {
    console.log("cards_update")
    try {
        const { cards } = req.body;

        //EXIT: no cards
        if (!cards) {
            return res.status(200).json({
                success: false,
                message: "Error! no cards!"
            });
        }
        const data = await updateDB(cards, cards_model)

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

const cards_delete = async (req, res) => {
    console.log("cards_delete")
    try {
        const { cards_ids } = req.body;

        console.log(333333333333, cards_ids)

        //EXIT: no cards
        if (!cards_ids) {
            return res.status(200).json({
                success: false,
                message: "Error! no cards_id!"
            });
        }

        console.log(4444444444, cards_ids)

        const data = await cards_model.deleteMany({ _id: { $in: cards_ids } })
        console.log(11111, "cards_delete", data)
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
    cards_update,
    cards_read,
    cards_delete,
}