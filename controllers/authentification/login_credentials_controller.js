import { generateAccessToken } from "../../jwt/jwt.js";
import users_model from "../../models/users.js";


const login_credentials_read = async (req, res) => {
    console.log("----------------", "login_credentials_read")
    try {
        
        const { email, password } = req.body;

        const existingUser = await users_model.findOne({ email: email });

        // EXIT: User is not found
        if (!existingUser) {
            return res.status(400).send({
                success: false,
                email: "Wrong Email!",
            });
        }

        // EXIT: Password is wrong
        if (!await existingUser.validatePassword(password)) {
            return res.status(400).send({
                success: false,
                password: "Wrong Password",
            });
        }

        // Generate token
        const token = generateAccessToken(existingUser)

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
            message: "login failed. Please try again later.",
        });
    }
}

const login_credentials_update = async (req, res) => {}

const login_credentials_delete = async (req, res) => {}

//////////
export {
    login_credentials_update,
    login_credentials_read,
    login_credentials_delete,
}