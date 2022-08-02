import decks_model from "../../models/decks.js";
import { updateDB } from "../../utils/update.js";


const decks_read = async (req, res) => { }

const decks_update = async (req, res) => {
    console.log("decks_update")
    try {
        const { decks } = req.body;        
        
        //EXIT: no decks
        if (!decks) {
            console.log("length ")
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

const decks_delete = async (req, res) => { }

//////////
export {
    decks_update,
    decks_read,
    decks_delete,
}