// ==================== ДАННЫЕ ====================

const lessons = [
    [
        "Разговоры о важном 302",
        "ТВиС 300",
        "Английский язык 310, 305",
        "Программирование 205, 104",
        "Биология 208",
        "Геометрия 302",
    ],
    [
        "Русский язык 313",
        "Химия 404",
        "Английский язык 310, 305",
        "Программирование 205, 104",
        "Биология 208",
        "Химия 400",
    ],
    ["Русский язык 313", "Физика 206", "История 304", "ОБЗР 404", "Физика 206", "Литература 313"],
    ["Физика 206", "Технология 204, 207", "История 304", "Алгебра 413", "Алгебра 413", "Литература 313"],
    [
        "Алгебра 413",
        "Геометрия 302",
        "Русский язык 313",
        "География 311",
        "Обществознание 304",
        "Английский язык 310, 305",
    ],
    [
        "Алгебра 413",
        "Информатика 105, 205",
        "География 312",
        "Физкультура 0",
        "Доп. алгебра 413",
        "Английский язык 310, 305",
    ],
    ["Физкультура 0", "Практикум по физике 206", "ТЖО 104", "Россия-мои горизонты 302"],
    ["Русский язык 313", "", "ТЖО 104"],
];

const time = [
    ["9:00", "9:45"],
    ["9:55", "10:40"],
    ["10:50", "11:35"],
    ["11:45", "12:30"],
    ["12:50", "13:35"],
    ["13:55", "14:40"],
    ["14:50", "15:35"],
    ["15:45", "16:30"],
];

const colors = {
    "Разговоры о важном 302": "#FFFFFF",
    "Русский язык 313": "#e4a716",
    "Алгебра 413": "#1773e6",
    "Доп. алгебра 413": "#1773e6",
    "Английский язык 310, 305": "#f22007",
    "Литература 313": "#30cb6c",
    "Геометрия 302": "#fa760a",
    "География 311": "#08531f",
    "География 312": "#08531f",
    "Физика 206": "#3b3e8f",
    "Практикум по физике 206": "#3b3e8f",
    "Физкультура 0": "#888888",
    "Биология 208": "#717717",
    "ТВиС 300": "#61eeb3",
    "Информатика 105, 205": "#950dd5",
    "Программирование 205, 104": "#950dd5",
    "Технология 204, 207": "#0428b4",
    "ТЖО 104": "#0428b4",
    "Химия 404": "#c993d2",
    "Химия 400": "#c993d2",
    "История 304": "#915436",
    "Обществознание 304": "#b3563b",
    "ОБЗР 404": "#54d4cc",
    "Россия-мои горизонты 302": "#913b58",
};

const homeworks = [
    { name: "Алгебра", color: "#1773e6", link: "https://in.lit.msu.ru/Ulysses/2026-2027/9/23/51/" },
    { name: "Английский язык", color: "#f22007", link: "https://in.lit.msu.ru/Ulysses/2026-2027/9/19/79/" },
    { name: "Биология", color: "#717717", link: "https://in.lit.msu.ru/Ulysses/2026-2027/9/28/64/" },
    { name: "География", color: "#08531f", link: "https://in.lit.msu.ru/Ulysses/2026-2027/9/13/46/" },
    { name: "Геометрия", color: "#fa760a", link: "https://in.lit.msu.ru/Ulysses/2026-2027/9/4/41/" },
    { name: "Информатика", color: "#950dd5", link: "https://classroom.google.com/u/3/c/ODc3MDE0ODQ5Mzkz" },
    { name: "История", color: "#915436", link: "https://in.lit.msu.ru/Ulysses/2026-2027/9/2/73/" },
    { name: "Литература", color: "#30cb6c", link: "https://in.lit.msu.ru/Ulysses/2026-2027/9/8/71/" },
    { name: "Обществознание", color: "#b3563b", link: "https://in.lit.msu.ru/Ulysses/2026-2027/9/11/73/" },
    { name: "Программирование", color: "#950dd5", link: "https://classroom.google.com/u/3/c/ODc3NTk2Njc1NDY5" },
    { name: "Русский язык", color: "#e4a716", link: "https://in.lit.msu.ru/Ulysses/2026-2027/9/3/71/" },
    { name: "ТВиС", color: "#61eeb3", link: "https://in.lit.msu.ru/Ulysses/2026-2027/9/56/6126/" },
    { name: "Технология", color: "#0428b4", link: "https://in.lit.msu.ru/Ulysses/2026-2027/9/35/6616/" },
    { name: "Физика", color: "#3b3e8f", link: "https://in.lit.msu.ru/Ulysses/2026-2027/9/17/57/" },
    { name: "Химия", color: "#c993d2", link: "https://in.lit.msu.ru/Ulysses/2026-2027/9/24/7/" },
];

// ==================== СОСТОЯНИЕ ====================

const weekdays = [1, 2, 3, 4, 5, 6]; // Пн-Сб
const weekdayNames = ["", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];
let isGroupMode = false;

// Загрузка темы из localStorage
let themeMode = localStorage.getItem("schedule_theme_mode") || "dark";

// Загрузка контрастности из localStorage
let contrastValue = 100;
const savedContrast = localStorage.getItem("schedule_contrast");
if (savedContrast !== null) {
    const parsed = parseInt(savedContrast);
    if (!isNaN(parsed) && parsed >= 0 && parsed <= 100) {
        contrastValue = parsed;
    }
}

// ==================== УТИЛИТЫ ====================

function parseLesson(lessonStr) {
    if (!lessonStr) return { name: "", room: "" };
    const match = lessonStr.match(/^(.+?)\s+(\d+(?:\s*,\s*\d+)*)$/);
    if (match) {
        return { name: match[1], room: match[2] };
    }
    return { name: lessonStr, room: "" };
}

function isLightColor(color) {
    if (!color) return false;
    let r, g, b;
    if (color.startsWith("#")) {
        const hex = color.slice(1);
        if (hex.length === 3) {
            r = parseInt(hex[0] + hex[0], 16);
            g = parseInt(hex[1] + hex[1], 16);
            b = parseInt(hex[2] + hex[2], 16);
        } else if (hex.length === 6) {
            r = parseInt(hex.slice(0, 2), 16);
            g = parseInt(hex.slice(2, 4), 16);
            b = parseInt(hex.slice(4, 6), 16);
        } else {
            return false;
        }
    } else {
        return false;
    }
    const brightness = 0.299 * r + 0.587 * g + 0.114 * b;
    return brightness > 186;
}

function applyContrastToColor(color) {
    if (!color || contrastValue === 100) return color;
    let r, g, b;
    if (color.startsWith("#")) {
        const hex = color.slice(1);
        if (hex.length === 3) {
            r = parseInt(hex[0] + hex[0], 16);
            g = parseInt(hex[1] + hex[1], 16);
            b = parseInt(hex[2] + hex[2], 16);
        } else if (hex.length === 6) {
            r = parseInt(hex.slice(0, 2), 16);
            g = parseInt(hex.slice(2, 4), 16);
            b = parseInt(hex.slice(4, 6), 16);
        } else {
            return color;
        }
    } else {
        return color;
    }
    const opacity = contrastValue / 100;
    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
}

function getCurrentAndTomorrowDays() {
    const today = new Date();
    const todayWeekday = today.getDay() === 0 ? 7 : today.getDay();

    let nextWorkDay = null;
    let daysToAdd = 1;
    let daysUntilNextWorkDay = 1;

    for (let i = 0; i < 7; i++) {
        const checkDate = new Date(today);
        checkDate.setDate(today.getDate() + daysToAdd);
        const checkWeekday = checkDate.getDay() === 0 ? 7 : checkDate.getDay();

        if (weekdays.includes(checkWeekday)) {
            nextWorkDay = checkWeekday;
            daysUntilNextWorkDay = daysToAdd;
            break;
        }
        daysToAdd++;
    }

    if (nextWorkDay === null) {
        const tomorrow = new Date(today);
        tomorrow.setDate(today.getDate() + 1);
        nextWorkDay = tomorrow.getDay() === 0 ? 7 : tomorrow.getDay();
        daysUntilNextWorkDay = 1;
    }

    return {
        today: todayWeekday,
        tomorrow: nextWorkDay,
        daysUntilNext: daysUntilNextWorkDay,
    };
}

function getFontSizes() {
    const width = window.innerWidth;
    return {
        timeFontSize: width >= 1024 ? "12px" : width >= 768 ? "11px" : "8px",
        cellFontSize: width >= 1024 ? "14px" : width >= 768 ? "12px" : "10px",
    };
}

// ==================== РЕНДЕРИНГ ====================

function renderSchedule() {
    const table = document.getElementById("schedule-table");
    if (!table) return;

    const thead = table.querySelector("thead tr");
    const tbody = table.querySelector("tbody");
    if (!thead || !tbody) return;

    thead.innerHTML = "<th>Урок</th><th>Начало</th><th>Конец</th>";

    const { today, tomorrow, daysUntilNext } = getCurrentAndTomorrowDays();

    for (let dayNum = 1; dayNum <= 7; dayNum++) {
        const th = document.createElement("th");
        th.setAttribute("data-day", dayNum);
        th.textContent = weekdayNames[dayNum];
        th.style.display = weekdays.includes(dayNum) ? "table-cell" : "none";
        thead.appendChild(th);
    }

    updateDayHighlighting(today, tomorrow, daysUntilNext);
    tbody.innerHTML = "";

    const { timeFontSize, cellFontSize } = getFontSizes();
    const isDarkTheme = themeMode !== "light";

    for (let lessonNum = 0; lessonNum < lessons.length; lessonNum++) {
        const row = document.createElement("tr");

        const lessonCell = document.createElement("td");
        lessonCell.textContent = lessonNum + 1;
        lessonCell.style.fontWeight = "bold";
        row.appendChild(lessonCell);

        const startTimeCell = document.createElement("td");
        startTimeCell.textContent = time[lessonNum] ? time[lessonNum][0] : "";
        startTimeCell.style.fontSize = timeFontSize;
        row.appendChild(startTimeCell);

        const endTimeCell = document.createElement("td");
        endTimeCell.textContent = time[lessonNum] ? time[lessonNum][1] : "";
        endTimeCell.style.fontSize = timeFontSize;
        row.appendChild(endTimeCell);

        for (let dayNum = 1; dayNum <= 7; dayNum++) {
            const cell = document.createElement("td");
            cell.style.display = weekdays.includes(dayNum) ? "table-cell" : "none";

            const lessonStr = lessons[lessonNum] ? lessons[lessonNum][dayNum - 1] : "";

            if (lessonStr) {
                const parsed = parseLesson(lessonStr);
                const originalColor = colors[lessonStr] || "#2481cc";
                const adjustedColor = applyContrastToColor(originalColor);

                let displayText = "";
                if (isGroupMode) {
                    displayText = parsed.room ? `${parsed.name} (${parsed.room})` : parsed.name;
                } else {
                    displayText = parsed.room ? `${parsed.name} (${parsed.room})` : parsed.name;
                }

                cell.innerHTML = `<div style="font-weight: bold; font-size: ${cellFontSize}; text-align: center;">${displayText}</div>`;
                cell.style.backgroundColor = adjustedColor;

                // ИСПРАВЛЕНИЕ: Логика цвета текста теперь учитывает контрастность, как в chips
                if (contrastValue <= 0) {
                    cell.style.color = isDarkTheme ? "#fff" : "#000";
                } else if (contrastValue <= 75) {
                    if (isDarkTheme) {
                        cell.style.color = "rgba(255, 255, 255, 1)";
                    } else {
                        cell.style.color = "rgba(0, 0, 0, 1)";
                    }
                } else {
                    const isLight = isLightColor(originalColor);
                    cell.style.color = isLight ? "#000" : "#fff";
                }

                cell.classList.add("occupied");
                cell.onclick = () => showLessonInfo(parsed, originalColor);
            }

            row.appendChild(cell);
        }

        tbody.appendChild(row);
    }
}

function renderLessonsList() {
    const container = document.getElementById("lessons-list-container");
    if (!container) return;

    container.innerHTML = "";

    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    const linkTarget = isMobile ? "_self" : "_blank";
    const isDarkTheme = themeMode !== "light";

    homeworks.forEach((lesson) => {
        const chip = document.createElement("div");
        chip.className = "lesson-chip";
        chip.textContent = lesson.name;

        const adjustedColor = applyContrastToColor(lesson.color);
        chip.style.backgroundColor = adjustedColor;

        if (contrastValue <= 0) {
            chip.style.color = isDarkTheme ? "#fff" : "#000";
        } else if (contrastValue <= 75) {
            chip.style.color = isDarkTheme ? "rgba(255, 255, 255, 1)" : "rgba(0, 0, 0, 1)";
        } else {
            chip.style.color = isLightColor(lesson.color) ? "#000" : "#fff";
        }

        if (lesson.link) {
            chip.onclick = () => window.open(lesson.link, linkTarget);
        } else {
            chip.classList.add("no-homework");
        }

        container.appendChild(chip);
    });
}

function updateDayHighlighting(today, tomorrow, daysUntilNext) {
    const table = document.getElementById("schedule-table");
    if (!table) return;

    const thead = table.querySelector("thead tr");
    if (!thead) return;

    const headers = Array.from(thead.querySelectorAll("th"));

    headers.forEach((th, index) => {
        if (index < 3) return;

        const dayAttr = th.getAttribute("data-day");
        if (!dayAttr) return;

        const dayNum = parseInt(dayAttr);
        if (isNaN(dayNum)) return;

        th.style.backgroundColor = "";
        th.style.color = "";
        th.style.fontWeight = "";

        let baseText = weekdayNames[dayNum];

        if (dayNum === today) {
            const baseOpacity = 0.3;
            const todayOpacity = contrastValue <= 80 ? baseOpacity * (contrastValue / 100) : baseOpacity;
            th.style.backgroundColor = `rgba(220, 38, 38, ${todayOpacity})`;
            th.style.color = "var(--tg-theme-text-color)";
            th.style.fontWeight = "bold";
            th.textContent = baseText + " (сегодня)";
        } else if (dayNum === tomorrow) {
            const baseOpacity = 0.3;
            const tomorrowOpacity = contrastValue <= 80 ? baseOpacity * (contrastValue / 100) : baseOpacity;
            th.style.backgroundColor = `rgba(22, 163, 74, ${tomorrowOpacity})`;
            th.style.color = "var(--tg-theme-text-color)";
            th.style.fontWeight = "bold";

            let nextDayText = "";
            if (daysUntilNext === 1) {
                nextDayText = " (завтра)";
            } else {
                const lastDigit = daysUntilNext % 10;
                const lastTwoDigits = daysUntilNext % 100;
                let dayWord = "дней";

                if (lastTwoDigits >= 11 && lastTwoDigits <= 14) {
                    dayWord = "дней";
                } else if (lastDigit === 1) {
                    dayWord = "день";
                } else if (lastDigit >= 2 && lastDigit <= 4) {
                    dayWord = "дня";
                }

                nextDayText = ` (через ${daysUntilNext} ${dayWord})`;
            }
            th.textContent = baseText + nextDayText;
        } else {
            th.textContent = baseText;
        }
    });
}

// ==================== МОДАЛЬНОЕ ОКНО ====================

function showLessonInfo(parsed, color) {
    const modal = document.getElementById("lesson-modal");
    const title = document.getElementById("modal-title");
    const info = document.getElementById("modal-info");

    title.textContent = parsed.name || "Урок";
    info.innerHTML = "";

    const roomItem = document.createElement("div");
    roomItem.className = "modal-info-item";
    roomItem.innerHTML = `
        <div class="modal-info-label">Кабинет:</div>
        <div class="modal-info-value">${parsed.room || "Не указан"}</div>
    `;
    info.appendChild(roomItem);

    const teacherItem = document.createElement("div");
    teacherItem.className = "modal-info-item";
    teacherItem.innerHTML = `
        <div class="modal-info-label">Учитель:</div>
        <div class="modal-info-value">Не указан</div>
    `;
    info.appendChild(teacherItem);

    const hwItem = document.createElement("div");
    hwItem.className = "modal-info-item";
    hwItem.innerHTML = `
        <div class="modal-info-label">Домашнее задание:</div>
        <div class="modal-info-value">Нажмите на предмет внизу, чтобы открыть ДЗ</div>
    `;
    info.appendChild(hwItem);

    modal.classList.add("show");
}

function closeModal() {
    const modal = document.getElementById("lesson-modal");
    modal.classList.remove("show");
}

window.onclick = (event) => {
    const modal = document.getElementById("lesson-modal");
    if (event.target === modal) {
        closeModal();
    }
};

// ==================== УПРАВЛЕНИЕ ====================

function toggleMode() {
    isGroupMode = document.getElementById("group-mode").checked;
    renderSchedule();
}

function updateContrast(value) {
    contrastValue = parseInt(value);
    // Сохраняем в localStorage
    localStorage.setItem("schedule_contrast", contrastValue.toString());

    const valueDisplay = document.getElementById("contrast-value");
    if (valueDisplay) valueDisplay.textContent = contrastValue + "%";

    renderSchedule();
    renderLessonsList();
    const { today, tomorrow, daysUntilNext } = getCurrentAndTomorrowDays();
    updateDayHighlighting(today, tomorrow, daysUntilNext);
}

function toggleTheme() {
    themeMode = themeMode === "dark" ? "light" : "dark";
    // Сохраняем в localStorage
    localStorage.setItem("schedule_theme_mode", themeMode);
    applyTheme();
}

function applyTheme() {
    const body = document.body;
    if (themeMode === "light") {
        body.classList.add("light-theme");
    } else {
        body.classList.remove("light-theme");
    }
    updateThemeButton();
    renderSchedule();
    renderLessonsList();
    const { today, tomorrow, daysUntilNext } = getCurrentAndTomorrowDays();
    updateDayHighlighting(today, tomorrow, daysUntilNext);
}

function updateThemeButton() {
    const btn = document.getElementById("theme-toggle-button");
    if (btn) {
        btn.textContent = themeMode === "light" ? "☀️" : "🌙";
    }
}

function handleBackButton() {
    window.history.back();
}

// ==================== ИНИЦИАЛИЗАЦИЯ ====================

function init() {
    // Применяем тему
    applyTheme();

    // Устанавливаем значение ползунка и текста при загрузке из localStorage
    const slider = document.getElementById("contrast-slider");
    const valueDisplay = document.getElementById("contrast-value");
    if (slider) slider.value = contrastValue;
    if (valueDisplay) valueDisplay.textContent = contrastValue + "%";

    renderSchedule();
    renderLessonsList();

    const { today, tomorrow, daysUntilNext } = getCurrentAndTomorrowDays();
    updateDayHighlighting(today, tomorrow, daysUntilNext);

    setInterval(() => {
        const { today, tomorrow, daysUntilNext } = getCurrentAndTomorrowDays();
        updateDayHighlighting(today, tomorrow, daysUntilNext);
    }, 60000);
}

window.addEventListener("resize", () => {
    renderSchedule();
});

init();
