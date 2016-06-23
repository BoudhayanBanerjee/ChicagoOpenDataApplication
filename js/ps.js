$(document).ready(function(){
		$("#ps").click(function(){
			$.getJSON(url_ps,function(data){
				if(data){
					$.each(data,function(key,value){
					
						var image = {
						  url: "res/police.png",
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
						                '<h3><b>'+value.district_name+'</b></h3>'+
										'<p>Address : '+value.address+' , '+value.city+' , '+value.zip+'</p>'+
										'<p>phone : '+value.phone+'</p>'+
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