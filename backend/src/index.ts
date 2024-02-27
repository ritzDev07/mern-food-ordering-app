import express, { Response, Request } from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import myUserRoute from "./routes/MyUserRoute";


const PORT = process.env.PORT || 4100;

// Connect to MongoDB using the provided connection string
mongoose
    .connect(process.env.MONGODB_CONNECTION_STRING as string)
    .then(() => {
        console.log('MongoDB is connected');
    })
    .catch((err) => {
        console.log(err);
    })


const app = express();
app.use(express.json());
app.use(cors());

//EndPoints

//to check if the server has succesfully started
app.get("/health", async (req: Request, res: Response) => {
    res.send({
        message: "Health OK"
    })
});

app.use("/api/my/user", myUserRoute);



app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});