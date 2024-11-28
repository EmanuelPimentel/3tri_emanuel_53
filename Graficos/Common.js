const getCSS = (variavel) => {
    const bodyStyles = getComputedStyle(document.body)
    return bodyStyles.getPropertyValue(variavel)
}
const tickConfig = {
    family: getCSS('--font'),
    size: 16,
    color: getCSS('--primary-color')
       
}
/*Exportar para que outros módulos possam utilizar*/
export {getCSS, tickConfig}