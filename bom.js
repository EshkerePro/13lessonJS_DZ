//- Дана textarea.
// В неё вводится текст.
// Сделайте так, чтобы после захода на эту страницу через некоторое время, введенный текст остался в textarea.

let txt = document.getElementById('textAr1');
let val;
txt.oninput = () => {
    localStorage.setItem('are', txt.value);
}
if (localStorage) {
    txt.value = localStorage.getItem('are');
}




// - Дана форма с инпутами, текстареа, чекбоксами, радио кнопочками, селектами и тп.
// Пользователь вводит какие-то данные и закрывает страницу (не факт, что он заполнил всю форму).
// Сделайте так, чтобы при следующем заходе на страницу введенные им ранее данные стояли на своих местах.
// Сделайте ваш скрипт как можно более универсальным.

let form1 = document.getElementById('form1');
GetFel(form1);

function saveForm(t) {
    SetFel(t);

}

function SetFel(inp) {
    for (let i = 0; i < inp.length; i++) {
        if (inp.children[i].name === 'checkbox' || inp.children[i].name === 'radio')
            inp.children[i].checked
                ? inp.children[i].value = true

                : inp.children[i].value = false
        localStorage.setItem(inp.children[i].id,  inp.children[i].value)
    }

}


function GetFel(inp) {
    for (let i = 0; i < localStorage.length; i++) {
        if (localStorage.hasOwnProperty(inp.children[i].id)) {
            inp.children[i].value = localStorage.getItem(inp.children[i].id);

            if (inp.children[i].value === 'true') {
                inp.children[i].setAttribute('checked', 'checked');
            }
        }

    }
}









// -Дан текстареа. В него можно ввести данные, нажать кнопку "сохранить" и они "фикисруются" (в хранилище), затем поредактировать их, затем еще поредактировать и возможно еще.....
// Требование : хранить историю своих изменений (даже после перезагрузки страницы).
// Сверху над текстареа должны появится стрелочки, с помощью которых можно перемещаться по истории (не забудьте!чекпоинт истории - нажатеи кнопки сохранить).

let text = document.getElementById('tex3');
let left = document.getElementById('left');
let right = document.getElementById('right');
let save = document.getElementById('save');

save.onclick = () => {
    localStorage.setItem(localStorage.length+1, text.value);
}

left.onclick = () => {
    right.style.visibility = 'visible';
    let index;
    for (const i in localStorage) {
        if (localStorage.hasOwnProperty(i)) {
            if (localStorage.getItem(i) === text.value) {
                index = i;
            }
        }
    }
    if (index === '1') {
        left.style.visibility = 'hidden';
        return;
    }
    text.value = localStorage.getItem(index - 1);
}

right.onclick = () => {
    left.style.visibility = 'visible';
    let index;
    for (const i in localStorage) {
        if (localStorage.hasOwnProperty(i)) {
            if (localStorage.getItem(i) === text.value) {
                index = i;
            }
        }
    }
    if (index === localStorage.length.toString()) {
        right.style.visibility = 'hidden';
        return;
    }
    text.value = localStorage.getItem(+index + 1);
}





// - Реализуйте записную книгу, хранящую данные в локальном хранилище.
// Данные которые надо сохранять : ФИО, номер, почта, фирма, отдел, день рождения
// Данные вводить через соответсвующую форму.
// --Каждому контакту добавить кнопку для удаления контакта.
// --Каждому контакту добавить кнопку редактироваиня. При нажати на нее появляется форма, в которой есть все необходимые
// инпуты для редактирования, которые уже заполнены данными объекта


let text4 = document.getElementById('tex4');
let date = document.getElementById('date');
let write = document.getElementById('write');
let read = document.getElementById('read');
let note = document.getElementById('note');
let name = document.getElementById('name');
let numb = document.getElementById('num');
let email = document.getElementById('email');
let firm = document.getElementById('firm');

text.value ='';

write.onclick = () => {
    let te = `NAME: ${name.value}    NUMBER: ${numb.value}   EMAIL: ${email.value}  CORPORATION: ${firm.value}   DATE: ${date.value} `;
    localStorage.setItem(date.value, te);
}
read.onclick = () => {
    let note = '';
    for (const key in localStorage) {
        if (localStorage.hasOwnProperty(key)) {
            note += localStorage.getItem(key)+ '\n';
        }
    }
    text4.value = note;
}

note.onclick = () => {
    text.value = '';
    date.value = '';
    name.value = '';
    numb.value = '';
}