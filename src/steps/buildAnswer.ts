export function buildAnswer (response: any) {
    return response.map((beneficio: any) => {
      return `El beneficio ${beneficio.id} es "${beneficio.benefit}" con detalles "${beneficio.details}" y expira el ${beneficio.expirationDate}`
    }).join('\n')
}