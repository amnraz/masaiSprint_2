let arr = [
    [1,2,3,4,5],
    [6,7,8,9,1],
    [3,2,5,4,6],
    [7,8,9,1,2]
    ];
    let n = arr.length // number of rows 
    let m = 5 // number of column
    let result = [];
    
    for (let i = 0; i < n; i++) {
        if (i % 2 === 0) {  // Even rows (left to right)
            for (let j = m - 1; j >= 0; j--) {
                result+=(arr[i][j]) + " ";
            }
        } else {  // Odd rows (right to left)
            for (let j = 0; j < m; j++) {
                result+=(arr[i][j]) + " ";
            }
        }
    }
    console.log(result)