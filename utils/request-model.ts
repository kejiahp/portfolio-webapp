import mongoose, { Schema } from "mongoose"
import { RequestCv } from "../src/utils/types-util"

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

let RequestCvModel
if(mongoose.models.RequestForm){
    RequestCvModel = mongoose.model("RequestForm")
}
else{
    RequestCvModel = mongoose.model("RequestForm", RequestCvSchema)
}

export default RequestCvModel