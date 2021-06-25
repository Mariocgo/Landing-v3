//-- Mapa

var locations = [
    ['Gasolinera 1', 20.9790302, -89.6046403, 1, 'https://www.google.com.mx/maps/place/Estación+de+Servicio+Gulf/@21.0005776,-89.5978532,19z/data=!4m6!3m5!1s0x0:0x6480c308b637285!8m2!3d21.00116!4d-89.59612!15sCgtnYXNvbGluZXJhc5IBC2dhc19zdGF0aW9u'],
    ['Gasolinera 2', 20.9969328, -89.6237122, 2, 'https://www.google.com.mx/maps/place/Gasolinera+Pemex/@20.986645,-89.5886095,14z/data=!4m9!1m2!2m1!1sgasolinera!3m5!1s0x0:0xc0c57e04e5403c26!8m2!3d20.981267!4d-89.589375!15sCgpnYXNvbGluZXJhkgELZ2FzX3N0YXRpb24'],
    ['Gasolinera 3', 21.0005776, -89.5978532, 3, 'https://www.google.com.mx/maps/place/Gasolinera+Pemex/@20.986645,-89.5886095,14z/data=!4m9!1m2!2m1!1sgasolinera!3m5!1s0x0:0xeb1cce0492e1abd9!8m2!3d20.9744165!4d-89.5857821!15sCgpnYXNvbGluZXJhkgELZ2FzX3N0YXRpb24'],

  ];


function initMap() {
  
    const myLatLng = { lat: 20.9790302, lng: -89.6046403 };
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 12,
      center: myLatLng,
    });
    var infowindow = new google.maps.InfoWindow();

    var marker, i;

    for (i = 0; i < locations.length; i++) {  
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
        map: map
      });

      google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
          infowindow.setContent(locations[i][0]);
          window.location.href = locations[i][4]
          infowindow.open(map, marker);
        }
      })(marker, i));
  }}