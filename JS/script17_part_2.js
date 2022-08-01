let arr = "hello,hi,mahai"
console.log(arr.split(','))
let arr1 = [9,7,5,3,1]
console.log(arr1.join(":"))

arr1.forEach(function(item, index){
    console.log(index)
    console.log(item **3)
    console.log("=========")

})

console.log("=========== Задача 1 ==========")
// 1.Дан массив a1 = [4,5,6,7,12,34,56,78,90,11]
// - с помощью forEach переберите массив и создайте
// новый массив a1_res куда добавьте элементы данного массива умноженные на 2.
let a1 = [4,5,6,7,12,34,56,78,90,11];
function t1(){
    let a1_res = []
    a1.forEach(function(item){
            a1_res.push(item *2)
        }
    )
    console.log(a1_res)
}
t1();


console.log("=========== Задача 2 ==========")
// 2.Дан массив a2 = [2,3,4,5,10,11,12]
// - с помощью forEach переберите массив и создайте
// новый массив a2_res куда добавьте элементы данного массива деленные на 2.
let a2 = [2,3,4,5,10,11,12]
function t2(){
    let a2_res = []
    a2.forEach(function(item){
            a2_res.push(item / 2)
        }
    )
    console.log(a2_res)
}
t2();
console.log("=========== Задача 3 ==========")
// 3.Дан массив a3 = [8, "london", 7, "is", 9, "blue"];
// - с помощью forEach перебрать массив и создатьт
// новый массив a3_res куда добавить элементы данного массива являющиеся числом.



let a3 = [8, "london", 7, "is", 9, "blue"];
function t3(){
    let a3_res = []
    a3.forEach(function(item){
            if(typeof item === "number"){
                a3_res.push(item)
            }
        })
        console.log(a3_res)
}
t3();
