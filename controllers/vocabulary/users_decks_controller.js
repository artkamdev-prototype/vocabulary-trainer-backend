import users_decks_model from "../../models/users_decks.js";
import { updateDB } from "../../utils/update.js";

const users_decks_read = async (req, res) => { }

const users_decks_update = async (req, res) => {
    console.log("users_decks_update")
    try {
        const { users_decks } = req.body;

        //EXIT: no users_decks
        if (!users_decks) {
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

const users_decks_delete = async (req, res) => {
    console.log("users_decks_delete")
    try {
        const { users_decks_ids } = req.body;

        //EXIT: no cards
        if (!users_decks_ids) {
            return res.status(200).json({
                success: false,
                message: "Error! no cards_id!"
            });
        }

        const data = await users_decks_model({ _id: { $in: users_decks_ids } })
        console.log(11111, "users_decks_delete", data)

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
    users_decks_update,
    users_decks_read,
    users_decks_delete,
}