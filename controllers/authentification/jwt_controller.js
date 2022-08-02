import { generateAccessToken, verifyToken } from "../../jwt/jwt.js";
import users_model from "../../models/users.js";


const jwt_read = async (req, res) => {
    console.log("jwt_read", req.body)
    try {
        const { authorization } = req.body;

        // EXIT: Authorization is missing
        if (!authorization) {
            return res.status(200).json({
                success: false,
                message: "Error! Authorization was not provided."
            });
        }

        const token = authorization.split(" ")[1];

        // EXIT: Token is missing
        if (!token) {
            return res.status(200).json({
                success: false,
                message: "Error! Token was not provided."
            });
        }

        let isError = false
        let decodedToken
        verifyToken(
            token,
            (decoded) => {
                decodedToken = decoded
            },
            err => {
                isError = true
            }
        )

        // EXIT: Token not ok
        if (isError) {
            return res.status(200).json({
                success: false,
                message: "Error! Verify Token error"
            });
        }

        // EXIT: Success
        return res.status(200).json({
            success: true,
            data: decodedToken
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

const jwt_update = async (req, res) => { }

const jwt_delete = async (req, res) => { }

//////////
export {
    jwt_update,
    jwt_read,
    jwt_delete,
}