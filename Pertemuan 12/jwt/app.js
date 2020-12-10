const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();

app.get("/api", (req,res) => {
    res.json({
        message: "akses API",
    });
});

app.post("/api/posts", verifyToken, (req,res) => {
    jwt.verify(req.token, "rahasia", (err, authData) => {
        if (err) {
            res.sendStatus(403);
        } else {
            res.json({
                message: "post dibuat",
                authData,
            });
        }
    });
});

function verifyToken(req,res,next) {
    //get header
    const bearerHeader = req.headers["authorization"];
    if (typeof bearerHeader !== "undefined") {
        const bearer = bearerHeader.split(" ");

        const bearerToken = bearer[1];

        req.token = bearerToken;

        next();
    } else {
        res.sendStatus(403);
    }
}

app.post("/api/login", (req,res) => {
    //user data
    const user = {
        id: 1,
        username: "flo",
        email:"flo@tina.com",
    };
    jwt.sign({ user: user }, "rahasia", (err, token) => {
        res.json({
            token,
        });
    });
});

app.listen(3000, () => console.log(`server berjalan pada port 3000`));