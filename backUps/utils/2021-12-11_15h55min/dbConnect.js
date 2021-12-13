import mongoose from 'mongoose'; 

async function dbConnect(){

 mongoose.connect(
        process.env.MONGO_URL,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }
    ).then(()=> console.log('mongoDB connected')).catch(err=> console.log(err)); 


}

export default dbConnect; 