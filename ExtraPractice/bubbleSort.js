// Extra Practice: BubbleSort
const prompt = require('prompt-sync')();

function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}

// Prompt the user for input
let input = prompt("Enter numbers separated by commas: ");
let sampleInput = input.split(',').map(Number);

console.log(`Sorted array: ${bubbleSort(sampleInput)}`);
