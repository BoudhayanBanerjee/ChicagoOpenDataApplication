$(document).ready(function(){
		$("#connect").click(function(){
			$.getJSON(url_connect,function(data){
				if(data){
					$.each(data,function(key,value){
					
					    
						var image = {
						  url: "res/connect.png",
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
						position: {lat: parseFloat(value.latitude), lng: parseFloat(value.longitude)}
						});
						
						
						var contentString = '<div id="content"'+
						                '<h3><b>'+value.organization_name+'</b></h3>'+
										'<p>Address : '+value.full_address+'</p>'+
										'<p>Organization Type : '+value.organization_type+'</p>'+
										'<p>Training Description: '+value.training_description+'</p>'+
										'<p>Hours: '+value.hours+'</p>'+
										'<p>Phone Number : '+value.org_phone+'</p>'+
										'<p>website : '+'<a href="website">'+value.website+'</a>'+'</p>'+
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
	
