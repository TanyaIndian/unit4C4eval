const express = require("express")

const Todo = require("../model/todo.model")
const authenticate = require("../middleware/authenticate")
const router = express.Router()

router.post("/",authenticate,async(req,res)=>
{
try{
    const todo = await Todo.create(req.body)
    return res.status(201).send(todo)
}
catch(err)
{
    return res.status(401).send(err.message)
}
})


router.get("/",authenticate,async(req,res)=>
{
try{
    const todo = await Todo.find().lean().exec()
    return res.status(201).send(todo)
}
catch(err)
{
    return res.status(401).send(err.message)
}
})
router.get("/:id",authenticate,async(req,res)=>
{
try{
    const todo = await Todo.findById(req.params.id)
    return res.status(201).send(todo)
}
catch(err)
{
    return res.status(401).send(err.message)
}
})

router.patch("/:id",authenticate,async(req,res)=>
{
try{
    const todo = await Todo.findByIdAndUpdate(reqparams.id,req.body,{new:true}).lean().exec()
    return res.status(201).send(todo)
}
catch(err)
{
    return res.status(401).send(err.message)
}
})

router.delete("/:id",authenticate,async(req,res)=>
{
try{
    const todo = await Todo.findByIdAndDelete(req.params.id)
    return res.status(201).send(todo)
}
catch(err)
{
    return res.status(401).send(err.message)
}
})

module.exports = router