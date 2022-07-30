import { generateAccessToken } from '../../jwt/jwt.js'
import users_model from "../../models/users.js";

const register_credentials_read = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await users_model.findOne({ email: email });

        // EXIT: User exist
        if (user) {
            return res.status(400).send({
                success: false,
                email: "registration failed. Maybe you already have an account?",
            });
        }

        // Create new user
        const newUser = await users_model.create({ email, password });

        // Generate token
        const token = generateAccessToken(newUser)

        // EXIT: Success
        return res.status(201).json({
            success: true,
            message: "login successful",
            data: { token },
        });
    }
    catch (err) {
        console.log("Error", err)

        // EXIT: Error
        return res.status(500).send({
            success: false,
            message: "registration failed. Please try again later.",
        });
    }
}

const register_credentials_update = async (req, res) => {}

const register_credentials_delete = async (req, res) => {}

//////////
export {
    register_credentials_update,
    register_credentials_read,
    register_credentials_delete,
}