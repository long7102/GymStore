import express from 'express'
import asyncHandler from 'express-async-handler'
import { protect, admin } from "../Middleware/AuthMiddleware.js"
import Order from './../Models/OrderModel.js'

const orderRouter = express.Router()
//tạo đơn hàng
orderRouter.post("/", protect, asyncHandler(async (req, res) => {
    const {
        orderItems,
        shippingAddress,
        paymentMethod,
        itemsPrice,
        phone,
        shippingPrice,
        totalPrice
    } = req.body
    if (orderItems && orderItems.length === 0) {
        res.status(400)
        throw new Error("Không có đơn hàng ")
        return
    }
    else {
        const order = new Order({
            orderItems,
            user: req.user._id,
            shippingAddress,
            paymentMethod,
            itemsPrice,
            phone,
            shippingPrice,
            totalPrice
        })
        const createOrder = await order.save()
        res.status(201).json(createOrder)
    }
}))

// đơn hàng đang chờ -admin
orderRouter.get("/all", protect, admin, asyncHandler(async (req, res) => {
    const orders = await Order.find({}).sort({ _id: -1 }).populate("user", "id name email");
        res.json(orders)
}))



// đơn hàng đang chờ
orderRouter.get("/", protect, asyncHandler(async (req, res) => {
    const order = await Order.find({user: req.user._id}).sort({_id: -1})
        res.json(order)
}))

// lấy đơn hàng bằng id
orderRouter.get("/:id", protect, asyncHandler(async (req, res) => {
    const order = await Order.findById(req.params.id).populate(
        "user",
        "name email"
    )
    if (order) {
        res.json(order)
    }
    else {
    res.status(404)
    throw new Error("Không tìm thấy đơn hàng")
    }
}))

// thanh toán đơn hàng
orderRouter.put("/:id/pay", protect, asyncHandler(async (req, res) => {
    const order = await Order.findById(req.params.id)
    if (order) {
        order.isPaid = true
        order.paitAt = Date.now()
        order.paymentResult = {
            id: req.body.id,
            status: req.body.status,
            update_time: req.body.update_time,
            phone: req.body.phone,
            email_address: req.body.email_address
        }
        const updateOrder = await order.save()
        res.json(updateOrder)
    }
    else {
    res.status(404)
    throw new Error("Không tìm thấy đơn hàng")
    }
}))


//vận chuyển đơn hàng
orderRouter.put("/:id/delivered", protect, admin, asyncHandler(async (req, res) => {
    const order = await Order.findById(req.params.id)
    if (order) {
        order.isDelivered = true
        order.deliveredAt = Date.now()
        const updateOrder = await order.save()
        res.json(updateOrder)
    }
    else {
    res.status(404)
    throw new Error("Không tìm thấy đơn hàng")
    }
}))

export default orderRouter