0// function x(y){
    // console.log("23");

// }
// x("write");
// const c=x("school");
// const ab=function (a){
//     console.log("hello",a);

// }
// ab("ad");


// function sum(a,b){
//     if (a===undefined){
//         console.log(0);
//     }
//     else if (b!==undefined){
//         console.log(a+b);
//     }
//     else {
//         console.log(a);
//     }
// 
// sum(3);
// console.log(19);








// function sum(x=0,y=0){
//     console.log(x+y);
// }
// sum(90,20);

let obj = {
    name:"sahil",
    son:true,
    "sex":"male",
    class:"k21ka",
    30:40,
}

console.log(obj[30]);
console.log(obj);
console.log(obj["class"]);
console.log(obj.class);


for(let i in obj){
    console.log(obj[i]);
}

