//5. Создать визитку(на визитке должна быть картинка и надпись. по нажатию на картинку происходит моргание ее, по нажатию на текст он уезжает и выезжает) 

// $(".img").click(function (event) { 

// }) 
 /* 
3. Написать функцию, рисующую квадрат, с размером случайным в диапозоне (2,30) в случайной части экрана 
 
5. Создать визитку(на визитке должна быть картинка и надпись. по нажатию на картинку происходит моргание ее, по нажатию на текст он уезжает и выезжает) 
 
2. создать объект студентов(ключ имя:возраст значение) вывести студентов старше среднего возраста группы 
 
4. написать функцию, удаляющую элементы массива меньше среднего арифметического всех его элементов 
 
1. создать свою функцию возведени числа в степень(можно использовать только простые мат.операции) 
 
 */


    // /*1*/ function sum(a, b) {
    //     let c = 1;
    //     for (let i = 0; i < b; i++) {
    //         c *= a;
    //     }
    //     return c;
    // }
    // alert(sum(5, 3));




//  /*2*/ let students = {
//         "Misha": 25,
//         "Oleg": 19,
//         "Victor": 20,
//         "Max": 29
//     }
//     let age = 0;

//     for (let key in students) {
//         // alert( students[key] );
//         age += students[key]; //сумма возраста всех студентов
//     }
//     let a = age / Object.keys(students).length; //среднее арифметическое
//     console.log(a);
//     for (let key in students) {
//         if (students[key] > a) {
//             console.log(key)
//         }
//         else if (students[key] < a) {
//             console.log("ОШИБКА")
//         }
//     }


 /*3*/  let canvas = document.getElementById("canvas");
        let ctx = canvas.getContext("2d");
        let width = canvas.width;
        let height = canvas.height;

        function getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается 
        }

        function drowBorder() {
            let a = getRandomInt(2, 30);
            let x = getRandomInt(0, width - a);
            let y = getRandomInt(0, height - a);
            ctx.fillStyle = "grey";
            ctx.fillRect(x, y, a, a);
        }
        for (let i = 0; i < 6; i++) {
            drowBorder();
        }
//  // 4. написать функцию, удаляющую элементы массива меньше среднего арифметического всех его элементов

// let mas = [10, 20, 30, 40]; 

// function calc(mass) { 
// let a = 0; 
// for (let i = 0; i < mass.length; i++) { 
// a += mass[i]; 
// } 

// let sum = a / mas.length 
// console.log(sum); //среднее 
// for (let i = 0; i < mass.length; i++) { 


// if (mass[i] > sum ) { 
// console.log(mass[i]); 
// } 
// else if (mass[i] < sum) { 

// delete mass[i]; 
// } 
// } 
// console.log(mass); 

// } 
// calc(mas); 




// let mas=[2,5,3,5,3,8];
// function calc(mass) {

//     let c =0 ;
//     for (let i = 0; i < mass.length; i++) {
//         c += mass[i];
//     }
//      console.log(c/mass.length)
//     for (let i = 0; i < mass.length; i++) {
//        if (mass[i] < c) {
//            console.log(mass[i]);
//        }
//        else if(mass[i]>c){
//             console.log("оШИбка")
//        }   
//     }
// }
//  calc(mas);

//Создать визитку(на визитке должна быть картинка и надпись. по нажатию на картинку происходит моргание ее, по нажатию на текст он уезжает и выезжает) 








