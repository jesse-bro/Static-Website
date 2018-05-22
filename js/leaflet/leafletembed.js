var map;
var marker;
var circle;
var polygon;


map = new L.Map('mapid').setView([26.2159, -98.3253], 13);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoianZpbGxhcnJlYWxjMDEiLCJhIjoiY2poaTluamxiMjNzMTNkbjJ5YXZocmx6NSJ9.d-xmQyIXG1iP38tZRBoaGA'
}).addTo(map);

marker = L.marker([26.2159, -98.3253]).addTo(map);
circle = L.circle([26.2159, -98.3253],{
	color: 'red',
	fillColor: '#f03',
	fillOpacity: 0.5,
	radius: 1000
}).addTo(map);

	
marker.bindPopup("<b>Hello Stranger!</b><br><center>I reside here!</center>").openPopup();
