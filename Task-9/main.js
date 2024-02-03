class NumberFilter {
    i;

    filterNumbers() {
        this.i = []
        for( let i = 0; i <= 100; i++) {
            if(i % 3 === 0 || i % 5 === 0) {
                this.i.push(i)
            }
        }

        return this.i
    }

    print() {
        const filteredNumbers = this.filterNumbers
        console.log(this.filterNumbers)
    }
}

const filters = new NumberFilter
filters.print()