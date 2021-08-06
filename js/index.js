function submit(){
    // Storing the input value in a inpVal Variable
    var inpVal=document.getElementById("inputValue").value;

    if(inpVal==""){ //Apply condtion for no value fill in input field
        alert("Input Field is blank")
    }else if (inpVal.length<25){//Apply condtion for less than 25 value fill in input field
        alert("Input is less than 25")
    }else if (inpVal.length>25){ //Apply condtion for more than 25 value fill in input field
        alert("Input is greater than 25")
    }else{//Apply condtion for exact 25 value fill in input field
        document.getElementById("input").style.display="none"  // try to not show the input  field container
        document.getElementById("result").style.display="Block"; // try to show only result field
        // creating matrix of %*%
        var matrix= new Array(5);
        for(var i=0; i<matrix.length;i++){
            matrix[i]=new Array(matrix.length);
        }
        // inserting the value in the matrix
        var k=0;
        for(var i=0; i<matrix.length;i++){
            for(var j=0;j<matrix.length;j++){
                matrix[i][j]=Number(inpVal[k]);
                k++;
            }
        }
        // show in the input area in the matrix form 
        var finalVal="";
        for(var i=0;i<matrix.length;i++){
            var val="";
            for(var j=0; j<matrix.length;j++){
                val=val+"<span class='col'>"+matrix[i][j] +"<span>";
            }
            finalVal=finalVal+"<p class='row'>"+val+"<p>"
        }
        document.getElementById("dInput").innerHTML=finalVal;

        // Creating the resMatrix of 5*5
        var resMatrix= new Array(matrix.length);
        for(var i=0; i<resMatrix.length;i++){
            resMatrix[i]=new Array(resMatrix.length);
        }

        var M = matrix.length;
        var N = matrix.length;
        // For First row and coloumn
        for(var l=0; l<M; l++){
            for(var m=0; m<N; m++){
                var aliveNeighbours = 0;
                for (var i = 0; i <= 0; i++)
                        for (var j = 0; j <= 0; j++)
                            aliveNeighbours += matrix[l + i][m + j];
    
                aliveNeighbours -= matrix[l][m];
    
                if ((matrix[l][m] == 1) && (aliveNeighbours < 2)){
                    resMatrix[l][m] = 0;
                }else if ((matrix[l][m] == 1) && (aliveNeighbours > 3)){
                    resMatrix[l][m] = 0;
                }else if ((matrix[l][m] == 0) && (aliveNeighbours == 3)){
                    resMatrix[l][m] = 1;
                }else{
                    resMatrix[l][m] = matrix[l][m];
                }   
            }
        }
        for(var l=1; l<M; l++){
            for(var m=1; m<N; m++){
                var aliveNeighbours = 0;
                for (var i = -1; i <= 0; i++)
                        for (var j = -1; j <= 0; j++)
                            aliveNeighbours += matrix[l + i][m + j];
    
                aliveNeighbours -= matrix[l][m];
    
                if ((matrix[l][m] == 1) && (aliveNeighbours < 2)){
                    resMatrix[l][m] = 0;
                }else if ((matrix[l][m] == 1) && (aliveNeighbours > 3)){
                    resMatrix[l][m] = 0;
                }else if ((matrix[l][m] == 0) && (aliveNeighbours == 3)){
                    resMatrix[l][m] = 1;
                }else{
                    resMatrix[l][m] = matrix[l][m];
                }   
            }
        }

        // for middle row and coloumn
        for(var l=1; l<M-1; l++){
            for(var m=1; m<N-1; m++){
                var aliveNeighbours = 0;
                for (var i = -1; i <= 1; i++)
                        for (var j = -1; j <= 1; j++)
                            aliveNeighbours += matrix[l + i][m + j];
    
                aliveNeighbours -= matrix[l][m];
    
                if ((matrix[l][m] == 1) && (aliveNeighbours < 2)){
                    resMatrix[l][m] = 0;
                }else if ((matrix[l][m] == 1) && (aliveNeighbours > 3)){
                    resMatrix[l][m] = 0;
                }else if ((matrix[l][m] == 0) && (aliveNeighbours == 3)){
                    resMatrix[l][m] = 1;
                }else{
                    resMatrix[l][m] = matrix[l][m];
                }   
            }
        }
        var finalResVal="";
        for(var i=0;i<resMatrix.length;i++){
            var val="";
            for(var j=0; j<resMatrix.length;j++){
                val=val+"<span class='col'>"+resMatrix[i][j] +"<span>";
            }
            finalResVal=finalResVal+"<p class='row'>"+val+"<p>"
        }
        document.getElementById("dOutput").innerHTML=finalResVal;

    }
}