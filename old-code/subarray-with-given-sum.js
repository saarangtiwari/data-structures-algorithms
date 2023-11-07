"strict";

class Solution 
{
    //Function to find a continuous sub-array which adds up to a given number.
    subarraySum(arr, n, s)
    {
        
        let subArray = [-1];
        
        if(n == 0) return subArray;
        let sum = 0;
        let firstIndex;
        firstIndex = 0;
        let cursorIndex = 0;

        while (cursorIndex != n-1) {
            
            if(arr[cursorIndex] < s) {
                sum += arr[cursorIndex];
                cursorIndex++;
            } 

            if(sum == s)  {
                // lastIndex = cursorIndex+1;
                console.log('found sum')
                subArray = [firstIndex + 1, cursorIndex];
                break;
            } 
            
            if(sum > s) {
                firstIndex++;
                cursorIndex = firstIndex;
                sum = 0;
            }
            
            
            console.log(sum, cursorIndex); 

        }
  
         return subArray;
    }
}

const solution = new Solution();
const result = solution.subarraySum([1,2,3,7,5], 5, 12);
console.log(result)