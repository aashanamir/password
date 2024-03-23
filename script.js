// Variables
let passwrod = "";
  let passLength = 10;
  let isNum = false;
  let isSymbol = false;
  let myArr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  let num = "1234567890";
  let symbols = "@#$!%^&*()?><.,/|}{+_=-=~`}";

  // Dom Variables
  let passChar = document.getElementById("passChar");
  let passFeild = document.getElementById("passFeild");
  let charCheck = document.getElementById("charCheck");
  let numCheck = document.getElementById("numCheck");
  let btn = document.getElementById("btn");
  let copyText = passFeild.value;


// Functions

  function genPassword() {
    if (isNum) myArr += num;
    if (isSymbol) {
      myArr += symbols
    } else {
      myArr = myArr;
    }
    for (let i = 0; i < passLength; i++) {
      let pushPassword = Math.floor(Math.random() * myArr.length);

      passwrod += myArr.charAt(pushPassword);
    }

    passFeild.value = passwrod;

    passwrod = "";
    passChar.innerHTML = passLength;
  }


  function addSymb() {
    if (charCheck.checked == true) {
      isSymbol = true;
    }
    else {
      isSymbol = false;
    }
    genPassword();
  }

  function addNum() {
    isNum = !isNum;
    genPassword();
  }

// Calls
  genPassword();






btn.addEventListener("click", () => {
    window.navigator.clipboard.writeText(passFeild.value)
        .then(() => alert("Password copied to clipboard!"))
        .catch(err => console.error("Error copying text: ", err));
});


charCheck.addEventListener("change", addSymb);
numCheck.addEventListener("change", addNum);