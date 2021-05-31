const myArray = [
    16,             // 0
    32,             // 1
    128,            // 2
    512,            // 3
    1               // 4
];

const firstItem = myArray[0];
const coolNumber = myArray[2];

// console.log(firstItem);
// console.log(coolNumber);

myArray.forEach(function(item){
    console.log("Current item is: ", item);
});

function myLoop(item) {
    console.log("(myLoop) Current item is: ", item);
}

myArray.forEach(myLoop);