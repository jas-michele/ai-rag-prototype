import express from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        message: "AI RAG Prototype Server is Running"
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
});

