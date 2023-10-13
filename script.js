let passwardbox= document.getElementById("box")
const length = 12;
const uppercase="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowercase="abcdefghijklmnopqrstuvwxyz"
const number= "0123456789"
const symbols= "@$&-_+=.,?[]{}()^"

const allchart= uppercase+lowercase+number+symbols;

function  createpassward() {
          let passward = "";
          passward += uppercase[Math.floor(Math.random()* uppercase.length)];
          passward += lowercase[Math.floor(Math.random()* lowercase.length)];
          passward += number[Math.floor(Math.random()* number.length)];
          passward += symbols[Math.floor(Math.random()* symbols.length)];
          while (length > passward.length) {
          passward += allchart[Math.floor(Math.random()* allchart.length)];
}
passwardbox.value = passward
}
function copypass() {
          passwardbox.select();
          document.execCommand("copy")
          
}
 
          
