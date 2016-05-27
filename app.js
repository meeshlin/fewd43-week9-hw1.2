//Step 1: Set up your page to work with jQuery, Handlebars, Handle.js, and your custom app.js
//Step 2: Set up the appropriate HTML in index.html to act as a template
//Step 3: Make a GET request to the Wines API
//Step 4: Show data via the template UI on the page with Handle.js

$(document).ready(function() {

  $.ajax({
    type: "GET",
    url: "https://myapi.profstream.com/api/2ec930/wines",
    success: function(wines) {
      HANDLE.renderTemplate({
        templateSource: "#wine-div",
        data: wines,
        where: ".container",
        clearOriginal: false
      });
    },
    error: function() {
      alert("Error getting wine");
    }
  });

});
