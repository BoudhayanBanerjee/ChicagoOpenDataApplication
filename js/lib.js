$(document).ready(function(){
$("#lib").click(function(){
	        $("#wrapper").toggleClass("toggled");
		var request = new XMLHttpRequest();
		
		request.open('GET',url_lib);
		
		
		request.onreadystatechange = function() {
				if (request.readyState == 4 && request.status == 200) {
					
					var myArr = JSON.parse(request.responseText);
					printLibInfo(myArr);
					
				}
		}
		
		request.send();				
			
	});
	
	function printLibInfo(arr){
		
			for(var i=0;i<arr.length;i++){
						
					var image = {
								url: "res/library.png",
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
								position: {lat: parseFloat(arr[i].location.coordinates[1]), lng: parseFloat(arr[i].location.coordinates[0])}
							});
							
					var contentString = '<div id="content"'+
									'<h3><b>'+arr[i].name_+'</b></h3>'+
									'<p>Address : '+arr[i].address+' , '+arr[i].city+' , '+arr[i].zip+'</p>'+
									'<p>phone : '+arr[i].phone+'</p>'+
									'<p>Teacher in Library : '+arr[i].teacher_in_the_library+'</p>'+
									'<p>CyberNavigator : '+arr[i].cybernavigator+'</p>'+
									'<p>website : '+'<a href="website">'+arr[i].website+'</a>'+'</p>'+
									'</div>';
							
					console.log(contentString);
							
					var infowindow = new google.maps.InfoWindow({
						content: contentString
					    });
						
						marker.addListener('click',function() {
											infowindow.open(map, marker);
						});
						
							
			}
	}
});
