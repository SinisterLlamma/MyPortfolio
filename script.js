function toggleMenu() {
  const menu = document.querySelector('.menu-links');
  const icon= document.querySelector('.menu-icon');
  menu.classList.toggle('open');
  icon.classList.toggle('open');
}

var icon=document.getElementById("light-icon");
icon.onclick=function(){
document.body.classList.toggle("dark-theme");

}
var icon2=document.getElementById("light-icon-hamburger");
icon2.onclick=function(){
document.body.classList.toggle("dark-theme");

}
window.onload = function() {
    var logo = document.getElementById('load_name');
    var text = logo.textContent;
    var i = 0;
    logo.textContent = '';

    function typeWriter() {
        if (i < text.length) {
            logo.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100); // Adjust speed as needed
        }
    }

    typeWriter();
};