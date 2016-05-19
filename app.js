var main = function() {
  var cities = [
      "Kharkov","Sumi","Lyubotin"
    ];
    $( "#city" ).autocomplete({
      source: cities
    });
}
 
$(document).ready(main);