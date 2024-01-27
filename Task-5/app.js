// const peoples = ["Tom", "Vova", "Sam", "Bob", "Nat", "Stas"]
// console.log(peoples)
// for(let i = 0; peoples.length; i++) {
//     let result = peoples[i]
//     console.log(result)
// } 

const peoples = [["Tom", "Potter", 39,], ["Bob", "Malinov", 18], ["Stan", "Ross", 17], ["Carl", "Ranson", 24], ["Greg", "Rogers", 45], ["Jack", "Stanley", 39]]
for (let i = 0; peoples.length; i++) {
    for(let j = 0; j < 3; j++) {
        let result = peoples[i][j]
        console.log(result)
    }
    console.log("-----------------")
}