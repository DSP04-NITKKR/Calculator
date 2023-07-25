let display = document.getElementById('display')
let one = document.getElementById('one')
let two = document.getElementById('two')
let three = document.getElementById('three')
let four = document.getElementById('four')
let five = document.getElementById('five')
let six = document.getElementById('six')
let seven = document.getElementById('seven')
let eight = document.getElementById('eight')
let nine = document.getElementById('nine')
let zero = document.getElementById('zero')
let decimal = document.getElementById('decimal')
let equals = document.getElementById('equals')
let add = document.getElementById('add')
let subtract = document.getElementById('subtract')
let multiply = document.getElementById('multiply')
let divide = document.getElementById('divide')
let clear = document.getElementById('clear')
let displayed = true;

clear.onclick = function(){
  this.classList.add("active");
    setTimeout(function () {
      clear.classList.remove("active");
    }, 300);
  display.innerText = "0";
  displayed = "true";
};

zero.onclick = function(){
  if(displayed){
    display.innerText = ""
    displayed = false;
  }
  display.innerText = display.innerText + "0";
  zero.classList.add("active");
    setTimeout(function () {
      zero.classList.remove("active");
    }, 300);
}
one.onclick = function(){
  if(displayed){
    display.innerText = ""
    displayed = false;
  }
  display.innerText = display.innerText + "1";
  this.classList.add("active");
    setTimeout(function () {
      one.classList.remove("active");
    }, 300);
}
two.onclick = function(){
  if(displayed){
    display.innerText = ""
    displayed = false;
  }
  display.innerText = display.innerText + "2";
  this.classList.add("active");
    setTimeout(function () {
      two.classList.remove("active");
    }, 300);
}
three.onclick = function(){
  if(displayed){
    display.innerText = ""
    displayed = false;
  }
  display.innerText = display.innerText + "3";
  this.classList.add("active");
    setTimeout(function () {
      three.classList.remove("active");
    }, 300);
}
four.onclick = function(){
  if(displayed){
    display.innerText = ""
    displayed = false;
  }
  display.innerText = display.innerText + "4";
  this.classList.add("active");
    setTimeout(function () {
      four.classList.remove("active");
    }, 300);
}
five.onclick = function(){
  if(displayed){
    display.innerText = ""
    displayed = false;
  }
  display.innerText = display.innerText + "5";
  this.classList.add("active");
    setTimeout(function () {
      five.classList.remove("active");
    }, 300);
}
six.onclick = function(){
  if(displayed){
    display.innerText = ""
    displayed = false;
  }
  display.innerText = display.innerText + "6";
  this.classList.add("active");
    setTimeout(function () {
      six.classList.remove("active");
    }, 300);
}
seven.onclick = function(){
  if(displayed){
    display.innerText = ""
    displayed = false;
  }
  display.innerText = display.innerText + "7";
  this.classList.add("active");
    setTimeout(function () {
      seven.classList.remove("active");
    }, 300);
}
eight.onclick = function(){
  if(displayed){
    display.innerText = ""
    displayed = false;
  }
  display.innerText = display.innerText + "8";
  this.classList.add("active");
    setTimeout(function () {
      eight.classList.remove("active");
    }, 300);
}
nine.onclick = function(){
  if(displayed){
    display.innerText = ""
    displayed = false;
  }
  display.innerText = display.innerText + "9";
  this.classList.add("active");
    setTimeout(function () {
      nine.classList.remove("active");
    }, 300);
}
add.onclick = function(){
  if(displayed){
    display.innerText = "0"
    displayed = false;
  }
  display.innerText = display.innerText + "+";
  this.classList.add("active");
    setTimeout(function () {
      add.classList.remove("active");
    }, 300);
}
subtract.onclick = function(){
  if(displayed){
    display.innerText = "0"
    displayed = false;
  }
  display.innerText = display.innerText + "-";
  this.classList.add("active");
    setTimeout(function () {
      subtract.classList.remove("active");
    }, 300);
}
multiply.onclick = function(){
  if(displayed){
    display.innerText = "0"
    displayed = false;
  }
  display.innerText = display.innerText + "*";
  this.classList.add("active");
    setTimeout(function () {
      multiply.classList.remove("active");
    }, 300);
}
divide.onclick = function(){
  if(displayed){
    display.innerText = "0"
    displayed = false;
  }
  display.innerText = display.innerText + "/";
  this.classList.add("active");
    setTimeout(function () {
      divide.classList.remove("active");
    }, 300);
}

decimal.onclick = function(){
  if(displayed){
    display.innerText = "0"
    displayed = false;
  }
  display.innerText = display.innerText + ".";
  this.classList.add("active");
    setTimeout(function () {
      decimal.classList.remove("active");
    }, 300);
}

equals.onclick = function(){
  this.classList.add("active");
    setTimeout(function () {
      equals.classList.remove("active");
    }, 300);
  let disp = display.innerText
  display.innerText = disp + " = " + eval(disp)
  displayed = true;
}
