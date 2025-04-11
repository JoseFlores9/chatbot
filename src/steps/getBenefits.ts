import axios from "axios";

export async function getBenefits(params:any) {
    try {
        const response = await axios.get(`http://localhost:3000/benefits/collaborator/${params.identifier}?benefitType=${params.types.join(',')}`)
        return response.data
    }
    catch(error) {
        console.log(error)
        return {
            status: 'error'
        }
    }
}