import { NextApiRequest, NextApiResponse } from "next";
import { connect } from "../../utils/db-connect";
import ContactFormModel from "../../utils/contact-model";
import { mailTransporter } from "../../utils/mailer-setup";

export default async function contactFormSubmit (req:NextApiRequest, res:NextApiResponse) {
    if(req.method === "POST") {
        const { name, email, message } = req.body

        if (!name || !email || !message) {
            return res.status(400).json({error: "Bad Request"})
        }
        try{
            await connect()
            const contact = await ContactFormModel.create({name, message, email})
            const result = contact.toJSON()

            const mailOptions = {
                from: process.env.EMAIL,
                to: process.env.EMAIL
            }

            const EMAILHTML = `<!DOCTYPE html><html lang=en><meta charset=UTF-8><meta content="IE=edge"http-equiv=X-UA-Compatible><meta content="width=device-width,initial-scale=1"name=viewport><title>Document</title><h5>Name: ${name}</h5><h5>Email: ${email}</h5><h5>Message: ${message}</h5>`

            await mailTransporter.sendMail({
                ...mailOptions,
                subject: `${name} contacted you`,
                text: `Hi, im ${name}, lets be friends`,
                html: EMAILHTML
            })


            return res.status(200).send(result)
        }catch(e:any){
            if(e?.message){
                return res.status(500).json({error: e.message})
            }else{
                return res.status(500).send(e)
            }
        }
    }else{
        return res.status(405).send("Request type is not allowed.")
    }
}