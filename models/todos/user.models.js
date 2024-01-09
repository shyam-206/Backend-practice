//import the mongooose from the mongoose package
import mongoose from "mongoose";

//creating a userschema 
const userSchema = new mongoose.Schema(
    {
        //username  : String (general method)

        // more specific definig the username entities
        username : {
            type : String,
            required : true,
            unique : true,
            lowercase : true
        },
        email : {
            type : String,
            required : true,
            unique : true,
            lowercase : true
        },
        password : {
            type : String,
            //also pass the message with the true 
            // required : [true, "Password must be "]
            required : true

        }
    },{timestraps : true}
)

export const User = mongoose.model("User",userSchema)
