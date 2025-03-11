// require('dotenv').config(path :'./env');
import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({ path: "./env" });
connectDB()
    .then(() => {
        try {
            app.listen(process.env.PORT || 8000, () => {
                console.log(`server is running at port : ${process.env.PORT}`);
            })
        } catch (error) {
            console.error("error", error);
        }

    })
    .catch((error) => {
        console.log("mongodb connection failed !", error)
    })






// 1st approach
// import express from "express";
// const app = express();

// (async () => {
//     try {
//         await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
//         app.on("error", (error) => {
//             console.log("error", error)
//             throw error
//         })

//         app.listen(process.env.PORT, () => {
//             console.log(`App is running on port ${process.env.PORT}`)
//         })

//     } catch (error) {
//         console.error("error", error);
//         throw err
//     }
// })()