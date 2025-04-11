import { testCases } from "./mockData/testCases.js"
import { buildAnswer } from "./steps/buildAnswer.js"
import { getBenefits } from "./steps/getBenefits.js"
import { validateObject } from "./steps/getData.js"
import { ProcessUserResponse } from "./steps/ProcessUserResponse.js"

type TestCaseKey = 'testCase1' | 'testCase2'
const selectedCaseKey = (process.argv[2] as TestCaseKey) || 'testCase1'
const data = testCases[selectedCaseKey]

console.log('Caso de prueba seleccionado:', selectedCaseKey)

let dataForRequest: any = {}

//Usuario inicia el chat preguntando algo
console.log(`colaborador: ${data.firstAnswer}`)

//Se analiza el mensaje del usuario para encontrar información con respecto a que beneficios tiene
ProcessUserResponse(data.firstAnswer, dataForRequest)

//Se valida la información necesaria para realizar la petición para obtener beneficios
//En caso de faltar información se pregunta por la informacion faltante
validateObject(dataForRequest, data)

//Una vez se tiene la información necesaria se realiza la request para obtener los beneficios
const response = await getBenefits(dataForRequest)

//Con la respuesta del endpoint se pasa la respuesta a lenguaje natural
const chatbotAnswer = buildAnswer(response)

//Se da la respuesta
console.log(`chatbot: ${chatbotAnswer}`)

