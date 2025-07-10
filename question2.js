function createcounter(){
    let count=0;
    return function(){
        count++;
        console.log("Function called"+count+"items");
    };
}
const counter=createcounter();
counter();
counter();
counter();