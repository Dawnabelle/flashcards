$(document).ready(function() {
  $(".clickable").click(function() {
    $("#javascript-showing").toggle();
    $("#javascript-hidden").toggle();
  });
  $(".clickable2").click(function() {
    $("#operators-showing").toggle();
    $("#operators-hidden").toggle();
  });
  $(".clickable3").click(function() {
    $("#variables-showing").toggle();
    $("#variables-hidden").toggle();
  });
  $(".clickable4").click(function() {
    $("#variableNaming-showing").toggle();
    $("#variableNaming-hidden").toggle();
  });
});
