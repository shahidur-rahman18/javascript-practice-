// Subtask-2:

// Display sum of all the even numbers from 206 to 311.

//  */

let num=206, sum=0;
while(num <=311){
    if(num%2===0)
    {
       sum+=num;
    
    }
    num++
}
 console.log('Sum of all even number  is ',sum);