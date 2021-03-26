const express = require('express')
const app = express()
const cors = require('cors')
const {PORT, dbConfigMongo} = require('./config')
const teacherRouter = require('./routes/TeacherController')

const localPort =PORT || 3000
console.log('running on',localPort)
app.use(cors())
app.use(express.json())

app.get("/", (req,res)=> {
    res.send("hi,this is my database,please use postman to interact with it")
})

app.use(teacherRouter)



if (dbConfigMongo) {
    app.listen(PORT, ()=> {
        console.log("server running on port",PORT)
        console.log("connected to mongoDB")
    })
} else {
    console.log("not connect to mongo")
}