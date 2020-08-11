const axios   = require("axios");
const express = require("express");
const app     = express();

app.get("/jokes/:category", function(req,res){

  const getJokes = async () =>{
    return await axios({
      url:'https://sv443.net/jokeapi/v2/joke/' + req.params.category 
    })
  }
  
  (async() => {
    const jokes = await getJokes();
    var str = JSON.stringify(jokes.data, null, 4);
    // console.log("category: " + jokes.data.category +"\n joke: " + jokes.data.joke + "\n id: " + jokes.data.id);
    console.log(str)
    res.send(str);
  })()

})

app.listen(process.env.PORT||3000, process.env.IP, function(){
  console.log("Server Has Started");
});
