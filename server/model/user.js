//schema is to check the validations of the information which user enters
import mongoose from 'mongoose';

const userSchema = mongoose.Schema({

    name:{
        type: 'string',
        required: true,
    },
    username:{
        type: 'string',
        required: true,
        unique: true
    },
     password:{
        type: 'string',
        required: true
     }
})

const user= mongoose.model('user',userSchema);

export default user;