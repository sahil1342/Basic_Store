// const s2 = document.getElementsByTagName('section');
// const secondSection = s2[1];
// const title = document.getElementsByTagName('h4');
// title[0].innerText="js callback"

// const title = document.getElementsByTagName('section')[1].getElementsByTagName('h4')
// title[0].innerText="js callback"

// const ab =document.querySelector("section:last-of-type>h4");
// // ab.style.color ='blue';
// ab.className="cs1";

// const p = document.createElement("p");
// p.innerText="new line from dom";
// p.innerText="new animesh";
// const sec = document.getElementsByTagName('section')[0];
// sec.appendChild(p);
// sec.append("helllo world");
// sec.appendChild("new world");\

// function print(){
//     console.log("hello"+' '+"partytime");
// }

// function inputClicked(){
//      console.log("Hello.....!");
// }

// function inputKeydown(e){
//     console.log("inputKeydown");
//     console.log(e.target.value);
// }
// function inputChanged(e){
//     console.log("inputChanged");
//     console.log(e.target.value);
// }

// const handleSubmit = (e) => {
//   e.preventDefault();
//   const arr = e.target;
//   const name = arr[0].value;
//   const email = arr[1].value;
//   const form = document.getElementsByTagName("form")[0];
//   form.style.display = "none";

//   renderCard(name,email);
// }

// const renderCard = (n, e) => {
//   const root = document.getElementById("root");
//   root.setAttribute('class','card');
//   root.innerHTML = `
//   <h3 class="name">Name is: ${n}</h3>
//   <h4 class="email">Email is:${e}</h4>
//         `;
// }


// const showResult = (res)=>{

//   console.log(res);
//   const root = document.getElementById
//   root.innerText = res;
// }

// const sum = (a,b)=>{
//   const res = a+b;
//   showResult(res);
// }
// const mul = (a,b)=>{
//   const res = a*b;
//   showResult(res);
// }

const arr=["fruits","apple","Mamgo"];
const printValues = (a,b,c) =>{
  console.log('value is : ',a);
  console.log('value is : ',b);
  console.log('value is : ',c);
}
for(let i=0 ; i<arr.length; i++){
  printValues(arr[i],i,arr);
}