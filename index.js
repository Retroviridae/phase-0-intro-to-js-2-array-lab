// Write your solution here!
const cats = ["Milo","Otis","Garfield"]

let destructivelyAppendCat = (name) => {
   let newCats =cats.push(name)
   return newCats
}
// console.log(destructivelyAppendCat('Ralph'));
let destructivelyPrependCat = (name) => {
    let newCats2 =cats.unshift(name)
    return newCats2
 }