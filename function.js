// Functions
function genPassword() {


  if (numCheck.checked) {
    myArr += num;
  }
  else {
    myArr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  }

  if (charCheck.checked) {
    myArr += symbols;
  }
  else {
    myArr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
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
  genPassword();
}

function addNum() {
  genPassword();
}
