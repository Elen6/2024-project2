

// function sendEmail() {
//     let email = document.querySelector("#email")

//     let password = document.querySelector("#password")
//     alert(email.value + " " + password.value)

// }

// function sendEmail() {
//     let val1 = document.querySelector('#email').value;
//     let val2 = document.querySelector('#password').value;

//     console.log(val1 + " " + val2)
//     }

function sendEmail() {
    let val1 = document.querySelector('#email').value;
    let val2 = document.querySelector('#password').value;
 
 
    function check(str, string) {
      let substr = "@"
      if (str.includes(substr) && string.length >= 8 ) {
      alert(val1 + " " + val2)
      }
      else  {
        alert("this is wrong answer")
      }
    }
 
    check(val1, val2)
  }








