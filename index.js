var arr = [12, 1000, 34, 170, 190, 67, 89, 90, 66, 74, 100, 230];

// Long way to do it 
let largestNum = 0;
let secondNum = 0;
let thirdNum = 0;
for (let i = 0; i <= arr.length; i++) {
    if (arr[i] > largestNum) {
        secondNum = largestNum;
        largestNum = arr[i];
    } else if (arr[i] > secondNum && arr[i] != largestNum) {
        thirdNum = secondNum;
        secondNum = arr[i];
    } else if (arr[i] > thirdNum && arr[i] != largestNum && arr[i] != secondNum) {
        thirdNum = arr[i]
    }
}
console.log(thirdNum)

// short way to do it
let getSorted = arr.sort((a, b) => {
    return b - a;
});
console.log(getSorted[2]);
