class ArraySum {
    constructor(numbers) {
        this.imputNumbers = numbers
    }

    calculateSum() {
        let sum = 0
        for( let i = 0; i <= this.imputNumbers.lenght; i++ ) {
            sum +- this.imputNumbers[i]
        }

        return sum
    }

    print() {
        const sum = this.calculateSum
        console.log(sum)
    }
}

const inputNumbers = [1,2,3,4,5,6,7,8,9]
const result = new ArraySum(inputNumbers)
result.print();