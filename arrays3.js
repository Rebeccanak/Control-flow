// I've invited you to fill out a form:
// Arrays3
// Write a function that accepts an array of strings and console.logs each element using a for loop.

function getString(array){
    for(let i =0; i<array.length; i++){
       // console.log(i);
        console.log(array[i]);
}

}
let string = ["Keep" ,"pushing"]
getString(string)

// Write a function that accepts an array of numbers 
//and uses the forEach() method to console.log each number multiplied by 2.

function numbers(arrays){
    arrays.forEach(item => {
        console.log(item*2)
    } );
}
let nums =[5,10,15,20,25,30.35];
numbers(nums)




// function number(array2){
//     array2.forEach(element => {
//         console.log(element*2)
//     });
// }
// let num =[2,5,8,9,6,4]
// number(num)
// Write a function that takes in an array of numbers 
//and consoles the first four items multiplied by 8 and the last two added by 5. 
//Console the array with the new values


function multiplyArray(array3) {
    const firstFour = array3.slice(0, 4).map(num => num * 8);
    const lastTwo = array3.slice(-2).map(num => num + 5);
    const multiplyArray = [...firstFour, ...lastTwo];
    console.log(multiplyArray);
  }
  const getArray = [5, 10, 15, 20,25 ,30];
  multiplyArray(getArray);

// Write a function that takes in the following array and use a while loop to iterate and break when the item is equal to the fourth index
// let arrNum = [1,2,3,4,5,6,7,8,9];

// Write a function that takes in a an array of strings
// and use a continue statement when the item is at the second index
// let fruits= ['apple','plum','banana','strawberries','kiwi']
// Never submit passwords through Google Forms.
function fruits(arr5){
    for(let i=0;i<arr5.length;i++){
   if(i===2){  
       continue;
   }
   console.log(arr5[i]);
    }
}
     let fruitin= ['apple','plum','banana','strawberries','kiwi'];
      fruits(fruitin);

