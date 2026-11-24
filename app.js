console.log('=== Задание №1 ===');
for (let i = 1; i <= 20; i++) {
    if (i % 2 == 0) {
        console.log(i + ' - Чётное');
    } else {
        console.log(i + ' - Нечётное');
    }
}
console.log('=== Задание №2 ===');
for (let i = 1; i <= 20; i++) {
    if (i % 2 == 0) {
        console.log(i + ' - Чётное');
    } else {
        console.log(i + ' - Нечётное');
    }
}
console.log('=== Задание №3 ===');
let sum = 0;
let num = 1;

while (num <= 100) {
  sum = sum + num;
  num = num + 1;
console.log("Сумма чисел от 1 до 100: " + sum);
}
console.log('=== Задание №4 ===');
const input = document.getElementById('number');
const out = document.getElementById('out');
function showTable() {
  const number = Number(input.value);
  let text = '';
  for (let i = 1; i <= 10; i++) {
    text += number + ' x ' + i + ' = ' + (number * i) + '\n';
  }
  out.textContent = text;
}
showTable();
input.addEventListener('input', showTable);

console.log('=== Задание №5 ===');
let i = 10;
do {
  console.log(i);
  i--;
} while (i > 0);
console.log('Старт!');

console.log('=== Задание №6 ===');
for (let i = 1; i <= 30; i++) {
  if (i === 5 || i === 10 || i === 15 || i === 20 || i === 25) {
    continue;
  }
  console.log(i);
}

console.log('=== Задание №7 ===');
for (let i = 1; i <= 100; i++) {
  if (i == 35) break;
  console.log(i);
}

console.log('=== Задание №8 ===');
let totalStudents = 10;
let present = 0;
let absent = 0;
for (let i = 1; i <= totalStudents; i++) {
  if (i === 3 || i === 6 || i === 9) {
    console.log(`Студент №${i} - отсутствует`);
    absent++;
  } else {
    console.log(`Студент №${i} - присутствует`);
    present++;
  }
}
console.log("");
console.log(`Всего студентов: ${totalStudents}`);
console.log(`Присутствуют: ${present}`);
console.log(`Отсутствуют: ${absent}`);

console.log('=== Задание №9 ===');
for (let i = 1; i <= 4; i++) {
  let str = "";
  for (let j = 1; j <= 6; j++) {
    str = str + "*";
  }
  console.log(str);
}

console.log('=== Задание №10 ===');
let points = 0;
let completedTasks = 0;

while (points < 100) {
  points += 10;
  completedTasks++;
  console.log(`Задание ${completedTasks} - ${points} баллов`);
}

console.log(`Всего выполнено заданий: ${completedTasks}`);
console.log(`Итоговый балл: ${points}`);

