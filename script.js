/* Ancoragem */
$('nav a').click(function(e) {
 e.preventDefault();
 var id = $(this).attr('href'),
    target0ffset = $(id).offset().top,
    menuHeight = $('nav').innerHeight();

    $('html, body').animate({
        scrollTop: target0ffset - menuHeight
    }, 250);
});

$('footer a').click(function(e) {
    e.preventDefault();
    var id = $(this).attr('href'),
       target0ffset = $(id).offset().top,
       menuHeight = $('nav').innerHeight();
   
       $('html, body').animate({
           scrollTop: target0ffset - menuHeight
       }, 250);
   });