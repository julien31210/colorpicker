$(document).ready (function () {

	
  var red = 128; 
  var green = 128; 
  var blue = 128;

  var Red = 128;
  var Green = 128;
  var Blue = 128; 

  $('#body').css({'background-color': 'rgb('+ red + ', ' +  green + ', ' + blue + ')'});


  $('#R').on("change mousemove",function(){
    red = $(this).val();
    $('#body').css({'background-color': 'rgb('+ red + ', ' +  green + ', ' + blue + ')'});
    console.log($('#R').val(), $('#G').val(), $('#B').val());
  });
  $('#G').on("change mousemove",function(){
    green = $(this).val();
    $('#body').css({'background-color': 'rgb('+ red + ', ' +  green + ', ' + blue + ')'});
    console.log($('#R').val(), $('#G').val(), $('#B').val());
  });
  $('#B').on("change mousemove",function(){
   blue = $(this).val();
   $('#body').css({'background-color': 'rgb('+ red + ', ' +  green + ', ' + blue + ')'});
   console.log($('#R').val(), $('#G').val(), $('#B').val());


   $('#r').on("change mousemove",function(){
     $('#body').css({'background-color && linear-gradiant': 'rgb('+ red + ', ' +  green + ', ' + blue + ')',:'rgba('+ Red + ', ' +  Green + ', ' + Blue + ') '});
     console.log($('#r').val(), $('#g').val(), $('#b').val());

      $('#g').on("change mousemove",function(){
       $('#body').css({'background-color && linear-gradiant': 'rgb('+ red + ', ' +  green + ', ' + blue + ')':'rgba('+ Red + ', ' +  Green + ', ' + Blue + ') '});
       console.log($('#r').val(), $('#g').val(), $('#r').val());

       $('#b').on("change mousemove",function(){
         $('#body').css({'background-color && linear-gradiant': 'rgb('+ red + ', ' +  green + ', ' + blue + ')':'rgba('+ Red + ', ' +  Green + ', ' + Blue + ') '});
         console.log($('#r').val(), $('#g').val(), $('#b').val());
       });

     });