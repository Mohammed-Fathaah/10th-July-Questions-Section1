function greeting(name){
    function sayhello(){
        console.log("Hello"+name)
    }
    return sayhello;
}
const greetAmi=greeting("Ami");
greetAmi();