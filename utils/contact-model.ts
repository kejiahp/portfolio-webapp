import mongoose, { Schema } from "mongoose";
import { ContactFormInput } from "../src/utils/types-util";

export interface ContactFormDocument extends mongoose.Document,ContactFormInput{
    createdAt: Date
    updatedAt: Date
}

const ContactFormSchema = new Schema<ContactFormDocument>({
    name: {
        type: String,
        required: [true, "name is required"]
    },
    email: {
        type: String,
        required: [true, "email is required"]
    },
    message: {
        type: String,
        required: [true, "message is required"]
    }
},{timestamps: true})

let ContactFormModel:mongoose.Model<ContactFormDocument>
if(mongoose.models.ContactForm){
    ContactFormModel = mongoose.model("ContactForm")
}
else{
    ContactFormModel = mongoose.model("ContactForm", ContactFormSchema)
}


export default ContactFormModel