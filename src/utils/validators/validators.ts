export const required = (value:string) => {
    if (value) {
        return undefined
    }
    return 'error message'
}

export const maxLengthCreator = (maxLength:number) => (value:string) => {
    if (value.length > maxLength) {
        return `Max length is ${maxLength} symbols`
    }
    return undefined
}