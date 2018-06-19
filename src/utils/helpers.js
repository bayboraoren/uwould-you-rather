export function toMap(object){
    return Object.keys(object).map(index => object[index])
}

export function getObjectLength(object){
    return Object.keys(object).length
}
