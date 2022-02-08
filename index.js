const express = require("express");
const fs = require('fs')
const app = express();

app.get('/',(req,res)=>{
    file = fs.readFileSync('./names.html','utf-8')
    file = file.replace('{name}',req.query.name)
    if(req.query.theme=='love')
    file = file.replace('{theme}',"'I ❤️ You', '💕', '💓', '🧸'")
    else if(req.query.theme=='birthday')
    file = file.replace('{theme}',"'Happy BirthDay', '🎂', '🍰','🍥','🍬','🍫'")
    else if(req.query.theme=='sorry')
    file = file.replace('{theme}',"'Sorry', '🙃', '🥺','😭','😓','😥'")
    else
    file = 'please select a theme'
    res.send(file)
})
app.listen(80, () => console.log("running"));