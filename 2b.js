function sevenRandomNumbers(quantity, max){
    const arr = []
    while(arr.length < quantity){
      var a = Math.floor(Math.random() * max)
      if(arr.indexOf(a) === -1) arr.push(a)
    }
  console.log(arr)
  }
 sevenRandomNumbers(7, 10)

