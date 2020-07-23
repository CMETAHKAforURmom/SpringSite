var btn_menu = document.getElementById("menu");
var btns = document.getElementById("btns");
var is_open = false;
var logo = document.getElementById('logo');
var t;
var contact = document.getElementById('btn_contact');
var contact_popup = document.getElementById('contact_us');
var is_writing = false;
function up(){
    var top = Math.max(document.body.scrollTop,document.documentElement.scrollTop);
	if(top > 0) {
		window.scrollBy(0,-100);
		t = setTimeout('up()',20);
	} else clearTimeout(t);
	return false;
}
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

logo.onclick = up;

contact.addEventListener('click', function(){

    if(!is_writing){
        contact_popup.style.display = "block";
        is_writing = true;
    }else{
        
    contact_popup.style.display = "none";
    is_writing = false;
    }
}, true);