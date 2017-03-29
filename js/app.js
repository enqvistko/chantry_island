$(document).foundation();

(function(){
	//console.log("working");
	
	//show more
	
	var showBut = document.querySelectorAll(".show");
	//console.log(showBut);
	var closeBut = document.querySelectorAll(".close");
	//console.log(closeBut);
	
	
	
	function displayInfo(e){
	
		//console.log("display");
		e.preventDefault();
		var whichBut = e.currentTarget.id;
		//console.log(whichBut);
		var butNum = whichBut.slice(4,5);
		//console.log(butNum);
		var displayThis = document.querySelector("#more"+butNum); 
		//console.log(displayThis);
		
		
		
		displayThis.style.display = "block";
		
		
		
		
		
	}
	
	function closeInfo(e){
		e.preventDefault();
		
		var closeBut = e.currentTarget.id;
		//console.log(closeBut);
		var butNum = closeBut.slice(5,6);
		//console.log(butNum);
		var closeThis = document.querySelector("#more"+butNum); 
		//console.log(displayThis);
		
		
		
		
		closeThis.style.display = "none";
		for(var b = 0; b<showBut.length; b++){
		showBut[b].style.display = "block";
		
		
		}
		
	}
	
	for(var a=0; a<showBut.length; a++){
		showBut[a].addEventListener("click", displayInfo,false);
		
	for (var c = 0; c<closeBut.length; c++){
		closeBut[c].addEventListener("click", closeInfo,false);
	}
	}
	
	//gallery
	
	$('#thumbNav li').on('click', function(){
		
		$.getJSON('admin/phpscripts/getBigImg.php', { images:this.id }, function(data){
			//console.log(data);

			$('.mainImage').attr('src','img/'+data.gal_img);
			
			
			$('.imageHolder p').text(data.gal_desc);
	
			$('.hidden').removeClass('hidden');
			
			
		});
		
		$('.closeGal').on('click', function(){
			$('.imageHolder').addClass('hidden');
		});
	});
	
	//close gallery
	
	//	var closeGalBut = document.querySelector(".closeGal");
//			var gal = document.querySelector(".imageHolder");
//			
//			
//			
//		
//			
//	
//	function loadGal(){
//		gal.style.display = "none";
//	
//	}
//	
//	
//	closeGalBut.addEventListener("click",loadGal,false);
//	
	
})();

