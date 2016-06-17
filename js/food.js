$(document).ready(function(){
		$("#food").click(function(){
			$.getJSON(url_food,function(data){
				if(data){
					$.each(data,function(key,value){
					
						var image = {
						  url: "res/food.svg",
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
						                '<h3><b>'+value.aka_name+'</b></h3>'+
										'<p>Address : '+value.address+' , '+value.city+' , '+value.zip+'</p>'+
										'<p>Risk : '+value.risk+'</p>'+
										'<p>Inspection Type : '+value.inspection_type+'</p>'+
										'<p>Violations : '+value.violations+'</p>'+
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