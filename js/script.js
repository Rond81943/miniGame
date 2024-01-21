let numb = document.querySelector('#inp');
let btn = document.querySelector('#btn');
let answ = document.querySelector('.answer');

// keydown - нажатие клавиши на клавиатуре
// event - содержит информацию о событии
// event.prebentDefault() - отмена действия по умолчанию
numb.addEventListener('keydown', (event) => {
    let isDigit = false;
    if(event.key >= 0 && event.key <= 9) {
        isDigit = true;
    }
    if(event.key == 'Backspace' || event.key == 'Delete' || event.key == 'ArrowLeft' || event.key == 'ArrowRight') {
    } else if (!isDigit || event.key == ' ') {
        event.preventDefault();
    }
})

let randNumb = Math.floor(Math.random() * (20 - 1 + 1)) + 1;
let count = 0;
console.log(randNumb);

btn.addEventListener('click', () => {
    if(numb.value == randNumb) {
        answ.innerHTML = `Поздравляем! Вы угадали число ${randNumb} за ${count} попыток!`;
        answ.style.color = 'green';
    } else {
        if(numb.value < randNumb) {
            answ.innerHTML = `Загаданное число больше ${numb.value}.`;
            count ++;
        } else if(numb.value > randNumb) {
            answ.innerHTML = `Загаданное число меньше ${numb.value}.`;
            count ++;
        }
    }
});