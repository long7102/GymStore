import express from 'express'
import asyncHandler from 'express-async-handler'
import Product from '../Models/ProductModel.js'
import { admin, protect } from '../Middleware/AuthMiddleware.js'

const ProductRoute = express.Router()

//lấy tất cả sản phẩm
ProductRoute.get("/",
    asyncHandler(async (req, res) => {
        const pageSize = 6
        const page = Number(req.query.pageNumber) || 1
        const keyword = req.query.keyword ? {
            name: {
                $regex: req.query.keyword,
                $options: "i"
            }
        }
            :
            {}
        const count = await Product.countDocuments({ ...keyword })
        const products = await Product.find({ ...keyword }).limit(pageSize).skip(pageSize * (page - 1)).sort({ _id: -1 })
        res.json({ products, page, pages: Math.ceil(count / pageSize) })
    }
    ))

//Lấy tất cả sản phẩm - admin
ProductRoute.get("/all", protect, admin, asyncHandler(async (req, res) => {
    const products = await Product.find({}).sort({ _id: -1 })
    res.json(products)
}))

//Lấy từng sản phẩm
ProductRoute.get("/:id",
    asyncHandler(async (req, res) => {
        const product = await Product.findById(req.params.id)
        if (product) {
            res.json(product)
        }
        else {
            res.status(404)
            throw new Error("Không tìm thấy sản phẩm")
        }
    }
    ))

//Review 
ProductRoute.post("/:id/review", protect,
    asyncHandler(async (req, res) => {
        const { rating, comment } = req.body
        const product = await Product.findById(req.params.id)
        if (product) {
            const alreadyReviewed = product.reviews.find(
                (r) => r.user.toString() === req.user._id.toString()
            )
            if (alreadyReviewed) {
                res.status(400)
                throw new Error("Sản phẩm đã có đánh giá")
            }
            const review = {
                name: req.user.name,
                rating: Number(rating),
                comment,
                user: req.user._id
            }
            product.reviews.push(review)
            product.numReviews = product.reviews.length
            product.rating = product.reviews.reduce((acc, item) => item.rating + acc, 0) / product.reviews.length
            await product.save()
            res.status(201).json({ message: "Đánh giá sản phẩm thành công" })
        }
        else {
            res.status(404)
            throw new Error("Không tìm thấy sản phẩm")
        }
    }
    ))


//Them sản phẩm
ProductRoute.post("/", protect, admin,
    asyncHandler(async (req, res) => {
        const { name, price, brand, description, image, countInStock } = req.body
        const productExist = await Product.findOne({ name })
        if (productExist) {
            res.status(400)
            throw new Error("Sản phẩm đã tồn tại")
        }
        else {
            const product = new Product({
                name,
                price,
                brand,
                description,
                image,
                countInStock
            })
            if (product) {
                const createdProduct = await product.save()
                res.status(201).json(createdProduct)
            }
            else {

                res.status(404)
                throw new Error("Dữ liệu không hợp lệ")
            }
        }
    }
    ))

//Xoá sản phẩm
ProductRoute.delete("/:id", protect, admin,
    asyncHandler(async (req, res) => {
        const product = await Product.findById(req.params.id)
        if (product) {
            await product.deleteOne()
            res.json({message: "Xoá sản phẩm thành công"})
            alert("Xoá sản phẩm thành công")
        }
        else {
            res.status(404)
            throw new Error("Không tìm thấy sản phẩm")
        }
    }
    ))

//Chỉnh sửa sản phẩm
ProductRoute.put("/:id", protect, admin,
    asyncHandler(async (req, res) => {
        const { name, price, brand, description, image, countInStock } = req.body
        const product = await Product.findById(req.params.id)
        if (product) {
            product.name = name
            product.price = price
            product.brand = brand
            product.description = description
            product.image = image
            product.countInStock = countInStock

            const updateProduct = await product.save()
            res.json(updateProduct)
        }
        else {
            res.status(404)
            throw new Error("Không tìm thấy sản phẩm")
        }
    }
    ))
export default ProductRoute