<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Spiral Matrix</title>
  </head>
  <body></body>
</html>

<script>


  function spiralMatrix(matrix)
  {
    let result=[];
    let start_row=0;
    let start_col=0;
    let end_row=matrix.length-1;
    let end_col=matrix[0].length-1;

    while(start_row <= end_row && start_col <= end_col)
    {
      for(let i = start_col; i <= end_col; i++)
        result.push(matrix[start_row][i]);
    
    start_row++;
   

    for(let j = start_row; j <= end_row; j++)
    result.push(matrix[j][end_col]);

    end_col--;

    if(start_row <= end_row)
    {
      for(let k = end_col; k >= start_col; k--)
      result.push(matrix[end_row][k]);
    
    end_row--;
    }

    if(start_col <= end_col)
    {
      for(let l = end_row; l >= start_row; l--)
      result.push(matrix[l][start_col]);
    
    start_col++;
    }
  }
    return result;
  }

let matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]];
console.log(spiralMatrix(matrix));
</script>
