$(document).ready( function() { 

$(".top-cat").hide(); 

var win_h = $(window).height(); 

$(window).scroll(function () { 

if($(this).scrollTop() > win_h) { 
$(".top-cat").fadeIn(500); 
} 

if($(this).scrollTop() < win_h) { 
$(".top-cat").fadeOut(500); 
} 
}); 

$(".top-cat").click(function () { 
$.scrollTo(`1300`,0,600); 

}); 
});