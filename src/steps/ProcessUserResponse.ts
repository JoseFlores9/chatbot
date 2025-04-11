export function ProcessUserResponse(answer: string, obj: any) {
    const normalizedAnswer = answer.replace(/[¿?]/g, "").trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    let types = []
    if (normalizedAnswer.includes('banco')) types.push('bank')
    else if (normalizedAnswer.includes('telecomunicaciones')) types.push('telco')
    else if (normalizedAnswer.includes('caja de compensacion')) types.push('socialBenefits')
  
    if (types.length > 0 && !obj.types) {
      obj['types'] = types
    }
    
    const rutRegex = /\b\d{7,8}-[0-9kK]\b/
    const result = normalizedAnswer.match(rutRegex)
    const rut = result ? result[0] : ""
    if (rut !== '' && !obj.identifier) {
      obj['identifier'] = rut.replace('-', '')
    }
    
    return obj
  }
  