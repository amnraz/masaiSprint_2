let arr = [
    [1,2],
    [3,4],
    [5,6],
    ];
  let n = arr.length 
  let m = 2
  for(let i =0; i<n; i++){
    //   console.log([i])
       let bag = ""
      for(let j=0; j<m; j++){
            bag+=(i+j) + " "
      }
        console.log(bag)
  }