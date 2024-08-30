
import mongoose from 'mongoose';



export const Connection =async(username,password) =>{
    const URL =`mongodb://${username}:${password}@ac-3wvjypb-shard-00-00.efan7ae.mongodb.net:27017,ac-3wvjypb-shard-00-01.efan7ae.mongodb.net:27017,ac-3wvjypb-shard-00-02.efan7ae.mongodb.net:27017/?ssl=true&replicaSet=atlas-tuwd2c-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0`;

try{
        await mongoose.connect(URL);// Use this option to avoid deprecation warnings

        console.log('Database connection established');
    }catch(error){
        console.log('error while connecting to the database',error)

    }
}
export default Connection;


//we can't directly connect database through express we need to use libraries