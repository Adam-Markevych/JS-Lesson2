let password;
let ask;
ask = prompt("Введіть слово Ім'я");

if (ask == "Ім'я" || ask == "ім'я") {
   password = prompt("Введіть пароль");
   if (password == "ЛОГОС" || password == "логос"){
        alert("Ласкаво просимо");
   }
   else if (password == null){
        alert("Вхід скасований");
   }
   else if (password == ""){
    alert("Ви нічого не ввели");
}
   else {
        alert("Пароль не вірний");
   }
}
else if (ask == ""){
    alert("Ви нічого не ввели");
}
else if (ask == null) {
    alert("Вхід скасований");
}
else {
    alert("Я вас не знаю");
}




