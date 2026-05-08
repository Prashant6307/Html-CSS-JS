const input = document.querySelector('.user-input')
// selecting span inside each case
const lowerCase = document.querySelector('#lower-case span')
const upperCase = document.querySelector('#upper-case span')
const camelCase = document.querySelector('#camel-case span')
const pascalCase = document.querySelector('#pascal-case span')
const snakeCase = document.querySelector('#snake-case span')
const kebabCase = document.querySelector('#kebab-case span')
const trim = document.querySelector('#trim span')

function capitalizeString(str) {
    if(!str) return str
    return str[0].toUpperCase() + str.slice(1, str.length)
}

function toCamelCase(string) {
    const lowerString = string.toLowerCase()
    const strArray = lowerString.split(" ")
    const finalArray = strArray.map((word, i) => {
        if (i === 0) return word
        return capitalizeString(word)
    })
    return finalArray.join('')
}

function toPascalCase(string) {
    const lowerString = string.toLowerCase()
    const strArray = lowerString.split(" ")
    const finalArray = strArray.map((word, i) => {

        return capitalizeString(word)
    })
    return finalArray.join('')
}

function toSnakeCase(string) {
    const str = string.replaceAll(" ","_")
    return str
}

function toKebabCase(string) {
    const str = string.replaceAll(" ","-")
    return str
}

function toTrim(string) {
    
    return string.replaceAll(" ", "")
}

input.addEventListener('input', () => {
    
        lowerCase.innerText = input.value.trim().toLowerCase()
        upperCase.innerText = input.value.trim().toUpperCase()
        camelCase.innerText = toCamelCase(input.value.trim())
        pascalCase.innerText = toPascalCase(input.value.trim())
        snakeCase.innerText = toSnakeCase(input.value.trim())
        kebabCase.innerText = toKebabCase(input.value.trim())
        trim.innerText = toTrim(input.value.trim())
    
})
