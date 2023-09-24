import mongoose from "mongoose"

const connectDatabase = async() => {
    try {
        const connection =await mongoose.connect(process.env.MONGO_URL, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        })
        console.log(`Connected to MongoDB: ${connection.connection.host}`);
        } catch (error) {
        console.log(`Lỗi: ${error.message}`)
        process.exit(1)
    }
}
export default connectDatabase