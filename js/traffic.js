$(document).ready(function(){
	
		$("#traffic").click( function(){
			
			$.getJSON(url_traffic,function(data){
				if(data){
					$.each(data,function(key,value){
							
							var trafficCircle = new google.maps.Circle({
							  strokeColor: '#2196F3',
							  strokeOpacity: 0.8,
							  strokeWeight: 2,
							  fillColor: '#2196F3',
							  fillOpacity: 0.35,
							  map: map,
							  center: {lat: parseFloat(value.latitude), lng: parseFloat(value.longitude)},
							  radius: parseInt(value.violations)*5
							});
					   
						});
						
					
				}
			});
			
	    });
});