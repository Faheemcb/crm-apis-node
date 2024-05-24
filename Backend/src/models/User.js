import mongoose, { Schema } from "mongoose";

const userschema = new Schema(
    {
        firstName: {
            type: String,
            required: true,
            trim: true
        },
        lastName: {
            type: String,
            trim: true

        },
        email: {
            type: String,
            required: true,
            trim: true,
            unique: true
        },
        phoneNo: {
            type: String,
            trim: true,
            unique: true


        },
        dob: {
            type: String,
            trim: true

        },
        userName: {
            type: String,
            required: true,
            trim: true
        },
        password: {
            type: String,
            required: true,
            trim: true
        },
        gender: {
            type: String,
            enum:[
                'MALE',
                'FEMALE',
                'OTHER'
            ],
            default : 'MALE'
        },

        role: {
            type: String,
            required: true,
            trim: true
        },
        subscriberId : {
            type : Schema.Types.ObjectId,
            ref : 'Subscriber'
        }



    },{versionKey : false}
)

const collectionName = "User"
const user = mongoose.model("User", userschema, collectionName)

export default user;