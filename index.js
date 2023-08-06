import express from "express";
import cors from "cors";
import UserRoute from "./routes/user_routes.js";

    const app = express();

    app.use(cors());
    app.use(express.json());
    app.use(UserRoute);


    app.listen(8000, () => console.log('server berhasil dijalankan.....'))