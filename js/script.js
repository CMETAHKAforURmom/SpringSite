var btn_menu = document.getElementById("menu");
var btns = document.getElementById("btns");
var is_open = false;
btn_menu.addEventListener('click', function(){
    console.log("Click");
    if(is_open){

        is_open = false;
        btns.style.visibility = "hidden";
        btns.style.opacity = 0;
    }else{
        is_open = true;
        btns.style.visibility = "visible";
        btns.style.opacity = 1;
    }
}, true);