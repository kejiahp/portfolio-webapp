import { NextApiRequest, NextApiResponse } from "next"
import { connect } from "../../utils/db-connect"
import { RequestCvModel } from "../../utils/db-schemas"

export default async function requestCvSubmit(req:NextApiRequest, res:NextApiResponse) {
    if(req.method === "POST") {  
        const { email, reason } = req.body
        try{
            await connect()
            const requst = await RequestCvModel.create({ email , reason})
            const result = requst.toJSON()
            res.status(201).send(result)
        }catch(e){
            res.status(500).send(e)
        }
    }else{
        res.status(405).send("Request type is not allowed.")
    }
} 