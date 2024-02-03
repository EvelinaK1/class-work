class ArraySum {
    
    inputNumbers;

    constructor(numbers) {
        this.inputNumbers = numbers
    }

    calculateSum() {
        let sum = 0
        for( let i = 0; i < this.inputNumbers.length; i++) {
            sum += this.inputNumbers[i]
        }

        return sum
    }

    print() {
        const sum2 = this.calculateSum()
        console.log(sum2)
    }
}

const inputNumbers = [1,2,3,4,5,]
const result = new ArraySum(inputNumbers)
result.print();