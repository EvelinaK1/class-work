const students = [
    {name: "Михаил", group: "LM1" },
    {name: "Богдан", group: "LM2" },
    {name: "Слава", group: "LM1" },
    {name: "Владимир", group: "LM2" },
    {name: "Владимир", group: "LM3" },
    {name: "Владимир", group: "LM3" },
    {name: "Владимир", group: "LM1" },
    {name: "Владимир", group: "LM2" },
    {name: "Владимир", group: "LM3" },
    {name: "Владимир", group: "LM1" },
    {name: "Владимир", group: "LM1" },
]

function filterstudents(targetArray, targetgroup) {
    return targetArray.filter(students => students.group === targetgroup)
}

let resultFilter = filterstudents(students, "LM2")
console.log(resultFilter)