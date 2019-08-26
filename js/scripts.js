console.log('my script is working')
$('#bulbOn').hide();
$('#switchOff').hide();


$(document).ready(function(){
  $('body').click(function(){
    $(this).addClass('myClass');
    $('h1').css('opacity', '0.5').css('font-size','40px');

    // Bulb on and Off
  $('#switchOn').click(function(){
    $('#bulbOn').show();
    $('#bulbOff').hide();
    $('#switchOff').show();
    $('#switchOn').hide();
  });

  $('#switchOff').click(function(){
    $('#bulbOff').show();
    $('#bulbOn').hide();
    $('#switchOn').show();
    $('#switchOff').hide();
  });

// camera Off Switch
  $('#cameraOffSwitch').click(function(){
    $('#circle').show();
  });

});


  $('#heading').draggable();
  $('#subHeading').droppable();
});


$( function() {
   $( "#resizable" ).resizable();
 } );


 $( function() {
     $( "#selectable" ).selectable();
   } );


 $( function() {
    $( "#sortable" ).sortable();
    $( "#sortable" ).disableSelection();
} );
