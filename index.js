// const a = " I am Gaurav"

// b = a.split("");
// console.log(b);



const  func = (arr) => {

    let a =  arr.reduce((acc,cur)=>{
      return acc + cur;

    })
    console.log(a)

}


  func([1,2,10,23])

