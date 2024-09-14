const list = [["#e4a716", "Руcский язык", "https://in.lit.msu.ru/Ulysses/2024-2025/7/3/6610/"],
              ["#1773e6", "Алгебра", "https://in.lit.msu.ru/Ulysses/2024-2025/7/23/5921/"],
              ["#30cb6c", "Литература", "https://in.lit.msu.ru/Ulysses/2024-2025/7/8/6610/"],
              ["#f22007", "Английский язык", "https://in.lit.msu.ru/Ulysses/2024-2025/7/19/5451/"],
              ["#950dd5", "ОПП", "https://in.lit.msu.ru/Ulysses/2024-2025/7/58/118/"],
              ["#378c93", "Информатика", "https://in.lit.msu.ru/Ulysses/2024-2025/7/16/118/"],
              ["#915436", "История", ""],
              ["#08531f", "География", "https://in.lit.msu.ru/Ulysses/2024-2025/7/13/98/"],
              ["#0428b4", "Технология", "https://in.lit.msu.ru/Ulysses/2024-2025/7/35/6616/"],
              ["#3b3e8f", "Физика", "https://in.lit.msu.ru/Ulysses/2024-2025/7/17/118/"],
              ["#fa760a", "Геометрия", "https://in.lit.msu.ru/Ulysses/2024-2025/7/4/6126/"],
              ["#c993d2", "Музыка", "https://in.lit.msu.ru/Ulysses/2024-2025/7/27/1858/"],
              ["#61eeb3", "ВиС", "https://in.lit.msu.ru/Ulysses/2024-2025/7/56/5921/"],
              ["#b3563b", "Обществознание", ""],
              ["#717717", "Биология", ""],
              ["#9c5399", "ИЗО", ""]]

const htmlList = document.querySelector("ul")
for(let i = 0; i < list.length; i++) {
    htmlList.innerHTML += `<li><a href="${list[i][2]}" style="color:${list[i][0]}">${list[i][1]}</a></li>`;
}