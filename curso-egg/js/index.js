function navegation (arg){

$( ".container" ).each(function( index ) {
        // $( this ).removeClass("active");

        $( this ).slideUp( "slow", function() {
            // Animation complete.
          });
  });

//$(".nav-"+arg).addClass("active");

$(".nav-"+arg).slideDown( "slow", function() {
    // Animation complete.
  });


$( ".colum-nav" ).each(function( index ) {
    $( this ).removeClass("activenav");
});


$(".nav-item-"+arg).addClass("activenav");

}