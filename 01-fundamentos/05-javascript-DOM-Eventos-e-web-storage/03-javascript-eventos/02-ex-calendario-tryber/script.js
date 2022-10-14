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

    if (holiday === 24 || holiday === 25 || holiday === 31) {
      monthDays[index].classList.add("holiday");
    }
  }
}
verifiedHoliday();

function verifiedFriday() {
  const monthDays = document.getElementsByClassName("day");
  for (let index = 5; index < monthDays.length; index += 7) {
    monthDays[index].classList.add("friday");
  }
}
verifiedFriday();

function btnFeriados(param) {
  const buttonHolidayContainer = document.querySelector(".buttons-container");
  const buttonHoliday = document.createElement("button");
  buttonHoliday.id = "btn-holiday";
  buttonHoliday.innerText = param;
  let backgroundColor = 'rgb(238,238,238)';
  let novaCor = 'lime'
  buttonHolidayContainer.appendChild(buttonHoliday);


  const holiday = document.querySelectorAll('.holiday');
  
  buttonHoliday.addEventListener('click', function () {
    for (let index = 0; index < holiday.length; index += 1) {
      if (holiday[index].style.backgroundColor === novaCor) {
        holiday[index].style.backgroundColor = backgroundColor;
      } else {
        holiday[index].style.backgroundColor = novaCor;
      }
    }
  });
}
btnFeriados("Feriados");

function btnFriday (param) {
  const btnContainer = document.querySelector('.buttons-container');
  const buttonFriday = document.createElement('button');
  buttonFriday.id = 'btn-friday';
  buttonFriday.innerText = param;
  btnContainer.appendChild(buttonFriday);

  const friday = document.querySelectorAll('.friday');

  buttonFriday.addEventListener('click', function() {
    for (let index = 0; index < friday.length; index += 1) {
      if (friday[index].innerText === 'sextou') {
        friday[index].innerText = decemberFridays[index];
      } else {
        friday[index].innerText = 'sextou';
      }
    }
  })

}
let decemberFridays = [ 4, 11, 18, 25 ];
btnFriday ('Sexta-feira');

function daysZoom() {
  const daysUl = document.getElementById('days');
  daysUl.addEventListener('mouseover', function(e){
    e.target.style.fontSize = '30px';
    e.target.style.transition = 'font-size .5s';
  });
  daysUl.addEventListener('mouseout', function(e){
    e.target.style.fontSize = '20px';
    e.target.style.transition = 'font-size .5s';
  })
}
daysZoom();

function tasks(param) {
  const tasksContainer = document.querySelector('.my-tasks');
  const task = document.createElement('span');
  task.innerHTML= param;
  tasksContainer.appendChild(task);

}
tasks('Cozinhar');

function newTaskDiv(color) {

  const tasksContainer = document.querySelector('.my-tasks');
  const newTask = document.createElement('div');

  newTask.className = 'task';
  newTask.style.backgroundColor = color;
  tasksContainer.appendChild(newTask); // Adiciona newTask como filho de tasksContainer
};
newTaskDiv('green');

function taskSelected() {
  let task = document.querySelector('.task');
  task.addEventListener('click', function(e){
    if (e.target.classList.length === 2) {
      e.target.classList.remove('selected');
    } else {
      e.target.classList.add('selected');
    }
  })
}
taskSelected();

function colorSelected() {
  const taskSelected = document.getElementsByClassName('task selected');
  const task = document.querySelector('.task');
  const daysUl = document.getElementById('days');
  let taskColor = task.style.backgroundColor;
  daysUl.addEventListener('click', function(e) {
    let eventTargetColor = e.target.style.color;
    if (taskSelected.length > 0 && eventTargetColor !== taskColor) {
      let color = taskSelected[0].style.backgroundColor;
      e.target.style.color = color;
    } else if (eventTargetColor === taskColor){
      e.target.style.color = 'rgb(119,119,119)';
    }
  });
}
colorSelected();

function addNewTask() {
  let getInputField = document.querySelector('#task-input');
  let addInputButton = document.querySelector('#btn-add');
  let getTaskList = document.querySelector('.task-list');

  addInputButton.addEventListener('click', function() {
    if (getInputField.value.length > 0) {
      let newLi = document.createElement('li');
      newLi.innerText = getInputField.value;

      getTaskList.appendChild(newLi);
      getInputField.value = '';
    } else {
      alert('Error: Digite ao menos 1 caractere.');
    }
  });

  getInputField.addEventListener('keyup', function(event) {
    if (event.key === 'Enter' && getInputField.value.length > 0) {
      let newLi = document.createElement('li');
      newLi.innerText = getInputField.value;

      getTaskList.appendChild(newLi);
      getInputField.value = '';
    }
  });
}

addNewTask();