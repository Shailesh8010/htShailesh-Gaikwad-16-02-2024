
// function abc(name, callback) {
//     setTimeout(() => {
//       callback("Hello, " + name);
//     }, 1000);
//   }
  
//   function xyz(greeting) {
//     console.log(greeting);
//   }
  
//   abc("Shailesh", xyz);



// function clbck_on_array(array, callback) {
//     for (let i = 0; i < array.length; i++) {
//       callback(array[i]);
//     }
//   }
  
//   const numbers = [1, 2, 3, 4, 5];
  
//   function Twice(number) {
//     console.log(number * 2);
//   }
  
//   clbck_on_array(numbers, Twice);
  



// //   nested call backs
// function asyncTask1(callback) {
//     setTimeout(() => {
//       console.log("Async task 1 completed");
//       callback();
//     }, 1000);
//   }
  
//   function asyncTask2(callback) {
//     setTimeout(() => {
//       console.log("Async task 2 completed");
//       callback();
//     }, 1000);
//   }
  
//   function asyncTask3(callback) {
//     setTimeout(() => {
//       console.log("Async task 3 completed");
//       callback();
//     }, 1000);
//   }
  

//   asyncTask1(() => {
//     asyncTask2(() => {
//       asyncTask3(() => {
//         console.log("All tasks completed");
//       });
//     });
//   });
  







//// Promises

// function doSomething() {
//     return new Promise((resolve, reject) => {
     
//       setTimeout(() => {
//         const success = false; 
//         if (success) {
//           resolve("Operation completed successfully!"); 
//         } else {
//           reject("Operation failed!"); 
//         }
//       }, 1000); 
//     });
//   }
  
  
//   console.log("Start of the script");
//   doSomething()
//     .then((result) => {
//       console.log(result); 
//     })
//     .catch((error) => {
//       console.log(error); 
//     });
//   console.log("End of the script");
  


// // we can chain the promises like below
// function function_1() {
//     return new Promise(resolve => {
//       setTimeout(() => {
//         resolve('Result for function_1');
//       }, 1000);
//     });
//   }
  
//   function function_2(data) {
//     return new Promise(resolve => {
//       setTimeout(() => {
//         resolve(`${data}, Result for function_2`);
//       }, 1500);
//     });
//   }
  
//   function_1()
//     .then(result => function_2(result))
//     .then(finalResult => {
//       console.log(finalResult);
//     })
//     .catch(error => {
//       console.error('Error:', error);
//     });

    

// // this is how we can fetch the data from api using promise
// fetch('https://swapi.dev/api/people')
//   .then(response => response.json())
//   .then(data => console.log("Data fetched successfully:", data))
//   .catch(error => console.error("Error fetching data:", error));
