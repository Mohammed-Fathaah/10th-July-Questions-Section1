function outer(){
    let x=5;
    return function inner(){
        console.log(x);
    }
}
const fn=outer();
fn();

//Output will be 5
//Because of closures
//the inner function remembers the environment in which it was created.
//even though outer() has finished executing,the variable x is preserved in the closure,because inner() still references it.