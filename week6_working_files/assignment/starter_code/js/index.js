// Get document ready
$(document).ready(function() {
  console.log("document loaded");

  // Store city data into array
  var citydata = ["NYC", "SF", "LA", "ATX", "SYD"]
  var opts = '';

  // Use a for loop to assign values to <select> html text-align
  for (var i = 0; i < citydata.length; i++) {
    opts += '<option value="' + citydata[i] + '">' + citydata[i] + '</option>';
    // console.log(opts);
  }

  // Append array of data into html
  $('#city-type').append(opts);

  // Validation check on user input change
  $("#city-type").change(function() {

    // Capture value of user input
    var cityvalue = $("select option:selected").val();

    // Validation check with if else conditionals
    if (cityvalue === "NYC") {
      // change background image class
      $("body").attr('class', 'nyc');
    } else if (cityvalue === "SF") {
      $("body").attr('class', 'sf');
    } else if (cityvalue === "LA") {
      $("body").attr('class', 'la');
    } else if (cityvalue === "ATX") {
      $("body").attr('class', 'austin');
    } else if (cityvalue === "SYD") {
      $("body").attr('class', 'sydney');
    } else {
      alert("Oops! An error has occurred. Please try again!")
    }
  })
});
