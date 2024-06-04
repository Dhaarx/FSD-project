const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

app.use(cors({
    origin: 'http://localhost:3000',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
    allowedHeaders: 'Content-Type,Authorization,Access-Control-Allow-Origin'
}));

app.options('*', cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));

const User = require('./userdetails');
const Image = require('./imagedetails');
const mongourl = "mongodb+srv://dharineesh:dhaarx@cluster0.oynq0kv.mongodb.net/project";

mongoose.connect(mongourl)
    .then(() => { console.log("Connected to MongoDB"); })
    .catch(err => console.error("Error connecting to MongoDB:", err));


/*app.post("/post", async (req, res) => {
    console.log(req.body);
    const { data } = req.body;

    try {
        if (data === "dhaarx") {
            res.send({ status: "ok" });
        } else {
            res.send({ status: "user not found" });
        }
    } catch (error) {
        res.status(500).send({ status: "something went wrong, try again" });
    }
});*/

/*app.post("/register", async (req, res) => {
    const { name, email, mobileno } = req.body;
    try {
        const userData = new User({
            username: name,
            email,
            phoneno: mobileno
        });
        await userData.save();
        res.send({ status: "ok" });
    } catch (error) {
        res.status(500).send({ status: "error", message: error.message });
    }
});*/

app.post("/upload-image", async (req, res) => {
    const { base64,cbrand } = req.body;
    try {
        const imageData = new Image({
            image: base64,
            brand: cbrand
        });
        await imageData.save();
        res.send({ status: "ok" });
    } catch (error) {
        res.status(500).send({ status: "error", message: error.message });
    }
});

app.get("/get-image", async (req, res) => {
    try {
        await Image.find({}).then(data=>{
            res.send({status:"ok",data:data})
        })      
    } catch (error) {
        res.status(500).send({ status: "error", message: error.message });
    }
});

app.get("/get-specifiedimage", async (req, res) => {
    const {brand}=req.query;
    try {
        await Image.find({brand}).then(data=>{
            res.send({status:"ok",data:data})
        })      
    } catch (error) {
        res.status(500).send({ status: "error", message: error.message });
    }
});



const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
