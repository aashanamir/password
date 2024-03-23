// Variables
let passwrod = "";
let passLength = 8;
let myArr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
let num = "1234567890";
let symbols = "@#$!%^&*()?><.,/|}{+_=-=~`}";


// Dom Variables
let passChar = document.getElementById("passChar");
let passFeild = document.getElementById("passFeild");
let range = document.getElementById("range");
let charCheck = document.getElementById("charCheck");
let numCheck = document.getElementById("numCheck");
let btn = document.getElementById("btn");
let copyText = passFeild;





// Calling My Function
genPassword();


range.addEventListener("change" , ()=>{
  passLength = range.value;
  genPassword();
})



btn.addEventListener("click", () => {
  window.navigator.clipboard.writeText(passFeild.value)
  copyText.select()
});