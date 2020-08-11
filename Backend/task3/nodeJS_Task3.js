var express    = require("express"),
    app        = express(),
    bodyParser = require("body-parser");

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended:true}))

var students = []

app.get("/", function(req,res){
    res.render("form");
})

app.post("/info", function(req,res){
    students.push(req.body.student);
    res.redirect('/info');
})

app.get("/info", function(req,res){
    students.forEach(function(student){
        var maths_marks = parseInt(student.mathsMarks);
        var english_marks = parseInt(student.englishMarks);
        var avg = (maths_marks + english_marks)/2
        student.avg = avg
    })
    students.sort((a,b) =>{
        return b.avg - a.avg
    })

    res.render("display", {students:students});
})



app.listen(process.env.PORT || 3000, process.env.IP, function(){
    console.log("The Server has started");
});