var map = L.map('map',{scrollWheelZoom:false}).setView([3.152930,101.718170], 15);
   
    
var basemap= L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Data by <a href="http://badanwarisanmalaysia.org">BadanWarisanMalaysia</a>'
    }).addTo(map);



var BWMIcon = L.icon({
     iconUrl: 'https://secure.gravatar.com/blavatar/44dd01fd31b85067e765c7c370648c49?s=200&amp;ts=1574683208',
    iconSize: [85,75],
 });

var customPopup = "<b>Badan Warisan Malaysia</b><br>Since 1982</br><br/>In 1995, Badan Warisan Malaysia restored and adapted a 1925 colonial bungalow at No. 2 Jalan Stonor into a Heritage Center. This building has seen many owners and uses throughout the seventy years that has passed since its construction.</br><img src='https://lh5.googleusercontent.com/p/AF1QipOV24xf6ao9efi_NViDwqWNH0ukYaPz97Q7mI4W=w600-h650-p-k-no' alt='maptime logo gif' width='150px'/><br/>more info";  

var marker = L.marker([3.152930,101.718170], {icon:BWMIcon}).bindPopup(customPopup).addTo(map);

var markerClusters = L.markerClusterGroup();
for ( var i = 0; i < markers.length; ++i )
{
  var popup = '<a href="' + markers[i].url + 
              '"target="_blank">' + markers[i].name + '</a>' +
              '<br/>' + markers[i].year + '<br/>' +
              '<br/>' + markers[i].description +
              '<br/>' + '<img src="' + markers[i].image + '" style="maxwidth:200px;height:200px;">';
  
  var m = L.marker( [markers[i].lat, markers[i].lng]).bindPopup(popup);

 markerClusters.addLayer( m );
}
 
map.addLayer( markerClusters );

L.control.scale({position:'bottomleft'}).addTo(map);

