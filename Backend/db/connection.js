const mongoose = require("mongoose")

const Connection = () => {
    mongoose.connect(`mongodb+srv://shubh:buzoo@cluster0.xhzv45m.mongodb.net/book?retryWrites=true&w=majority`, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(res => {
        console.log("database connected")
    }).catch((err) => {
        console.log(err)
    })
}
module.exports = Connection