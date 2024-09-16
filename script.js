// Lessons

const lessons = [
    ["Разговоры о важном 201п", "ОПП 408п,307п", "Информатика 408п,307п", "Алгебра 303п", "Русский_язык 301п", "Физкультура 0п", "История 405п"],
    ["Англ.язык 211п,410п", "Англ.язык 211п,410п", "География 501п", "Алгебра 303п", "История 405п", "Русский_язык 301п"],
    ["Алгебра 303п", "Русский_язык 301п", "Технология 305п,307п", "Технология 305п,307п", "Физика 507п", "Геометрия 302п"],
    ["Музыка 402п", "Алгебра 303п", "Алгебра 303п", "Русский_язык 301п", "География 501п", "Физика 507п"],
    ["Физкультура 0п", "Геометрия 405п", "Литература 301п", "ВиС 303п", "Литература 301п"],
    ["Геометрия 302п", "Обществознание 405п", "Англ.язык 211п,410п", "Англ.язык 211п,410п", "Биология 503п", "ИЗО 202п"],
    []
]
const time = [
    ["9:00", "9:45", [9, 0], [9, 45]],
    ["9:55", "10:40", [9, 55], [10, 40]],
    ["10:50", "11:35", [10, 50], [11, 35]],
    ["11:45", "12:30", [11, 45], [12, 30]],
    ["12:50", "13:35", [12, 50], [13, 35]],
    ["13:55", "14:40", [13, 55], [14, 45]],
    ["14:50", "15:35", [14, 50], [15, 35]]
]
const colors = {
    "Разговоры о важном 201п": "#FFFFFF",
    "Русский_язык 301п": "#e4a716",
    "Алгебра 303п": "#1773e6",
    "Англ.язык 211п,410п": "#f22007",
    "Литература 301п": "#30cb6c",
    "Геометрия 405п": "#fa760a",
    "Геометрия 302п": "#fa760a",
    "География 501п": "#08531f",
    "Физика 507п": "#3b3e8f",
    "Физкультура 0п": "#888888",
    "Биология 503п": "#717717",
    "ВиС 303п": "#61eeb3",
    "ОПП 408п,307п": "#950dd5",
    "Информатика 408п,307п": "#378c93",
    "Технология 305п,307п": "#0428b4",
    "Музыка 402п": "#c993d2",
    "ИЗО 202п": "#9c5399",
    "История 405п": "#915436",
    "Обществознание 405п": "#b3563b"
}

const table = document.querySelector("tbody")
for(let i = 0; i < lessons.length; i++) {
    let tableHTML = `<tr><td>${i+1}</td><td>${time[i][0]}</td><td>${time[i][1]}</td>`
    for(let i1 = 0; i1+1 < lessons.length; i1++) {
        let lesson = lessons[i1][i]
        if(lesson == undefined) {lesson = ""}
        tableHTML += `<td style="color:${colors[lessons[i1][i]]}">${lesson}</td>`
    }
    tableHTML += `</tr>`
    table.innerHTML += tableHTML
}
 
// Homework

const homeworks = [
    ["#e4a716", "Руcский язык", "https://in.lit.msu.ru/Ulysses/2024-2025/7/3/6610/"],
    ["#1773e6", "Алгебра", "https://in.lit.msu.ru/Ulysses/2024-2025/7/23/5921/"],
    ["#f22007", "Английский язык", "https://in.lit.msu.ru/Ulysses/2024-2025/7/19/5451/"],
    ["#30cb6c", "Литература", "https://in.lit.msu.ru/Ulysses/2024-2025/7/8/6610/"],
    ["#fa760a", "Геометрия", "https://in.lit.msu.ru/Ulysses/2024-2025/7/4/6126/"],
    ["#08531f", "География", "https://in.lit.msu.ru/Ulysses/2024-2025/7/13/98/"],
    ["#3b3e8f", "Физика", "https://in.lit.msu.ru/Ulysses/2024-2025/7/17/118/"],
    ["#717717", "Биология", ""],
    ["#61eeb3", "ВиС", "https://in.lit.msu.ru/Ulysses/2024-2025/7/56/5921/"],
    ["#950dd5", "ОПП", "https://classroom.google.com/u/2/c/NTQ1ODE4MTYzMjI1"],
    ["#378c93", "Информатика", "https://classroom.google.com/u/2/c/NzA5NzcwNTgxNjA0"],
    ["#0428b4", "Технология", "https://in.lit.msu.ru/Ulysses/2024-2025/7/35/6616/"],
    ["#c993d2", "Музыка", "https://in.lit.msu.ru/Ulysses/2024-2025/7/27/1858/"],
    ["#9c5399", "ИЗО", ""],
    ["#915436", "История", ""],
    ["#b3563b", "Обществознание", ""],
]


const htmlList = document.querySelector("ul")
for(let i = 0; i < homeworks.length; i++) {
    htmlList.innerHTML += `<li><a href="${homeworks[i][2]}" style="color:${homeworks[i][0]}">${homeworks[i][1]}</a></li>`;
}

// Color
let date = new Date()
let hours = date.getHours()
let minutes = date.getMinutes()

let number = date.getDay()

let today = document.querySelector(`.day${number}`)
let nextDay = document.querySelector(`.day${number+1}`)

let yesterday = document.querySelector(`.day${number-1}`)

function updateTime(){
    date = new Date()
    hours = date.getHours()
    minutes = date.getMinutes()

    number = date.getDay()

    // Day color

    yesterday = document.querySelector(`.day${number-1}`)
    today = document.querySelector(`.day${number}`)
    nextDay = document.querySelector(`.day${number+1}`)

    if(nextDay == null) { nextDay = document.querySelector(`.day${1}`) }

    if(yesterday != null) { yesterday.style.color = "" }
    if(yesterday != null) { today.style.color = "" }

    if(today != null) { today.style.color = "red" } 
    nextDay.style.color = "lime"
}
updateTime()
setInterval(updateTime, 1000);
