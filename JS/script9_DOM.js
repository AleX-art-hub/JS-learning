const one = document.querySelector(".one");
one.style.width = "100px";
one.style.padding = "25px";
one.style.display = "flex";
one.style.justifyContent = "center";

// one.style = {
//         width :"150px",
//         padding: "50px",
//         display:"flex",
//         justifyContent:"center",
// }
one.classList.add('two')
one.classList.remove('three')

// const btn = document.querySelector('.btn');
// btn.onclick = function (){
//     return one.classList.add('three')
// }

const toggle = document.querySelector('.toggle');
toggle.onclick = function () {
    this.classList.toggle("three");
}

// =========== Атрибут data
console.log (one.getAttribute('data'));
console.log (document.querySelectorAll("link")[0].getAttribute("href"))
console.log (document.querySelectorAll("link")[1].getAttribute("href"))

one.setAttribute("data-num", 8);

// =============== АЗС ===================
const azs = document.querySelector(".azs");
const gas =document.querySelectorAll(".gas");
const input = document.querySelector(".gallons");
const result = document.querySelector(".result");
result.style.marginBottom = "10px";
azs.style.border = "2px solid black";
azs.style.padding = "10px";
azs.style.display = "flex";
azs.style.flexDirection = "column";
azs.style.alignItems = "center";

// ============ сколько грн на какое кол-во литров.
for(let i =0 ; i< gas.length; i++){
    gas[i].onclick = function(){
        let gallons = document.querySelector(".gallons").value;
        let amount = this.getAttribute("data")
        let padding = result.style.padding = " 5px";
        let border = result.style.border= "2px solid black";
        return result.innerHTML = gallons*amount +"грн.", padding + border
    }
}
// ============ сколько литров на какое кол-во грн.
// for(let i =0 ; i< gas.length; i++){
//     gas[i].onclick = function(){
//         let gallons = document.querySelector(".gallons").value;
//         let amount = this.getAttribute("data");
//         let padding = result.style.padding = " 5px";
//         let border = result.style.border= "2px solid black";
//         return result.innerHTML = gallons / amount +"л.", padding + border
//     }
// }
// =================================================
const a = document.createElement("div");
a.innerHTML = "Goodluck";
a.classList.add("out1");
a.onclick  = function (){
    alert("Работает!!!")
}
// a.onclick  = function (){
//     a.remove("div")
// }
console.log(a);
const test = document.querySelector(".test").appendChild(a);


// ================= DZ =================

// 1.По нажатию на кнопку .b-1 функция
// присваивает блоку .out-1 ширину 200px, высоту 90px.
const btn = document.querySelector(".b-1");
const out1 = document.querySelector(".out-1");
out1.style.background = "lightgray"
btn.onclick = function () {
    out1.style.width = "200px"
    out1.style.height = "100px"

}

// 2.По нажатию на кнопку .b-2 функция f2,
//которая присваивает блоку .out-2 класс .bg-orange.
const btn2 = document.querySelector(".b-2");
const out2 = document.querySelector(".out-2");
btn2.onclick = function () {
    out2.classList.add("bg")
    alert("Добавило класс bg")
}


// 3.По нажатию кнопки .b-3 запускайте функцию f3,
// которая удаляет у блока .out-3 класс .bg-orange.
const btn3 = document.querySelector(".b-3");
const out3 = document.querySelector(".out-3");
btn3.onclick = function () {
    out3.classList.remove("bgorange")
    alert("Удалило класс bgorange")
}