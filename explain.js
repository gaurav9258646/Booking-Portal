// // const data = [
// //   { id: 1, subject: "Math" },
// //   { id: 2, subject: "Science" },
// //   { id: 3, subject: "English" },
// //   { id: 1, subject: "Science" },
// //   { id: 2, subject: "Math" },
// //   { id: 3, subject: "Computer" },
  

// // ];

// // const res = data.reduce((acc,cur)=>{
// //     if(acc.hasOwnProperty(cur.subject)){
// //         acc[cur.id] = [...acc[cur.subject],cur.subject];
// //         return acc;

// //     }

// //     acc[cur.id]= [cur.subject];
// //     return acc;


// // },{});

// // console.log(res);










// let arr = [20, 53, 5, 46, 32];

// // for (i = 0; i < arr.length; i++) {
// //   console.log(arr[i]);
// // }

// function calc(num) {
//   console.log(num * 2);
// }

// arr.forEach((v) => console.log(v));
// arr.forEach(calc);

// for (i in arr) {
//   console.log(i, "->", arr[i]);
// }

// for (v of arr) {
//   console.log(v);
// }

// // spread operator
// let a = [1, 2, 3];
// let b = [4, 5, 6];

// let c = [...a, ...b];
// [1,2,3,4,5,6]
// console.log(c);

// // rest parameter
// function sum({ b, d, a }, ...args) {
//   console.log(b, args);
// }

// sum({ a: 2, b: 3, c: 4, d: 5 });
// sum({ b: 1, d: 4, a: 7 }, 2, 3);

// let aa = { name: "abc", age: 20 };
// let name = aa.name;
// let age = aa["age"];
// let { age: az } = { name: "abc", age: 20, gender: "male" };
// console.log(az);

// // find the index That’s a Multiple of Both 3 and 7.
// const nums = [10, 21, 33, 49, 84, 100, 105];

// const res = nums.findIndex((n) => n % 3 === 0 && n % 7 === 0);
// // console.log(res);

// const resArr = nums.reduce((acc, curr, i) => {
//   if (curr % 3 === 0 && curr % 7 === 0) {
//     acc.push(i);
//     return acc;
//   }
//   return acc;
// }, []);
// console.log(resArr);

// // iife
// // imidiate invoked function expression

// // (() => {
// //   console.log("Hello");
// // })();


// Group Users by Age
const usersData = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 25 },
];

const res = usersData.reduce((acc, cur) => {
  const age = cur.age;
  if (acc[age]) {
    acc[age].push(cur);
  } else {
    acc[age] = [cur];
  }
  return acc;
}, {});

console.log(res);
