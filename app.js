
const bodyParser = require('body-parser')
const express =require('express')
const app =express()

 app.use(bodyParser.json())
  



let Users =[]


app.get("/users",function(req,res) {
    
    res.json({Users:Users ,mg:"deon"})
})

app.post("/users",function(req,res) {
    Users.push(req.body)
    res.json({masseg:"donnnn"})
})

app.put("/users", async function(req,res) {
    let {name,emil}= req.body
    await  Users.find((use,index)=>{
if (use.name===name) {
    Users[index]={name:use.name,emil:emil,pohe:use.pohe}
}
res.json({masseg:"donnnn"})
    }) 
    
   
})

// app.delete("/delete",function(req,res) {
//     res.send("ibrahim delete")
// })

app.listen(8000,() =>{
    console.log("hi ibraim")
})