const express = require("express")
const {Teacher} = require("../models")

const app = express()

app.get('/teacher', async (req,res)=>{
    const teacher = await Teacher.find({})
    try {
        res.send(teacher)
    } catch {
        console.log(err)
        res.status(500).send(err)
    }
})

app.get('/teacher/:id', async (req,res)=>{
    const teacher = await Teacher.findById(req.params.id)
    try {
        res.send(teacher)
    } catch {
        console.log(err)
        res.status(500).send(err)
    }
})

app.post('/teacher', async (req,res)=> {
    const teacher = await Teacher.create(req.body)
    try {
        res.send(teacher)
    } catch {
        console.log(err)
        res.status(500).send(err)
    }
})

app.delete('/teacher/:id', async (req,res)=> {
    let id = req.params.id
    const deletedTeacher = await Teacher.deleteOne({_id:id})
    try {
        res.send(deletedTeacher)
    } catch {
        console.log(err)
        res.status(500).send(err)
    }
})

app.put('/teacher/:id', async (req,res)=> {
    let id = req.params.id
    const updatedTeacher = await Teacher.updateOne({_id:id},{$set:(req.body)})
    try {
        res.send(updatedTeacher)
    } catch {
        console.log(err)
        res.status(500).send(err)
    }
})

module.exports = app