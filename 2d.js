// function unique(arr)
// {
//     let n = arr.length;
//     let s = new Set();
//     for (let i = 0; i < n; i++) {
//         s.add(arr[i]);
//     }
//     return (s.size == arr.length);
// }
function unique(arr) {
    const len = arr.length;
    for (let i = 0; i < len; i++) {
      for (let j = 0; j < len; j++) {
        if (i !== j && arr[i] === arr[j]) {
          return false;
        }
      }
    }
    return true;
  }
const arrOne = [1, 4, 6, 2, 1];
console.log(unique(arrOne));

const arrTwo = [1, 4, 6, 2, 3];
console.log(unique(arrTwo));