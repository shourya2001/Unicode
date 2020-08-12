var express    = require("express"),
    app        = express(),
    bodyParser = require("body-parser");
    mongoose   = require("mongoose")

    mongoose.connect("mongodb://localhost/Unicode",{
        useUnifiedTopology: true, 
        useNewUrlParser: true, 
        useCreateIndex: true 
    });

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended:true}));

var studentSchema = new mongoose.Schema({
    first_name:String,
    last_name:String,
    Name:String,
    maths_marks:Number,
    english_marks:Number,
    average: Number
});

var student = mongoose.model("student", studentSchema);

app.get("/", function(req,res){
    res.render("form");
})

app.post("/info", function(req,res){
    var newStudent = {
        first_name:req.body.student.firstName,
        last_name:req.body.student.lastName,
        Name:req.body.student.firstName + " " + req.body.student.lastName,
        maths_marks:req.body.student.mathsMarks,
        english_marks:req.body.student.englishMarks,
        average: (req.body.student.mathsMarks + req.body.student.englishMarks)/2
    };
    
    student.create(newStudent, function(err, newStudent){
        if(err){
            console.log(err);
        }else{
            res.redirect("/info")
        }
    })
})


app.get("/info", function(req,res){
    student.find({}).sort([["average", -1]]).exec(function(err, allStudents){
        if(err){
            console.log(err);
        }else{
            res.render("display", {students: allStudents});
        }
    })
})



app.listen(process.env.PORT || 3000, process.env.IP, function(){
    console.log("The Server has started");
});