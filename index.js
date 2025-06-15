// require('dotenv').config()
// console.log(process.env.MONGO_URL)
const mongoose = require("mongoose");
const express = require('express');
const app = express();

const { userRouter } = require("./routes/user");
const { courseRouter } = require("./routes/course");
const { adminRouter } = require("./routes/admin");

app.use(express.json());


app.use("/api/v1/user", userRouter);
app.use("/api/v1/admin", adminRouter);
app.use("/api/v1/course", courseRouter);

async function main() {
    await mongoose.connect("mongodb+srv://Manpreet:5911@cluster0.2qcfgv0.mongodb.net/App")
    app.listen(3000);
}

main()