//1
/*
var a = 2; 
var b = 4;
var c = undefined;
c = b;
b = a;
a = c;

console.log(a); 
console.log(b);
console.log(c);


//2 
alert('Привет я пока не знаю кто ты');
b = prompt('как твоя имя?');
c = prompt('Как твоя фамилия?');
a = confirm('Больше 18 лет?');
if (a == true){
    alert("Ну привет "+b+" "+c+" вижу тебе больше 18");
}
else {
    alert("Ну привет "+b+" "+c+" вижу тебе меньше 18");
}

/*

//3
var fullname = prompt("Привет как тебя зовут?");
var age = confirm("Тебе больше 18 лет?");
if (age == true) {
    alert("Добро поджаловать"+" "+fullname);
}
else {
    var d = confirm("Точно?");
    if (d == true) {
        var f = confirm("Точно - точно нет?");
        if(f == true) {
            var last = prompt("А сколько же тбе лет?");
            alert("Добро поджаловать"+" "+fullname);
        }
        else {
            alert("Добро поджаловать"+" "+fullname);
        }
    }
    else {
        alert("Добро поджаловать"+" "+fullname);
    }
}
*/

//4

var a = prompt('Введите первое число');
if(a==''){
    a = prompt('Введите первое число');
}
if(a==null) {
    var reason = prompt('Почему вы нажали отмена?')
    alert('Я понял вашу причину'+" "+reason+". "+'Всего доброго');
}
var b = prompt('Введите второе число');
if(b==''){
    b = prompt('Введите второе число');
}
if(b==null){
    var reason = prompt('Почему вы нажали отмена?')
    alert('Я понял вашу причину'+" "+reason+". "+'Всего доброго');
}

var c = prompt('Введите третье число');
if(c==''){
    c = prompt('Введите третье число');
}
if(c==null){
    var reason = prompt('Почему вы нажали отмена?')
    alert('Я понял вашу причину'+" "+reason+". "+'Всего доброго');
}
var sum = Number(a)+Number(b)+Number(c);
var proz = a*b*c;
var noNumber = NaN;
if (a=='' && b=='' && c==''){
    alert('ПАКА');
}
else {
var d = confirm('Сложить или умножить их?');
if (d==true){
    if (isNaN(sum)){
        
        alert('Были введены некорректные числа');
    }
    else{ 
        console.log(sum);
    }
}
else {
    if(isNaN(proz)){
        alert('Были введены некорректные числа');
    }
    else{ 
        console.log(proz);
    }
}
}
