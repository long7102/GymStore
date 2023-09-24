import express from "express"
import dotenv from "dotenv"
import connectDatabase from "../Server/config/MongoDB.js"
import ImportData from "./DataImport.js"
import ProductRoute from "./Routes/ProductRoutes.js"
import { errorHandler, notFound } from "./Middleware/Errors.js"
import userRouter from "./Routes/UserRoutes.js"
import orderRouter from "./Routes/orderRoutes.js"

dotenv.config()
connectDatabase()
const app = express()
app.use(express.json())

//API
app.use("/api/import", ImportData)
app.use("/api/products", ProductRoute)
app.use("/api/users", userRouter)
app.use("/api/orders", orderRouter)
app.get("/api/config/paypal", (req,res) => {
    res.send(process.env.PAYPAL_CLIENT_ID)
})

//Lỗi
app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 1000
console.log("Kết nối thành công tới CSDL")
app.listen(PORT, console.log(`Server đang chạy ở cổng: ${PORT}`))