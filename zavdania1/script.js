let test;
let baly = 0;

test = prompt("Яка столиця України?");

if (test.toLowerCase() == 'київ')
{
    baly++;
}

test = prompt("Яка столиця Польщі?");

if (test.toLowerCase() == 'варшава')
{
    baly++;
}

test = prompt("Яка столиця Німеччини?");

if (test.toLowerCase() == 'берлін')
{
    baly++;
}

test = prompt("Яка столиця Франції?");

if (test.toLowerCase() == 'париж')
{
    baly++;
}

test = prompt("Яка столиця Чехії?");

if (test.toLowerCase() == 'прага')
{
    baly++;
}

test = prompt("Яка столиця Італії?");

if (test.toLowerCase() == 'рим')
{
    baly++;
}

test = prompt("Яка столиця Іспанії?");

if (test.toLowerCase() == 'мадрид')
{
    baly++;
}

test = prompt("Яка столиця Туречинни?");

if (test.toLowerCase() == 'анкара')
{
    baly++;
}

test = prompt("Яка столиця Португалії?");

if (test.toLowerCase() == 'лісабон')
{
    baly++;
}

test = prompt("Яка столиця Нідерландів?");

if (test.toLowerCase() == 'амстердам')
{
    baly++;
}
/**/ 
if(baly >= 0 && baly <= 3)
{
    alert("Ви відповіли на " + baly + " це дуже погано");
}
else if(baly >= 3 && baly <= 6)
{
    alert("Ви відповіли на " + baly + " це добре");
}
else if(baly >= 6 && baly <= 8)
{
    alert("Ви відповіли на " + baly + " це дуже добре");
}
else if(baly == 10)
{
    alert("Ви відповіли на " + baly + " це віддмінно");
}
