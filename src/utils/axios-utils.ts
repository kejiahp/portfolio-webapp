import axios, {AxiosError} from "axios";
import { ContactFormInput, RequestCv } from "./types-util";

//CONTACT FORM
export const submitContactForm = (data:ContactFormInput) => {
    try{
        const res = axios.post("/api/contact-form", data)
        return res
    }catch(e:any){
        throw new AxiosError(e)
    }
}

//REQUEST CV
export const submitRequestForm = (data:RequestCv) => {
    try{
        const res = axios.post("/api/requestcv", data)
        return res
    }catch(e:any){
        throw new AxiosError(e)
    }
}