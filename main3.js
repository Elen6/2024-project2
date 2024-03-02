
function sendEmail() {
    let val1 = document.querySelector('#email').value;
    let val2 = document.querySelector('#password').value;
    let val3 = document.querySelector('#name').value;
    let val4 = document.querySelector('#username').value;

    function check(str, string) {
      let substr = "@"
      if (str.includes(substr) && string.length >= 8) {
    
        alert(  val3 + " " + val4 + " " +  val1 + " " + val2)
      }
      else {
        alert("this is wrong answer")
      }
    }
    check(val1, val2)
  }

  let loadFile = function(event) {
    let image = document.getElementById('output');
    image.src = URL.createObjectURL(event.target.files[0]);
  };