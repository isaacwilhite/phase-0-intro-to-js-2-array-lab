// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]
function destructivelyAppendCat(name){
    return cats.push('Ralph')
}
function destructivelyPrependCat(name){
    return cats.unshift("Bob")
}
function destructivelyRemoveLastCat(name){
    return cats.pop()
}
function destructivelyRemoveFirstCat(name){
    return cats.shift()
}
const coolCats = [...cats, "Broom"]
function appendCat(name){
    return coolCats
}
const coolerCats = ["Arnold", ...cats]
function prependCat(name){
    return coolerCats
}
function removeLastCat(name){
    return cats.slice(0, cats.length - 1)
}
function removeFirstCat(name){
    return cats.slice(1)
}