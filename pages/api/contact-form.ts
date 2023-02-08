import { NextApiRequest, NextApiResponse } from "next";
import { connect } from "../../utils/db-connect";
import ContactFormModel from "../../utils/contact-model";

export default async function contactFormSubmit (req:NextApiRequest, res:NextApiResponse) {
    if(req.method === "POST") {  
        const { name, email, message } = req.body
        try{
            await connect()
            const contact = await ContactFormModel.create({name, message, email})
            const result = contact.toJSON()
            res.status(201).send(result)
        }catch(e){
            res.status(500).send(e)
        }
    }else{
        res.status(405).send("Request type is not allowed.")
    }
}