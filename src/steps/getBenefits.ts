import axios from "axios"
import dotenv from "dotenv"

dotenv.config()
const baseURL = process.env.BENEFITS_API_URL

export async function getBenefits(params:any) {
    try {
        const response = await axios.get(`${baseURL}/benefits/collaborator/${params.identifier}?benefitType=${params.types.join(',')}`)
        return response.data
    }
    catch(error) {
        console.log(error)
        return {
            status: 'error'
        }
    }
}