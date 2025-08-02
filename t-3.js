
/***

Subtask-1:

Display sum of all the odd numbers from 81 to 131.

 */
/***

Subtask-2:

Display sum of all the even numbers from 206 to 311.

 */




let num=81,sum=0;
while(num<=131){
    if(num%2 !==0){
        sum=sum+num
       
    }
    num++;

}
 console.log("Sum of all odd number is ",sum)
