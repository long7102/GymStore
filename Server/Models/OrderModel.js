import mongoose from "mongoose";

const orderSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: "User",
    },
    orderItems: [
        {
            name: { type: String, require: true },
            qty: { type: Number, require: true },
            image: { type: String, require: true },
            price: { type: Number, require: true },
            phone: { type: Number,  required: false, },
            product: {
                type: mongoose.Schema.Types.ObjectId,
                require: true,
                ref: "Product",
            },
        },
    ],
    shippingAddress:{
        address: { type: String, require: true },
        city: { type: String, require: true },
        postalCode: { type: String, require: true },
        country: { type: String, require: true },
        phone: { type: Number,  required: false, },
    },
    paymentMethod:{
        type: String,
        require: true,
        default: "Paypal",
    },
    paymentResult:{
        id: { type: String},
        status: { type: String},
        update_time: { type: String},
        email_address: { type: String},
    },
    phone: {
        type: Number,
        required: false,
    },
    shippingPrice: {
        type: Number,
        required: true,
        default: 70000,
    },
    totalPrice:{
        type: Number,
        require: true,
        default: 0.0,
    },
    isPaid:{
        type: Boolean,
        require: true,
        default: false,
    },
    paidAt:{
        type: Date,
    },
    isDelivered:{
        type: Boolean,
        require: true,
        default: false,
    },
    deliveredAt:{
        type: Date,
    }
},
    {
        timestamps: true
    }
)
const Order = mongoose.model("Order", orderSchema)
export default Order