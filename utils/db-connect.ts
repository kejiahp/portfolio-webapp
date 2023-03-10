import mongoose from "mongoose"

mongoose.set('strictQuery', true);
export const connect = async () => {
    try{
        const uri = process.env.DB_URI as string
        await mongoose.connect(uri)

        console.log("connected to DB")
    }catch(e){
        console.log("could not connect to DB")
    }
}