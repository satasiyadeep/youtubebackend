// require('dotenv').config(path :'./env');
import dotenv from "dotenv";
import express from "express"; 
import connectDB from "./db/index.js";
import userRoutes from "./routes/user.routes.js"; // Import user routes

dotenv.config({ path: "./env" });

const app = express(); 

app.use(express.json()); // Middleware to parse JSON

// Register routes
app.use("/api/v1/users", userRoutes);

connectDB()
    .then(() => {
        try {
            app.listen(process.env.PORT || 8000, () => {
                console.log(`Server is running at port: ${process.env.PORT || 8000}`);
            });
        } catch (error) {
            console.error("Error:", error);
        }
    })
    .catch((error) => {
        console.log("MongoDB connection failed!", error);
    });






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