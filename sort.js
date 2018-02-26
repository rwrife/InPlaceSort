var input_array = [0, 0, 2, 1, 0, 1, 2, 0, 0, 1, 2, 1, 2 , 0];

function InPlaceSort(A){
    var leftZero = 0;
    var rightTwo = input_array.length;

    for(var i=leftZero;i<=rightTwo;i++) {
        if(A[i]!=0) {
            leftZero = i;
            break;
        }
    }

    for(var i=rightTwo;i>=0;i--) {
        if(A[i]!=2) {
            rightTwo=i;
            break;            
        }
    }

    for(var i=leftZero;i<rightTwo;i++) {
        if(A[i] == 0) {                    
            let oldVal = A[leftZero+1];            
            A[leftZero+1] = 0;
            A[i] = oldVal;
            while(A[leftZero+1]==0) {
                leftZero++;        
            }
        }

        if(A[i] == 2) {          
            let oldVal = A[rightTwo-1];            
            A[rightTwo-1] = 2;
            A[i] = oldVal;
            while(A[rightTwo-1] == 2){
                rightTwo--;
            }
        }
    }
    return A;
}

console.log(input_array);
console.log(InPlaceSort(input_array));