$(document).ready(function(){
	$('#pad').bind('click',function(){
		startTimer();
	});
	$('#pad').keypress(function(event){
		if(event.keyCode == 32) {
			startTyping();
		}
	});
	var myVar;
	function startTimer(){
		myVar = setInterval(alertFunc, 1000);
	}
	function alertFunc() {
		
		$timer = $('#timer');
		if ( $timer.text() == 0 ) {
			clearInterval(myVar);
			showResult();
		} else {
			$timer.text($timer.text() - 1);
		}
	}
	function startTyping(){
		//highlight world
		var start = 0 ;
		var written = $('#pad').val();
		if ( written.length > 0 ) {
			var words = written.split(" ");
			var start = words.length;
		}
		highlighting(start);
		//maitaince accurancy
	}
	function highlighting(start){
		var page = $('#page').text().trim();
		var words = page.split(" ");
		var focus = words[start];
		var initialString ="";
		if( start > 0 ) {
		 initialString = words.slice(0,start).join(" ");
		}
		var endString = words.slice(start+1).join(" ");
		value = initialString +" "+"<mark>"+focus+"</mark>"+" "+endString;
		$('#page').html(value);
	}
	function showResult(){
		
		var written = $('#pad').val().length;
		alert('your speed is '+ written+' wpm');
	}
	startTyping();
	
})
