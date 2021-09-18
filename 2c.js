// const arr1 = ["A", "B", "C"];
// // let arr2 = [];


// PUSH METHOD
// for (let i = arr1.length - 1; i >= 0; i--) {
//     arr2.push(arr1[i])
// }
// console.log(arr2)

// REVERSE METHOD
// arr1.reverse();
// console.log(arr1)


// SPREAD OPERATOR
// const arr2 = [...arr1].reverse();
// console.log(arr2);



// function reverse(array) {
//     var output = [];
//     while (array.length) {
//       output.push(array.pop());
//     }
  
//     return output;
//   }
  
//   console.log(reverse(["A", "B", "C"]));

function reverseArray (arr) {
    var numArr = arr.length;    
    var newArr = [];    
    for (i = 0; i < numArr; i++) {      
        let inArr = arr;
        newArr[i] = inArr.pop(i);       
    }
    return newArr;
}

console.log(reverseArray(["A", "B", "C"]));