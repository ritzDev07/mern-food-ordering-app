import express, { Response, Request } from "express";
import cors from "cors";
import "dotenv/config";

const app = express();
app.use(express.json());
app.use(cors());

app.get("/test", async (req: Request, res: Response) => {
    res.json({ message: "hello" });
});


app.listen(4000, () => {
    console.log("server started on localhost:4000")
});