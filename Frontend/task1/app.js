var express = require("express"),
    app     = express();
// var flash     = require("connect-flash");

app.set("view engine", "ejs");
app.use(express.static(__dirname + '/public'));

// app.use(function(req, res, next){
//     res.locals.error = req.flash("error")
//     res.locals.success = req.flash("success")
//     next();
// });

app.get("/", (req,res) =>{
    res.render("home")
})
app.get("/aboutMe", (req,res) =>{
    res.render("aboutMe")
})
app.get("/skills", (req,res) =>{
    res.render("skills")
})
app.get("/gallery", (req,res) =>{
    res.render("gallery")
})
app.get("/contactMe", (req,res) =>{
    res.render("contact")
})

app.listen(process.env.PORT || 3000, process.env.IP, function(){
    console.log("The Server has started");
});
    