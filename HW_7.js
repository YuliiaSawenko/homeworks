//ДЗ 10.1. Параноя

var arr = [
    { userName:"Test",  lastName:"Test",   email:"test.test@gmail.com" },
    { userName:"Dmitro", lastName:"Porohov", email:"dmitro.porohov@yahoo.com" },
    { userName:"Andrii", lastName:"",      email:"andrii@mail.ru" } // не підходить
];

var re = /^[\da-z]+(?:.[\da-z]+)?(@gmail\.com|yahoo\.com)$/i;

var trustedEmails = [];

arr.forEach(function(user){
    if(re.test(user.email)){
        trustedEmails.push(user.email);
    }
});

console.log("Довірені адреси:", trustedEmails);
console.log("Кількість довірених:", trustedEmails.length);

//ДЗ 10.2. Без А

var str = "Wonderful Joyful Happiness Apple";

var re = /\b[^aA]{6,}\b/g;

console.log("Перевірка: " + re.test(str));
console.log(str.search(re));
console.log(str.match(re));
              


