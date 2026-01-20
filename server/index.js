const express = require("express");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
require("dotenv").config();
const cors = require("cors");

const port = process.env.PORT || 3000;

const uri = `${process.env.MONGODB_URL}`;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});
async function run() {
  try {
    const db = client.db("NewsDB");
    const eventsCollection = db.collection("News");
    
    app.post("/news", async (req, res) => {
      const newsItem = req.body;
      const result = await eventsCollection.insertOne(newsItem);
      res.send(result);
    });
  } finally {
  }
}

run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Welcome to the Community Canvas Server!");
});

app.listen(port, () => {
  console.log(`Community Canvas server listening on port ${port}`);
});
