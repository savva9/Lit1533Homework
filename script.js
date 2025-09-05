// Lessons

const lessons = [
    ["Разговоры о важном 502", "Физика 507", "Технология 408", "Англ. язык 210", "Англ. язык 210", "Алгебра 303", "Геометрия 502"],
    ["Биология 507", "Алгебра 303", "Литература 203", "История 405", "ВиС 303", "Обществознание 405"],
    ["Англ. язык 210", "Англ. язык 210", "Русский язык 203", "Русский язык 203", "Физика 507", "Геометрия 502"],
    ["Биология 503", "Физика 506", "Алгебра 303", "Алгебра 303", "Химия 506", "Физкультура 0", "Россия-мои горизонты 502"],
    ["Литература 203", "Химия 506", "Инфа, ОПП 307", "Инфа, ОПП 307", "География 502", "Физкультура 0", "Доп. алгебра 303"],
    ["История 405", "ОБЗР 208", "Геометрия 502", "Русский язык 203", "География 501", "Литература 203"],
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
    "Разговоры о важном 201": "#FFFFFF",
    "Русский язык 203": "#e4a716",
    "Алгебра 303": "#1773e6",
    "Доп. алгебра 303": "#1773e6",
    "Англ. язык 210": "#f22007",
    "Литература 203": "#30cb6c",
    "Геометрия 502": "#fa760a",
    "География 501": "#08531f",
    "География 502": "#08531f",
    "Физика 507": "#3b3e8f",
    "Физика 506": "#3b3e8f",
    "Физкультура 0": "#888888",
    "Биология 503": "#717717",
    "Биология 507": "#717717",
    "ВиС 303": "#61eeb3",
    "Инфа, ОПП 307": "#950dd5",
    "Технология 408": "#0428b4",
    "Химия 506": "#c993d2",
    "История 405": "#915436",
    "Обществознание 405": "#b3563b",
    "ОБЗР 208": "#54d4ccff",
    "Россия-мои горизонты 502": "#913b58ff"
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
    ["#1773e6", "Алгебра", "https://in.lit.msu.ru/Ulysses/2025-2026/8/23/5921/"],
    ["#fa760a", "Геометрия", "https://in.lit.msu.ru/Ulysses/2025-2026/8/4/6126/"],
    ["#30cb6c", "Литература", "https://in.lit.msu.ru/Ulysses/2025-2026/8/8/5450/"],
    ["#e4a716", "Русский язык", "https://in.lit.msu.ru/Ulysses/2025-2026/8/3/5450/"],
    ["#f22007", "Английский язык", "https://in.lit.msu.ru/Ulysses/2025-2026/8/19/79/"],
    ["#08531f", "География", "https://in.lit.msu.ru/Ulysses/2025-2026/8/13/2396/"],
    ["#3b3e8f", "Физика", "https://school.mos.ru/diary/homeworks/homeworks"],
    ["#717717", "Биология", "https://in.lit.msu.ru/Ulysses/2025-2026/8/28/64/"],
    ["#61eeb3", "ВиС", ""],
    ["#950dd5", "ОПП", "https://classroom.google.com/u/2/c/NTQ1ODE4MTYzMjI1"],
    ["#378c93", "Информатика", "https://classroom.google.com/u/2/c/NzA5NzcwNTgxNjA0"],
    ["#0428b4", "Технология", "https://in.lit.msu.ru/Ulysses/2025-2026/8/35/6124/"],
    ["#c993d2", "Химия", "https://in.lit.msu.ru/Ulysses/2025-2026/8/24/96/"],
    ["#915436", "История", "https://school.mos.ru/diary/homeworks/homeworks"],
    ["#b3563b", "Обществознание", "https://school.mos.ru/diary/homeworks/homeworks"],
    // ["#54d4cbff", "ОБЗР", ""],
]

let aTarget = ""

if (
    navigator.userAgent.includes('Android') ||
    navigator.userAgent.includes('iPhone')  ||
    navigator.userAgent.includes('iPad')
) {
    aTarget = ""
} else {
    aTarget = `target="_blank"`
}

const htmlList = document.querySelector("ul")
for(let i = 0; i < homeworks.length; i++) {
    htmlList.innerHTML += `<li><a href="${homeworks[i][2]}" style="color:${homeworks[i][0]}" ${aTarget}>${homeworks[i][1]}</a></li>`;
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