import jwt from "jsonwebtoken"

const generateTokenAndSetCookie = (userId, res) =>{
    const token = jwt.sign({userId}, process.env.JWT_SECRET, {
        expiresIn: '15d'
    })

    res.cookie("jwt", token, {
        maxAge: 15 * 24 * 60 * 60 * 1000, // max age im milliseconds it is 15days
        httpOnly: true, //prevent XXS Attacks or cross-site scripting attacks
        sameSite: "strict", // CRS Attacks cross site request forgery attacks
        secure: process.env.NODE_ENV !== "development"
    })
}

export default generateTokenAndSetCookie;