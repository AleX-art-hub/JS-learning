let a = [1,2,3,4,5,6,7,8,9];
let b = ["a","b","c","d","e","f"];

//===== Метод PUSH добавляет значение в конец масива
console.log(a.length);
console.log(a.push(10));
console.log(a)
b.push("1","B");
console.log(b);
//===== Метод POP удаляет последнее значение массива
b.pop()
b.pop()
console.log(b);

// удалить элемент внутри массива
//delete не влияет на длину массива
delete a[3];
console.log(a);
a.splice(3,4, "hi");//первыя тройка показывает с какого отсчет,
//а втораe число указывает сколько элементов надо удалить
console.log(a)


// 1.Есть массив d1, кнопка b-1, input i-1.
//Напишите функцию f1, которая при нажатии читает i-1
//и добавляем его в массив. После чего выводит массив в .out-1.
//Поскольку мы будем выводить массив d1 неоднократно,
//то давайте вывод массива сделаем отдельной функцией,
//showArr - она подготовлена. Изучите ее - это хороший способ
//оптимизировать код.     d1 = [33,'best', 66, 'best'];

const btn1 = document.querySelector(".btn1");
const input = document.querySelector(".i-1");
const out1 = document.querySelector(".out1");
let d1 = [33, 'best', 66, 'best'];

btn1.onclick = function f1(){
    d1.push(input.value)
    input.value = "";
    return out1.innerHTML = `[${d1}]`
}
// console.log(d1.push(input.value));



// 2.Напишите функцию f2, которая применяет метод pop
// к массиву d1, а затем выводит его (showArr) в .out-2
const btn2 = document.querySelector(".btn2");
const out2 = document.querySelector(".out2");

btn2.onclick = function f2(){
    d1.pop();
    return out2.innerHTML = `[${d1}]`
}


// 3.Напишите функцию f3, которая применяет метод
//shift к массиву d1, а затем выводит его (showArr) в .out-3
const btn3 = document.querySelector(".btn3");
const out3 = document.querySelector(".out3");

btn3.onclick  = function(){
    d1.shift()
    return out3.innerHTML = `[${d1}]`
}
