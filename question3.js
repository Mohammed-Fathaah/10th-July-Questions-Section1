function counter(){
    let count=0;
    function increment(){
        count++;
        return count;
    }
    function decrement(){
        count--;
        return count;
    }
    return{
        increment,decrement
    } 
}
const mycounter=counter();

console.log(mycounter.increment());
console.log(mycounter.increment());
console.log(mycounter.decrement());