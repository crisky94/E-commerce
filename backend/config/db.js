// import mongoose from "mongoose";


// const connectDB = async () => {
//     try {

//         await mongoose.connect(process.env.MONGO_URI)
//         await mongoose.connection.db.admin().command({ ping: 1 });
//         console.log(`Sucessfully connected to mongoDB 👍🏻`)

//     } catch (error) {
//         console.log(`ERROR: ${error.message}`)
//         process.exit(1)
//     }
// }

// export default connectDB
import mongoose from "mongoose";
const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };
const connectDB = async () => {
    try {
        // Create a Mongoose client with a MongoClientOptions object to set the Stable API version
        await mongoose.connect(process.env.MONGO_URI, clientOptions);
        await mongoose.connection.db.admin().command({ ping: 1 });
        console.log(`Sucessfully connected to mongoDB`);
    } finally {
        // Ensures that the client will close when you finish/error
        await mongoose.disconnect();
    }

}
export default connectDB