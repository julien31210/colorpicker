$(document).ready (function () {

	
    var red = 128; 
    var green = 128; 
    var blue = 128;
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
 });





});