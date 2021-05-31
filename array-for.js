const myArray = [
    16,             // 0
    32,             // 1
    128,            // 2
    512,            // 3
    1               // 4
];


function myForEach(someArray, whatShouldWeDo) {
    for (const item of someArray) {
        whatShouldWeDo(item);
    }
}

myForEach(myArray, function(item){
    console.log("myForEach: ", item);
});

for (let i = 0; i < myArray.length; i++) {
    const item = myArray[i];
    console.log("i = ", i, "item = ", item);
}