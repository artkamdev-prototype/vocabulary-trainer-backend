import decks_model from "../../models/decks.js";
import { updateDB } from "../../utils/update.js";


const decks_read = async (req, res) => { }

const decks_update = async (req, res) => {
    console.log("decks_update")
    try {
        const { decks } = req.body;

        // set dates in decks
        decks.map(x => x.last_update = Date.now())

        //EXIT: no decks
        if (!decks) {
            return res.status(200).json({
                success: false,
                message: "Error! no decks!"
            });
        }

        const data = await updateDB(decks, decks_model)

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

const decks_delete = async (req, res) => {
    console.log("decks_delete")
    try {
        const { decks_ids } = req.body;

        //EXIT: no cards
        if (!decks_ids) {
            return res.status(200).json({
                success: false,
                message: "Error! no cards_id!"
            });
        }

        const data = await decks_model.deleteMany({ _id: { $in: decks_ids } })
        console.log(11111, "decks_delete", data)

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
    decks_update,
    decks_read,
    decks_delete,
}