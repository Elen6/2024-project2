let btn = document.querySelector("#btn");
let sidebar = document.querySelector(".sidebar");
let searchBtn = document.querySelector(".bx-search");


btn.onclick = function() {
    sidebar.classList.toggle("active");
}


 searchBtn.onclick = function() {
    sidebar.classList.toggle("active");
 }



function myFunction() {
    let input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.querySelector(".nav_list");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}






// sarqel mi proyect, vori mej 2-n el ka
// logini ejum bag@ hanel ikonkayi ijnelu
// logini batn@ sirunacnel
// ete login@ cishta piti beri es erkrord proyekt@, redirect-@ ov
// ikonkeq@ mejtexum lini foni 
// unenam zangvac vori mej lini mi qani ban 10, search-ov uzacs gtnem , ete ka tpi ka, chka , tpi chka
// dzel guyn@ manushaki 
// registri vra sexmes gna registri dasht u grancum lini nkari aploud-ov 


