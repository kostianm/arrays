/**
 * 1. Об’явити масив з довільними елементами. За допомогою циклу вивести всі елементи масиву послідовно в консоль */

// let arr1 = [1, 2, 3, 4, 'end']
// for (const el of arr1) {
//     console.log(el);
// }

/*2. Дан масив з цілими числами. За допомогою циклу вивести елементи масива, які є простими числами

(завдання на методи масивів): */

// let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
// function findSimple(num) {
//     if (num === 1) {
//         return false
//     } else if (num % 2 === 0 && num !== 2) {
//         return false
//     } else if (num % 3 === 0 && num !== 3) {
//       return false;
//     } else if (num % 5 === 0 && num !== 5) {
//       return false;
//     } else if (num % 7 === 0 && num !== 7) {
//       return false;
//     } else return true;

// }
// let simples = arr2.filter(findSimple)
// console.log(simples);


/*3.  Дано два масива: [1, 2, 3] і [4, 5, 6]. Об'єднати їх разом */

// let arrPart1 = [1, 2, 3];
// let arrPart2 = [4, 5, 6];
// let arr3 = [...arrPart1, ...arrPart2]
// console.log(arr3);


/* 4. Даний масив [6, 5, 4]. Зробити з нього масив [4, 5,6] */

// let arr4 = [6, 5, 4].sort();
// console.log(arr4);

/* 5. Даний масив [1, 2, 3]. Додати йому в кінець елементи 4, 5, 6 */

// let arr5 = [1, 2, 3];
// arr5.push(4, 5, 6);
// console.log(arr5);

/* 6. Даний масив [7, 8, 9]. Додати йому на початок 1, 2, 3 */

// let arr6 = [7, 8, 9];
// arr6.unshift(1, 2, 3);
// console.log(arr6);

/*7. Даний масив ['aaa', 'bbb', 'ccc']. Виведіть в консоль перший елемент та видаліть його.*/

// let arr7 = ["aaa", "bbb", "ccc"];
// console.log(arr7.shift());

/*8. Даний масив ['aaa', 'bbb', 'ccc']. Виведіть в консоль та видаліть останній елемент */

// let arr8 = ["aaa", "bbb", "ccc"];
// console.log(arr8.pop());

/* 9. Даний масив [9, 10, 11, 12, 13]. Скопіювати в новий масив елементи з другого по п'ятий */

// let arr9 = [9, 10, 11, 12, 13];
// let arr9Copy = arr9.slice(1, 4)
// console.log(arr9Copy);

/* 10. З масиву [1, 2, 3, 4, 5] зробити масив [1, 4, 5] (оригінальний має змінитись) */

// let arr10 = [1, 2, 3, 4, 5];
// arr10.splice(1, 2)
// console.log(arr10);

/*11. З масиву [1, 2, 3, 4, 5] скопіювати в новий масив [3, 4, 5] */

// let arr11 = [1, 2, 3, 4, 5];
// let arr11Copy = arr11.slice(2, 6);
// console.log(arr11Copy);

/* 12. З масиву  [1, 2, 3, 4, 5] (не однією командою) зробити масив [1, 'w', 'trtr', 2, 3, 4, 'vvv', 'a', 'hello'] */

// let arr12 = [1, 2, 3, 4, 5];
// arr12.splice(1, 0, "w", "trtr");
// arr12.pop();
// arr12.push("vvv", "a", "hello");
// console.log(arr12);

/* Таска з *:

Написати функцію, яка приймає рядок і масив голосних літер, повертає кількість включень голосних у заданому рядку

function countVovels(str, vovelsArray)

vovelsArray = [a, e, i, o, u, y]

'hello to you' //6

'lorem ipsum dolor sit amet' // 9
 */

const vovelsArray = ['a', 'e', 'i', 'o', 'u', 'y']

function countVovels(str, vovelsArray) {
    let count = 0;
    str = str.toLowerCase()
    for (let char of str) {
        if (vovelsArray.includes(char)) {
            count++;
        }
    }
    return count
}

console.log(countVovels('hello to you', vovelsArray));
console.log(countVovels("lorem ipsum dolor sit amet", vovelsArray));