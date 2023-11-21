const express = require("express");
const cors = require("cors")
const mongoose = require("mongoose");
const app = express();


app.use(cors());
app.use(express.json());
mongoose.connect("mongodb+srv://gideon:abcdefga@cluster0.kqrxph1.mongodb.net/userDB");

app.use("/", require("./router/users"))

const userRouter = require("./router/users")
app.use("/users", userRouter)


app.listen(7000, function() {
    console.log("express server is runing in port 7000")
})



