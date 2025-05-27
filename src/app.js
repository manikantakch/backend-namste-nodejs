
const express = require('express');


const server = express();



server.use("/test",(req,res) => {
    res.send("test page")
});

server.use("/learn",(req,res) => {
    res.send("learn page")
});

server.use("/library",(req,res) => {
    res.send("library page")
});

server.use("/practice",(req,res) => {
    res.send("practice page");
});

server.use("/shedule",(req,res) => {
    res.send("practice page");
});

server.use("/",(req,res) => {
    res.send("Intial page")
});

server.listen(8000,() => {
    console.log("connected server")
})