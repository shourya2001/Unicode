
function descending(list){
    var array =[];
    list.forEach(student => {
        // separating the strings
        var info =student.split(" "),
        // converting string to number
            maths_marks = parseInt(info[2]),
            english_marks = parseInt(info[3]);
        // calculating average marks
        var average = (maths_marks + english_marks)/2
        var scores = {};
        Object = {
            "Name": info[0] + " " + info[1],
            "scores":{
                "maths":maths_marks,
                "english":english_marks
            },
            "average":average
        }
        
        array.push(Object);
    });
    // sorting in descending order
    array.sort(function(a,b){
        return b.average - a.average;
    });
    array.forEach(function (user) {
        delete user.average;
    })
    var str = JSON.stringify(array, null, 4);
    console.log(str);
}

var students = [ "Rashmil Panchani 99 97", "Parag Vaid 95 93" , "Siddharth Sanghavi 98 100" ]

descending(students);

