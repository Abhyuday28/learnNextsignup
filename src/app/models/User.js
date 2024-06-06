import mongoose from 'mongoose'


const UserSchema = mongoose.Schema({
    name:{
        type:String,
        trim:true,
        required:[true,'Name is required'],
        lowercase:true
    },
    roll: {
        type:Number,
        min: 10000,
        max: 30000,
        trim:true,
        required:[true,'Roll Number is required']
    },
    branch:{
        type:String,
        trim:true,
        required:[true,'Branch is required'],
    },
    year: {
        type:Number,
        min: 0,
        max: 30,
        trim:true,
        required:[true,'Admission Year is required']
    },
    isLE: {
        type:Boolean,
        default: false
    },
    email: {
        type:String,
        trim:true,
        required:[true,'Email is required'],
        lowercase:true,
        unique:true,
    },
    password: {
        type:String,
        trim:true,
        required:[true,'Password is required']
    }
})

UserSchema.index({ roll: 1, year: 1 }, { unique: true });


const User = mongoose.models.user || mongoose.model('user',UserSchema);

export {User};