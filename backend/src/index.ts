import express, { Response, Request } from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
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

app.get("/test", async (req: Request, res: Response) => {
    res.json({ message: "hello" });
});


app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});