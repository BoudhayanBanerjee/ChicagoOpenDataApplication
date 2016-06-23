$(document).ready(function(){
		$("#condom").click(function(){
			$("#wrapper").toggleClass("toggled");
			$.getJSON(url_condom,function(data){
				if(data){
					$.each(data,function(key,value){
					
					    
						var image = {
						  url: "res/condom.png",
						  size: new google.maps.Size(71, 71),
						  origin: new google.maps.Point(0, 0),
						  anchor: new google.maps.Point(17, 34),
						  scaledSize: new google.maps.Size(25, 25)
						};
					    
						var marker = new google.maps.Marker({
						map: map,
						draggable: false,
						animation: google.maps.Animation.DROP,
						icon: image,
						position: {lat: parseFloat(value.location.coordinates[1]), lng: parseFloat(value.location.coordinates[0])}
						});
						
						
						var contentString = '<div id="content"'+
						                '<h3><b>'+value.name+'</b></h3>'+
										'<p>Address : '+value.address+' , '+value.city_+' , '+value.zip_code+'</p>'+
										'<p>Venue Type: '+value.venue_type+'</p>'+
										'</div>';
						
						var infowindow = new google.maps.InfoWindow({
						content: contentString
					    });
						
												
						marker.addListener('click',function() {
											infowindow.open(map, marker);
						});
						
					});
				}
			});
		});
});
