const express = require("express");
const app = express();

app.get("/", (req, res) => {
 res.send("Hello dari CI/CD 123 🚀");
});

app.listen(3000, () => {
 console.log("Running on port 3000");
});

