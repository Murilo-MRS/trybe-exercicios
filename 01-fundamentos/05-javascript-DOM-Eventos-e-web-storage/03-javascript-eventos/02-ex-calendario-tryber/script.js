function createDaysOfTheWeek() {
  const weekDays = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];
  const weekDaysList = document.querySelector(".week-days");

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement("li");
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
}
createDaysOfTheWeek();

// Escreva seu código abaixo.
let decemberDaysList = [
  29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
];
function daysNum() {
  const numberDaysList = document.getElementById("days");
  for (let index = 0; index < decemberDaysList.length; index += 1) {
    const dayListItem = document.createElement("li");
    dayListItem.innerText = decemberDaysList[index];
    dayListItem.classList = "day";
    numberDaysList.appendChild(dayListItem);
  }
}
daysNum();

function verifiedHoliday() {
  const monthDays = document.getElementsByClassName("day");
    for (let index = 0; index < monthDays.length; index += 1) {
        let holiday = parseInt(monthDays[index].innerText);

        if ( holiday === 24 || holiday === 25 || holiday === 31) {
            monthDays[index].classList.add("holiday");
        }
    }
}
verifiedHoliday();