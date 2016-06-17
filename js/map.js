
  var map;
  var myLatLng = {lat: 41.860374, lng: -87.736815};
  var appToken = '5jAXVDrqioq27hiwZXOY2wpBt';
  var url_ps = 'https://data.cityofchicago.org/resource/9rg7-mz9y.json?$$app_token='+appToken;
  var url_lib = 'https://data.cityofchicago.org/resource/psqp-6rmg.json?$$app_token='+appToken;
  var url_food = 'https://data.cityofchicago.org/resource/cwig-ma7x.json?$$app_token='+appToken;
  var url_home = 'https://data.cityofchicago.org/resource/uahe-iimk.json?$$app_token='+appToken;
  var url_wclinic = 'https://data.cityofchicago.org/resource/cdzn-65xx.json?$$app_token='+appToken;
  var url_connect = 'https://data.cityofchicago.org/resource/qu9k-i56e.json?$$app_token='+appToken;
  var url_community = 'https://data.cityofchicago.org/resource/qhee-3acc.json?$$app_token='+appToken;
  var url_health = 'https://data.cityofchicago.org/resource/23z4-s99a.json?$$app_token='+appToken;
  var url_work = 'https://data.cityofchicago.org/resource/3msj-emar.json?$$app_token='+appToken;
  var url_condom = 'https://data.cityofchicago.org/resource/dffv-gz9p.json?$$app_token='+appToken;
  var url_traffic = 'https://data.cityofchicago.org/resource/3v4z-xnbf.json?$$app_token='+appToken;
  var url_crime = 'https://data.cityofchicago.org/resource/6zsd-86xi.json?$$app_token='+appToken;
  
   function initMap() {
  
          var styles = [
						{"featureType":"all",
						 "elementType":"geometry.fill",
						 "stylers":
									[
										{"visibility":"on"}
									]
						},
						{"featureType":"all",
						 "elementType":"geometry.stroke",
						 "stylers":[
									{"visibility":"simplified"}
								   ]},
					   {"featureType":"all","elementType":"labels.text.fill","stylers":[{"visibility":"on"}]},
					   {"featureType":"landscape.man_made","elementType":"geometry","stylers":[{"color":"#f7f1df"}]},
					   {"featureType":"landscape.natural","elementType":"geometry","stylers":[{"color":"#d0e3b4"}]},
					   {"featureType":"landscape.natural.terrain","elementType":"geometry","stylers":[{"visibility":"off"}]},
					   {"featureType":"poi","elementType":"labels","stylers":[{"visibility":"off"}]},
					   {"featureType":"poi.attraction","elementType":"all","stylers":[{"visibility":"on"}]},
					   {"featureType":"poi.business","elementType":"all","stylers":[{"visibility":"on"}]},
					   {"featureType":"poi.business","elementType":"geometry","stylers":[{"visibility":"off"}]},
					   {"featureType":"poi.business","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"saturation":"-56"},{"lightness":"2"},{"gamma":"2.10"}]},
					   {"featureType":"poi.business","elementType":"labels.text","stylers":[{"visibility":"on"}]},
					   {"featureType":"poi.business","elementType":"labels.icon","stylers":[{"visibility":"on"}]},
					   {"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#b1df9c"}]},
					   {"featureType":"poi.place_of_worship","elementType":"all","stylers":[{"visibility":"off"}]},
					   {"featureType":"road","elementType":"geometry.stroke","stylers":[{"visibility":"off"}]},
					   {"featureType":"road","elementType":"labels","stylers":[{"visibility":"off"}]},
					   {"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffe15f"}]},
					   {"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#efd151"}]},
					   {"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},
					   {"featureType":"road.local","elementType":"geometry.fill","stylers":[{"color":"black"}]},
					   {"featureType":"transit.station.airport","elementType":"geometry.fill","stylers":[{"color":"#cfb2db"}]},
					   {"featureType":"water","elementType":"geometry","stylers":[{"color":"#a2daf2"}]}
					   ];
					   
		  var styledMap = new google.maps.StyledMapType(styles,
														{name: "Custom Map"});	
														
  
		  map = new google.maps.Map(document.getElementById('map'), {
		  center: myLatLng,
		  zoom: 12
		});
		
		map.setOptions({styles: styles});
		
		
   }