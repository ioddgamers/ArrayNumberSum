//Sum of 3 Numbers: Write a function that takes an array of numbers and a target number. 
//The function should find three different numbers in the array that, when added together, give 
//the target number. Return the indices of the three numbers.

const firstArray = [5, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
const targetNumber = 50;

function getIndex (firstArray) {
    for(let i = 0; i < firstArray.length; i++) {
        for (let j = 0; j < firstArray.length; j++) {
            for (let k = 0; k < firstArray.length; k++) {
                if ((firstArray[i] + firstArray[j] + firstArray[k]) === targetNumber) {
                    console.log(firstArray[i], firstArray[j], firstArray[k]);
                    return i, j, k;
                }
            }
        }
    }
    return -1;
}

console.log(getIndex(firstArray));

