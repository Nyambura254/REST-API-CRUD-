//Given a sequence of numbers, find the largest pair sum in the sequence.

//For example

//[10, 14, 2, 23, 19] -->  42 (= 23 + 19)
//[99, 2, 2, 23, 19]  --> 122 (= 99 + 23)
function largestPairSum(numbers) {
    let first = numbers[0]
    let second = numbers[1]
    numbers.forEach(num => {
        if (num > first) {
            let temp = first
            first = num
            second = temp
        } else if (num > second) {
            second = num
        }
    })
    return first + second
}
console.log(largestPairSum([-10, -8, -16, -18, -19]));