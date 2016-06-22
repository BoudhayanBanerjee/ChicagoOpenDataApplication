$(document).ready(function(){
		$("#wclinic").click(function(){
			$.getJSON(url_wclinic,function(data){
				if(data){
					$.each(data,function(key,value){
					
					    
						var image = {
						  url: "res/health.png",
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
						                '<h3><b>'+value.site_name+'</b></h3>'+
										'<p>Address : '+value.street_address+' , '+value.city+' , '+value.zipcode+'</p>'+
										'<p>Hours of operation : '+value.hours_of_operation+'</p>'+
										'<p>WIC: '+value.wic+'</p>'+
										'<p>Phone Number : '+value.phone_1+'</p>'+
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
