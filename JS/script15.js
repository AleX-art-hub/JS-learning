let a = new Set();
console.log(a);

// ========= метод (add) добавляет элемент =============
a.add(5);
a.add(8);
a.add("Stroka");
console.log(a);
console.log(a[0]);// не выведет
console.log(a.length);// не выведет длину
console.log(a.size);//выведет кол-во элементов

a.add(1);// если добавить елемент который уже добавляли, то он не добавится
console.log(a);

a.add("1");
console.log(a);

// ========= метод (clear) очищает массив Set =============
// a.clear(); //очищает массив Set
// console.log(a);

// ========= метод (delete) удаляет значение =============
//a.delete("Stroka");// удаляет какое-то значение
//console.log(a);

// ========= метод (has) проверяет на наличие  =============
console.log(a.has(9));
console.log(a.has(5));

for(let item of a){
    console.log(item);
}

let arr = [1,2,3,4,5,6,"hello", 5,1,3];
let b = new Set(arr)
console.log(b);
console.log(b.size);
let bArr = Array.from(b)
console.log(bArr)


// =========== DZ =========
// 1. Создайте set s1. Добавьте в него три элемента 'h', 'b', 'o', 'h'.
//Добавление делайте через add.
//Выведите в консоль получившийся набор (set) s1.
const s1 = new Set();
s1.add('h')
s1.add('b')
s1.add('o')
s1.add('h')
console.log(s1);
console.log(s1.size)
for (let item of s1 ){
    console.log(item);
}
let arr2 = Array.from(s1)
console.log(arr2);
arr2.push('a');
console.log(arr2);
// 2.При нажатии b-2 выполняете функцию f2.
//Функция должна добавить в набор s2 элементы,
//которые пользователь вводит в i-2.
//Функция должна выводить в консоль s2 после каждого добавления элемента.
const out1 = document.querySelector('#out');
const btn1 = document.querySelector('#btn1');
const i2 = document.querySelector('#input');
btn1.onclick = function(){
    let s2 = new Set()
    s2.add(i2.value);
    console.log(s2)
    i2.value = ''
}


// 3.При нажатии b-3 выполняете функцию f3.
//Функция должна удалить из набора s3 строку,
//которую пользователь вводит в i-3.
//Функция должна выводить в консоль s3 после каждого удаления элемента.
const out2 = document.querySelector('#out1');
const btn2 = document.querySelector('#btn2');
const i1 = document.querySelector('#input1');
btn2.onclick = function(){
    let s3 = new Set(['medium','start','easy','hard','string'])
    s3.delete(i1.value)
    console.log(s3)
}