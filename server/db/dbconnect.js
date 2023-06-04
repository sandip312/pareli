const mongoose = require('mongoose');
const dbConnect = async() => {
    try{
        const res = await mongoose.connect('mongodb://127.0.0.1:27017/pareleDb',{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        if(res){
            console.log("connected to mongodb")
        }
    }catch(err){
        console.log('MongoDB connection error:', err)
        process.exit(1);
    }
}


module.exports = dbConnect

