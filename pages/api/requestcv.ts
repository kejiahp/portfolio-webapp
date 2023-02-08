import { NextApiRequest, NextApiResponse } from "next"
import { connect } from "../../utils/db-connect"
import RequestCvModel from "../../utils/request-model"

export default async function requestCvSubmit(req:NextApiRequest, res:NextApiResponse) {
    if(req.method === "POST") {  
        const { email, reason } = req.body
        try{
            await connect()
            const request = await RequestCvModel.create({ email , reason})
            const result = request.toJSON()
            res.status(201).send(result)
        }catch(e){
            res.status(500).send(e)
        }
    }else{
        res.status(405).send("Request type is not allowed.")
    }
} 