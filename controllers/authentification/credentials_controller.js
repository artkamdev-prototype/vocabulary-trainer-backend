import { generateAccessToken } from "../../jwt/jwt.js";
import users_model from "../../models/users.js";


const credentials_read = async (req, res) => {
    console.log("credentials_read")
    try {        
        const { email, password } = req.body;

        const existingUser = await users_model.findOne({ email: email });

        console.log(111111)
        // EXIT: User is not found
        if (!existingUser) {
            return res.status(400).send({
                success: false,
                email: "Wrong Email!",
            });
        }
        console.log(22222222)

        // EXIT: Password is wrong
        if (!await existingUser.validatePassword(password)) {
            return res.status(400).send({
                success: false,
                password: "Wrong Password",
            });
        }
        console.log(33333333)

        // Generate token
        const token = generateAccessToken(existingUser)
        console.log(44444444)

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

const credentials_update = async (req, res) => {
    console.log("credentials_update")
    try {
        const { email, password, newPassword } = req.body;
        const user = await users_model.findOne({ email: email });

        //TODO: implement update password; newPassword

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

const credentials_delete = async (req, res) => {}

//////////
export {
    credentials_update,
    credentials_read,
    credentials_delete,
}