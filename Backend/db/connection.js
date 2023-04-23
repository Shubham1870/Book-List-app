const mongoose = require("mongoose")

const Connection = () => {
    mongoose.connect(`mongodb+srv://aman:aman@cluster0.gwtpov4.mongodb.net/moviedb?retryWrites=true&w=majority`, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(res => {
        console.log("database connected")
    }).catch((err) => {
        console.log(err)
    })
}
module.exports = Connection