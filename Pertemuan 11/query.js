const mongoose = require("mongoose");
mongoose.connect(
    "mongodb://127.0.0.1:27017/db-untar-cafe",
    { useNewUrlParser: true }
);

const db = mongoose.connection;

db.once("open", () => {
    console.log("Successfully connected to MOngoDB using Mongoose!");
});

const Member = require('./models/schema');

var myQuery = Member.findOne({
    name: "Starship Enterprise"
})
.where("email", /boldly/);
myQuery.exec((error, data) => {
    if (data) console.log(data.name);
})