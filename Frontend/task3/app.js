const axios   = require("axios");
const express = require("express");
const app     = express();


app.get("/" , (req,res) =>{
    axios({
        "method":"GET",
        "url":"https://corona-virus-world-and-india-data.p.rapidapi.com/api",
        "headers":{
        "content-type":"application/octet-stream",
        "x-rapidapi-host":"corona-virus-world-and-india-data.p.rapidapi.com",
        "x-rapidapi-key":"05c13b3577mshd65693fb4cc2552p11175bjsn747d5d7b6835",
        "useQueryString":true
        }
        })
        .then((response)=>{
            var str = JSON.stringify(response.data, null, 4);
            var data = JSON.parse(str);
            res.render("display.ejs", {data: data});
        })
        .catch((error)=>{
          console.log(error)
        })
})



app.listen(process.env.PORT||3000, process.env.IP, function(){
  console.log("Server Has Started");
});
