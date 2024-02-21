

function sendEmail() {
  let val1 = document.querySelector('#email').value;
  let val2 = document.querySelector('#password').value;
  function check(str, string) {
    let substr = "@"
    if (str.includes(substr) && string.length >= 8) {
    window.location.href = "sidebar.html";
  
      //  alert(val1 + " " + val2)
    }
    else {
      alert("this is wrong answer")
    }
  }
  check(val1, val2)
}








