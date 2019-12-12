const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("greetings from openshift");
});

app.get("*", (req, res) => {
    res.send("nodejs-ocp-demo - generic route");
});

app.listen(3000, () => {
    console.log("server listening on port 3000");
});