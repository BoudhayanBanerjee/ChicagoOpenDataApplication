$(document).ready(function(){
		$("#home").click(function(){
			$.getJSON(url_home,function(data){
				if(data){
					$.each(data,function(key,value){
					
						var image = {
						  url: "res/house.png",
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
						                '<h3><b>'+value.property_name+'</b></h3>'+
										'<p>Address : '+value.address+' , '+value.zip_code+'</p>'+
										'<p>Management Company : '+value.management_company+'</p>'+
										'<p>Property Location : '+value.community_area+'</p>'+
										'<p>Property Type : '+value.property_type+'</p>'+
										'<p>Units : '+value.units+'</p>'+
										'<p>Phone Number : '+value.phone_number+'</p>'+
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