const express = require("express");
const { MongoClient } = require("mongodb");
require("dotenv").config();

const port = process.env.port || 8000;
const mongoUrl = process.env.mongoUrl;
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("hello world");
});

async function connectDatabase() {
    try {
        const client = await MongoClient.connect(mongoUrl, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Connected to MongoDB");

        const db = client.db(); 
        const collection = db.collection("Relinns_Assignments"); 
        app.post("/post", async (req, res) => {
            try {
                const result = await collection.insertOne(req.body);
                res.status(200).send(result);
            } catch (error) {
                res.status(400).send({ error: "Failed to save data" });
            }
        });

        // Start the server
        app.listen(port, () => {
            console.log("Connected to the database");
            console.log(`Server is running on port ${port}`);
        });

    } catch (error) {
        console.error("Failed to connect to MongoDB", error);
    }
}

connectDatabase();
