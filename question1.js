function abcd(n){
    return function(s){
        return n+s;
    }
}
const add7=abcd(7)
const add8=abcd(8)
console.log(add7(3))
console.log(add8(3))
