// JavaScript Document
var position= document.getElementById("searchCity");
var Geo={};
function getLocation() {
if (navigator.geolocation) {
navigator.geolocation.getCurrentPosition(success,shoError);
}
else {
alert('Geolocation is not supported');
}
}
function showError(error) {
    switch(error.code) {
        case error.PERMISSION_DENIED:
            x.innerHTML = "User denied the request for Geolocation."
            break;
        case error.POSITION_UNAVAILABLE:
            x.innerHTML = "Location information is unavailable."
            break;
        case error.TIMEOUT:
            x.innerHTML = "The request to get user location timed out."
            break;
        case error.UNKNOWN_ERROR:
            x.innerHTML = "An unknown error occurred."
            break;
    }
}

function success(position) {
      Geo.lat = position.coords.latitude;
      Geo.lng = position.coords.longitude;
	  var key = "1165e94c5fbccd61";
var Weather = "http://api.wunderground.com/api/”+ key +”/forecast/geolookup/conditions/q/" + Geo.lat + "," + Geo.lng + ".json";
$.ajax({
url : Weather,
dataType : "jsonp",
success : function(data) {
// get all the information
var location =data['location']['city'];
var temp = data['current_observation']['temp_f'];
var img = data['current_observation']['icon_url'];
var desc = data['current_observation']['weather'];
var wind = data['current_observation']['wind_string'];
}
});
//setting the spans to the correct parameters
$('#location').html(location);
$('#temp').html(temp);
$('#desc').html(desc);
$('#wind').html(wind);
//filling the image src attribute with the image url
$('#img').attr('src', img);
}