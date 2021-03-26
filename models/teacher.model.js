const mongoose = require('mongoose')

const TeacherSchema = new mongoose.Schema({
    Nama: {
        type: String,
        require: true,
    },
    Email: String,
    MataPelajaran: String,
    JumlahSKS: Number
})

const Teacher = mongoose.model("teacher", TeacherSchema)
module.exports = Teacher