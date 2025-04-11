import { ProcessUserResponse } from "./ProcessUserResponse.js"

function askForMissingData (obj: any, data: any) {
  if (!Array.isArray(obj.types) || obj.types.length === 0) {
    console.log('chatbot: ¿Que beneficios quieres conocer?')
    console.log(`colaborador: ${data.typeAnswer}`)
    ProcessUserResponse(data.typeAnswer, obj)
  }
  
  if (obj.identifier === undefined) {
    console.log('chatbot: ¿Cual es tu rut?')
    console.log(`colaborador: ${data.identifierAnswer}`)
    ProcessUserResponse(data.identifierAnswer, obj)
  }
  
  return obj
}

export function validateObject (obj: any, data: any) {
  if (Array.isArray(obj.types) && obj.types.length > 0 && obj.identifier !== undefined) {
    return obj
  }
  const updatedObj = askForMissingData(obj, data)
  return validateObject(updatedObj, data)
}
