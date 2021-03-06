"use strict";
// Задание 7. *Сравнить null и 0. Попробуйте объяснить результат.

/*
alert( null > 0 );  // (1) false
alert( null == 0 ); // (2) false
alert( null >= 0 ); // (3) true
*/

// "Дети, это невозможно понять, это надо запомнить! (с) анекдот :)"
//
// При сравнении > null преобразуется к числу 0, поэтому выражение 0 > 0 дает Ложь
// При сравнении >= null также преобразуется к числу 0, поэтому выражение 0 >= 0 дает Истина
// При не строгом сравнении == null не преобразуется к числу и может быть равно только undefined, поэтому null == 0 дает Ложь

// Задание 8. Возведение в степень с помощью рекурсии. 2 реализации: if else либо тернарный оператор

function power(val, pow) {
    /* if (pow == 0) 
        return 1;
    else 
        return power(val, pow - 1) * val; */

    return (pow == 0) ? 1 : power(val, pow - 1) * val;
}

alert(power(2, 4));
