const express = require("express");
const app = express();
const port = 3000;
const data=require('./data/categories.json')
const cors= require('cors')

app.use(cors())

app.get("/", (req, res) => {
    // console.log("yhi", data);
  res.send("hello world");
});



app.get('/categories',(req,res)=>{
    res.send(data)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
