import mongoose, { Schema } from "mongoose";
import { ContactFormInput, RequestCv } from "../src/utils/types-util";

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


export const ContactFormModel = mongoose.model("ContactForm", ContactFormSchema)


export interface RequestCvDocument extends mongoose.Document, RequestCv{
    createdAt: Date
    updatedAt: Date
}


const RequestCvSchema = new Schema<RequestCvDocument>({
    email: {
        type: String,
        required: [true, "email is required"]
    },
    reason: {
        type: String,
        required: false
    }
}, {timestamps: true})

export const RequestCvModel = mongoose.model("RequestCv", RequestCvSchema)