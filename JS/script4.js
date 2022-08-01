//  ========  Формы INPUT, PANGE, TEXTAREA, CHECKBOX

//Стрелочная ананимная функция!!
const one = (document.querySelector("#one"));
const btn11 = document.querySelector(".btn1").onclick = ()=>{
    console.log(one.value);
    // document.querySelector("button").style.backgroundColor = one1.value;
}
// ======= Color ========
const one1 = (document.querySelector("#one1"));
const btn2 = document.querySelector(".btn2").onclick = ()=>{
    console.log(one1.value);
    // document.querySelector("button").style.backgroundColor = one1.value;
}
// ======== Date ========
const one2 = (document.querySelector("#one2"));
const btn3 = document.querySelector(".btn3").onclick = ()=>{
    console.log(one2.value);
    // document.querySelector("button").style.backgroundColor = one1.value;
}

// ======== Ползунок =======
const ranger = document.querySelector(".ranger");
const one3 = (document.querySelector("#one3"));
const btn4 = document.querySelector(".btn4").onclick = ()=>{
    console.log(one3.value);
    // document.querySelector("button").style.backgroundColor = one1.value;
}
one3.oninput = ()=> {
    return ranger.innerHTML = one3.value;
    // console.log(one3.value);
}

// ===== CheckBoX ======
const i2 = document.querySelector("#i2");
const btn1 = document.querySelector("#btn-1").onclick = () => {
    console.log(i2.checked);
    if (i2.checked){

    }else{

    }
};

// ======== TextArea, form  ======

const text = document.querySelector("#two");
const btn5 = document.querySelector("#btn5");
btn5.onclick = (event) => {
    event.preventDefault();
    // console.log(text.value);
    // text.value = "one";
    const form = document.querySelector("form");
    console.log(form);
    console.log(form.elements.two.value);
    console.log(form.elements.three.value);
}

// Имя функции даём в том случае если будем вызывать её ещё несколько раз
function myFunc(){}



//  ======== DZ =======

// 1.При нажатии (click) на
// .b-1 запускайте f1, которая выводите в .out-1 число 1.
const out1 = document.querySelector(".out-1");
const b1 = document.querySelector(".b-1").onclick = () => {
    return out1.innerHTML = "1";
}


// 2.При нажатии (click) на .i-2 запускайте f2,
// которая выводите в .out-2 число 2. Т.е. как видите,
// мы можем повесить клик на любой элемент.
const out2 = document.querySelector(".out-2");
const input = document.querySelector(".i-2").onclick = () => {
    input.value = "2";
    return out2.innerHTML = input.value;
}

// 3.При нажатии (click) на .p-3 запускайте f3,
// которая выводите в .out-3 число 3. Т.е. как видите,
// мы можем повеcить клик на любой элемент.

const out3 = document.querySelector(".out-3");
const p1 = document.querySelector(".p-1");
const but = document.querySelector(".but-1").onclick = () => {
    p1.value = "10"
    return out3.innerHTML = p1.value;
};
