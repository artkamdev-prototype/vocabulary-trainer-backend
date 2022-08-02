import users_decks_model from "../../models/users_decks.js";
import { updateDB } from "../../utils/update.js";

const users_decks_read = async (req, res) => {}

const users_decks_update = async (req, res) => {
    console.log("users_decks_update")
    try {
        const { users_decks } = req.body;

        //EXIT: no users_decks
        if (!users_decks) {
            console.log("length ")
            return res.status(200).json({
                success: false,
                message: "Error! no users_decks!"
            });
        }
        
        const data = await updateDB(users_decks, users_decks_model)

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

const users_decks_delete = async (req, res) => {}

//////////
export {
    users_decks_update,
    users_decks_read,
    users_decks_delete,
}