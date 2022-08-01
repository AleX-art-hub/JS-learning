// ======== MAP ===========
let arr = [5,6,100,7,99,0,-2,-20,]
// ======= Вариант 1 ==========
let b = arr.map(function(item, index){
    console.log(item)
    return item * 2
})
// ======= Вариант 2 ==========
// let b = arr.map((item, index)=> item * 2)
console.log(b)


// ============== Filter ===========

let c = arr.filter(function(item, index){
    // if(item % 2 == 0){// выводит все четные елементы
    //     return true
    // }
    if(item > 0){// выводит все елементы ,больше 0
        return true
    }
})
console.log(c)

// =========== DZ ==========
console.log("=========== Задача 1 ==========")

// 1.Дан массив a1 = [4, 5, 6, 7, 12, 34, 56, 78, 90, 11]
// - с помощью map переберите массив и создайте новый массив
// a1_res куда добавьте элементы данного массива умноженные на 2.
// Возвратите массив a1_res.
let a1 = [4, 5, 6, 7, 12, 34, 56, 78, 90, 11];
// let a1_res = a1.map(function(item,index){
//     return item * 2
// })
let a1_res = a1.map(item =>item * 2)// упрощенный стиль
console.log(a1)
console.log(a1_res)

console.log("=========== Задача 2 ==========")
// 2.Дан массив a2= [2,3,4,5,10,11,12]
// - с помощью map переберите массив и создайте массив
// a2_res куда добавьте элементы данного массива возведенные
// во вторую степень. Возвратите массив a2_res.
// Действия должны запускаться при вызове функции t2.
let a2= [2,3,4,5,10,11,12];
//const btn1 = document.querySelector('.btn1');
function t2(){
    // let a2_res = a2.map(function(item, index){
    //     return item **2
    //     }
    // )
    let a2_res = a2.map(item => item **2)
    console.log(a2_res)
}
// btn1.onclick = t2;
t2()

console.log("=========== Задача 3 ==========")
// 3.Дан массив a3 = [4,"3",6,7,"12",34,"56",78,90,11]
// - с помощью map переберите массив и создайте массив
// a3_res куда добавьте все элементы преобразованные к числу.
// Возвратите a3_res. Действия должны запускаться при вызове функции t3.
let a3 = [4,"3",6,7,"12",34,"56",78,90,11];
function t3(){
    let a3_res = []
    a3.map(function(item){
        if(typeof item === 'number'){
            a3_res.push(item)
        }
    })
    console.log(a3_res)
}
t3();
