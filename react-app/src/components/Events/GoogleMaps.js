// Create the script tag, set the appropriate attributes
var script = document.createElement('script');
script.src = 'https://maps.googleapis.com/maps/api/js?key= {API KEY HERE} &callback=initMap';
script.async = true;

// Attach your callback function to the `window` object
window.initMap = function() {
  // JS API is loaded and available
  var mapOptions = {
    center: new google.maps.LatLng(-34.397, 150.644),
    zoom: 8,
    mapTypeId: google.maps.mapTypeId.ROADMAP
  };
  var map = new google.maps.Map(document.getElementById('map_canvas'), mapOptions);
};

// Append the 'script' element to 'head'
document.head.appendChild(script);
