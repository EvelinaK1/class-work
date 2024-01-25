const colleges = [
// Студент
{
    StudentName: "Ivan",
    lastName: "Potter",
    CourseNumber: 3,
    Age: 18,
    Hobby: ["Play computer games", "Reading", "Watch TV shows"],
    
},
// Преподователь
{
    name: "George",
    lastName: "Petrov",
    age: 63,
    Disciplines: ["Math", "Chemistry", "NativeLanguage"],
    Number_of_lectures: 5,
}

]

console.log(colleges[0]["StudentName"], colleges[0]["Age"])
console.log(colleges[1]["name"], colleges[1]["Disciplines"])