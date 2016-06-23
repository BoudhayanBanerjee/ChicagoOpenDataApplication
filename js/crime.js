$(document).ready(function(){
		$("#crime").click(function(){
			$("#wrapper").toggleClass("toggled");
			$.getJSON(url_crime,function(data){
				if(data){
					var count = 0;
					$.each(data,function(key,value){
					    count = count +1;
						var image = {
						  url: "res/crime.png",
						  size: new google.maps.Size(71, 71),
						  origin: new google.maps.Point(0, 0),
						  anchor: new google.maps.Point(17, 34),
						  scaledSize: new google.maps.Size(15, 15)
						};
					
						var marker = new google.maps.Marker({
						map: map,
						draggable: false,
						animation: google.maps.Animation.DROP,
						icon: image,
						position: {lat: parseFloat(value.latitude), lng: parseFloat(value.longitude)}
						});
						
						var contentString = '<div id="content"'+
										'<p>Type : '+value.primary_type+'</p>'+
										'<p>Description : '+value.description+'</p>'+
										'<p>Location : '+value.location_description+'</p>'+
										'<p>Year : '+value.year+'</p>'+
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
