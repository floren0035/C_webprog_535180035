const port = process.env.PORT || 3001;

const express = require("express");

const expressLayouts = require("express-ejs-layouts");

const mongoose = require("mongoose");

const flash = require("connect-flash"); 

const session = require("express-session");

const pass = require("passport");
const user = require("./models/user");

const app = express();

//db config
const db = require("./config/keys").MongoURI;

//connect mongodb
mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log("mongoDB Terkoneksi..."))
.catch((err) => console.log(err));

//ejs
app.use(expressLayouts);
app.set("view engine", "ejs");

//body parser
app.use(express.urlencoded({ extended: false }));

//express session middleware
app.use(
    session({
        secret: "rahasia",
        resave: true,
        saveUninitialized: true,
    })
);

//Use flash
app.use(flash());

//Passport Config
require("./config/passport")(pass)

pass.serializeUser(function (user, done){
    done(null, user.id);
});

pass.deserializeUser(function (id, done){
    user.findById(id, function (err, user) {
        done(err, user);
    });
});

//Set global var
app.use((req,res,next)=>{
    res.locals.success_msg = req.flash("success_msg");
    res.locals.error_msg = req.flash("error_msg");
    res.locals.error = req.flash("error");
    next();
});

//Use PassportJS
app.use(pass.initialize());
app.use(pass.session());

app.use("/", require("./routes/index"));
app.use("/users", require("./routes/users"));

//Kickstart the app
app.listen(port,console.log(`Running on localhost:${port}`));