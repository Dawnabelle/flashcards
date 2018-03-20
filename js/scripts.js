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

  $("button#woof").click(function() {
    $("ul#dog").prepend("<li>Woof!</li>");
    $("ul#cat").prepend("<li>Cat says meow back!</li>");
  });

  $("button#meow").click(function() {
    $("ul#cat").prepend("<li>Meow!</li>");
    $("ul#dog").prepend("<li>Dog says woof back!</li>");
  });
  $(".clickable").click(function() {
    $("#img-showing").toggle();
    $("#javascript-hidden").toggle();
  });

  $("button#scree").click(function() {
    $("ul#hawk").prepend("<li><img src='img/hawk.jpg'></li>");
    $("ul#goat").prepend("<li><img src='../img/goat.jpg'></li>");
  });

});
