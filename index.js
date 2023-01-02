const express = require("express");
const fs = require("fs");
const app = express();
app.use(express.static("public"));
app.get("/page", (req, res) => {
  file = fs.readFileSync("./names.html", "utf-8");
  file = file.replace("{name}", req.query.name);
  file = file.replace("{head}",req.query.theme);
  // console.log(req.query)
  file = file.replace("'tc'",'#'+req.query.text);
  file = file.replace("'bg'",'#'+req.query.bg);
  if (req.query.theme == "love")
    file = file.replace("{theme}", "'I ❤️ You', '💕', '💓', '🧸','🍫','🌹'");
  else if (req.query.theme == "birthday")
    file = file.replace("{theme}","'Happy BirthDay', '🎂', '🍰','🍥','🍬','🍫','🍔'");
  else if (req.query.theme == "sorry")
    file = file.replace("{theme}", "'Sorry', '🙃', '🥺','😭','😓','😥'");
  else file = "please select a theme";
  res.send(file);
});
app.listen(process.env.PORT || 80, () => console.log("running"));
