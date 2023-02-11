import { NextApiRequest, NextApiResponse } from "next"
import { connect } from "../../utils/db-connect"
import { mailTransporter } from "../../utils/mailer-setup"
import RequestCvModel from "../../utils/request-model"

export default async function requestCvSubmit(req:NextApiRequest, res:NextApiResponse) {
    if(req.method === "POST") {  
        const { email, reason } = req.body

        if(!email) {
            return res.status(400).json({error: "Bad Request"})
        }

        try{
            await connect()
            const request = await RequestCvModel.create({ email , reason})
            const result = request.toJSON()

            const mailOptions = {
                from: process.env.EMAIL,
                to: result.email
            }

            const LINK_TO_CV = process.env.LINK_TO_CV

            const EMAILHTML = `<!DOCTYPE html><html lang=en><meta charset=UTF-8><meta content="IE=edge"http-equiv=X-UA-Compatible><meta content="width=device-width,initial-scale=1"name=viewport><title>Get Morenikeji's CV</title><body style="flex-direction:column;align-items:center;justify-content:center;padding:10px 20px;background-color:#151515;text-align:center;font-family:Verdana,sans-serif"><header><h1 style="color:#4ee1a0;text-decoration:underline;margin:20px 0">Your Request Was Successful🥳🙌</h1><p style="margin:20px 0;color:#fff;font-size:18px">Let's Go<div style=position:relative;height:200px;display:flex;justify-content:center><img alt=""src=https://i.pinimg.com/originals/30/bf/39/30bf396b160226edbf99fd8699dc5fcd.gif style=object-fit:cover;width:100%;height:100%;border-radius:10px></div></header><main style="display:flex;margin:30px 0;flex-direction:column;align-items:center"><p style="margin:20px 0;color:#fff">Here's a link to my cv stored on a google drive, the chances of it being outdated are pretty high😉:<p style="margin:40px 0;color:#fff"><a href="${LINK_TO_CV}" style="padding:10px 20px;color:#fff;background-color:#4ee1a0;font-weight:700;border-radius:10px;text-decoration:none;transition:all .3s"target=_blank>Click To View CV</a></main><footer><p style=color:#fff>Thanks For Your Interest</footer>`

            await mailTransporter.sendMail({
                ...mailOptions,
                subject: "REQUEST FOR CV",
                text: "Here a link to the cv you request for😊",
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
        res.status(405).send("Request type is not allowed.")
    }
} 