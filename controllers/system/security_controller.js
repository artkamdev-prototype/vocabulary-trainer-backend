const security_middleware = (req, res, next) => {
    console.log("security_middleware")
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

        // SUCCESS: Next routes have access
        next()
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
//////////
export {
    security_middleware,
}