$(document).ready(function(){
	$('.parallax-container').css('height', window.innerHeight)
  AOS.init();
   $('.parallax').parallax();
   $('.collapsible').collapsible();
   $('.scrollspy').scrollSpy();
   $('.tooltipped').tooltip({delay: 50});
   window.onresize = function(event) {
    $('.parallax-container').css('height', window.innerHeight)
};
   $(window).scroll(function () {

                 // set distance user needs to scroll before we start fadeIn
            if ($(this).scrollTop() > window.innerHeight) {
                $('.nav-head').fadeIn("fast");
            } else {
                $('.nav-head').fadeOut("fast");
            }
        });
});
//--------------------------Analytics-------------------------------------------
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-105150607-1', 'auto');
ga('send', 'pageview');
//---------------------------SideNav--------------------------------------------
function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}
