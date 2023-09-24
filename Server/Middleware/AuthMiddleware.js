import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";
import User from "../Models/UserModel.js";

const protect = asyncHandler(async(req,res,next) => {
        let token 
        if (req.headers.authorization 
            && req.headers.authorization.startsWith("Bearer")) {
            try {
                token = req.headers.authorization.split(" ")[1]
                const decoded = jwt.verify(token, process.env.JWT_SECRET)
                req.user = await User.findById(decoded.id).select("-password")
                next()
            } catch (error) {
                console.error(error)
                res.status(401)
                throw new Error("Không uỷ quyền được, tìm token thất bại")
            }
        } 
        if(!token){
            res.status(401)
            throw new Error("Uỷ quyền thất bại, không tìm thấy token")
        }
    }
)
export default protect