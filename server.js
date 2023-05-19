const express = require("express");
const path = require("path");
const cors = require("cors");
const axios = require("axios");
const app = express();


const port = process.env.PORT || 5000;

app.use(express.json())
app.use(cors({
    origin: "http://localhost:3000",
    methods : ["GET", "POST"],
}))



app.get("/", (req, res) => {
    res.json({
        success: "true",
        message: "Server is running "
    });
})

app.post("/get-news", async(req, res) => {
    const { url } = req.body;

    // making get request to api
    let data = await fetch(url);
    data = await data.json();
    
    res.json({
        success: true,
        content : data
    })
})


app.use("/", express.static(path.join("./public/build")));


app.listen(port, () => {
    console.log(`server is running on ${port}`);
})