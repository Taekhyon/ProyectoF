// JavaScript Document
$(document).ready(function(){
	document.addEventListener("deviceready",function(){
		alert("Ready");
		$('#b1').tap(function(){
			navigator.notification.beep(1);	
		});//Cierre de tap b1
			$('#b2').tap(function(){
			navigator.notification.vibration(1);	
		});
	}); //Cierre de deviceready
});// Cierre de ready