function fn(param) {
   if (param == '+' || param == '-' || param == '%' || param == '/' || param == '*') {
      document.getElementById("typed").innerHTML += param;
      document.getElementById("typing").innerHTML = '';
   }
   else {
      document.getElementById("typed").innerHTML += param;
      document.getElementById("typing").innerHTML += param;
   }
}


function result() {
   let res = eval(document.getElementById("typed").innerHTML)
   document.getElementById("typing").innerHTML = res
}

function cl() {
   document.getElementById("typing").innerHTML = '0'
}
function ce() {
   document.getElementById("typing").innerHTML = '0'
 document.getElementById("typed").innerHTML= ''
}