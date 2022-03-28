const express = require("express")
const connect = require("./config/db")
const {register,login} = require("./controller/auth")
const todocontroller = require("./controller/todo.cont")
const app = express()
app.use(express.json())

app.post("/register",register)
app.post("/login",login)

app.use("/todos",todocontroller)


app.listen(5000,async()=>
{
  await connect()
    console.log("5000")
})