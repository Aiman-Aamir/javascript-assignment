//js  assignmnet 2:
//Q1.
// let num1 = +prompt("enter no 1");
// let num2 = +prompt("enter no 2");

// function parent_function(num1){
//     return function child_functon(num2){
//         console.log(num1 + num2);
        
//     }
// }

// let function_1 = parent_function(num1);
// let function_2 = function_1(num2);

//Q2.
// let arr = [56,78,43,21,2,45,78];

// let no_to_search = 10;

// let i = 0;

// function recursion(array){
//     if (no_to_search === array[i]){
//        console.log("true");
//     }
//     else if(i < array.length-1){ 
//         i = i+1; //i =1;
//         recursion(array);
//     }
//     else {
//        console.log("false");
//     }
// }
// recursion(arr);


//Q3.

// let input_text = prompt("enter the  new content:")
// let para = document.createElement("p");
// let parent = document.getElementsByTagName("html")[0];
// console.log(parent);
// function para_work(string) {
//     para.innerHTML = string;
//     parent.appendChild(para);
//     parent.insertAdjacentElement("afterbegin", para);
// }
// para_work(input_text)

//Q4...

// localStorage.clear()

// let object_1 = {
//     name:"Aiman",
//     age: 20,
//     phone_no:"0343385678",
//     height:"5'3",
//     cnic: "433678901234",
//     eng_marks:78,
//     urdu_marks:45,
//     maths_marks:78
// }


// let object_2 = {
//     name:"Aliza",
//     age: 17,
//     phone_no:"96789453",
//     height:"4'8",
//     cnic: "8058543456-9",
//     eng_marks:45,
//     urdu_marks:67,
//     maths_marks:63
// }


// let object_3 = {
//     name:"Ramsha",
//     age: 21,
//     phone_no:"567890432",
//     height:"5'7",
//     cnic: "8353468975",
//     eng_marks:74,
//     urdu_marks:50,
//     maths_marks:90
// }

// function object_saving(key , value){
//     let new_object = JSON.stringify(value);
//     localStorage.setItem(key, new_object);
// }


// object_saving("data of Aiman" , object_1);
// object_saving("data of Aliza", object_2 );
// object_saving("data of Ramsha", object_3 );
// object_saving("data of Aiman" , object_1);
// object_saving("data of Aliza", object_2 );
// object_saving("data of Ramsha", object_3 );

// Q5
// function changeColor(element, color) {
//     element.style.backgroundColor = color;
//   }
  