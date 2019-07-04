$( document ).ready(function() {
	// sounds
	var finished = $('#finished')[0];
var t,
    defaultMin = 2, defaultSec=0, 
    displayMin = defaultMin, displaySec = defaultSec,
    seconds = defaultSec, minutes = defaultMin;
    var time = 0;
    var start=false;
    var addMinus = false;
    displayTime();
  
  
  function countDown() {
    
    if (seconds <= 0) {

        seconds = 59;
        
        if (minutes <= 0) {
            minutes = 59;
        }
        minutes--;
    }
     time =  (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds > 9 ? seconds : "0" + seconds);
    $('.timer').html(time);
    seconds--;
    timer();
}

function timer() {
    t = setTimeout(countDown, 1000);
    if (minutes === 0 && seconds === 0){
      
     setTimeout(lastCall, 1000);
     setTimeout(clearTimeout(t),1000);
    }
}

$('#add').click(function()  {
  if (start===false){
    addDefault();
     time = (minutes ? (minutes > 9 ? minutes : minutes) : "00") + ":" + (seconds > 9 ? seconds : "0" + seconds);
    $('.timer').html(time);
  }
});
  
$('#minus').click(function()  {
  if (start===false){
    minusDefault();
    time = (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds > 9 ? seconds : "0" + seconds);
    $('.timer').html(time);
   }
   
});
  
/* Start button */
$('#start').click(function(){
  if (start === false){
  timer();
  start = true;
  }
});

/* Stop button */
$('#stop').click(function(){
    clearTimeout(t);
    stop();
});

/* Clear button */
$('#reset').click(function(){
   reset();   
});

	
	
/*timer sound
$(function() {
	$( '.timer' ).timer(function() {
		document.getElementById( 'timer-beep' ).play();		
*/

		
		function stop(){
    
    clearTimeout(t);
    start=false;
    return;
  }
  
function reset(){
    start = false;
  seconds=defaultSec;
        minutes=defaultMin;
    if (seconds != 0 && minutes!=0){
        
        time = (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds > 9 ? seconds : "0" + seconds);
        $('.timer').html(time);
        return;
    }
    
    time = (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds > 9 ? seconds : "0" + seconds);
      
    $('.timer').html(time);
    clearTimeout(t);
    
 }
  
  function displayTime(){
    if (defaultMin.length === 1){
      displayMin = defaultMin;
    }
    if (defaultMin.toString().length == 1){
      displayMin = defaultMin;
    }
    if (defaultSec.toString().length == 1){
      displaySec = "0"+defaultSec;
    }
    time = displayMin + ":" + displaySec;
    $('.timer').html(time);
  }
  
  function addDefault(){
    defaultMin++;
    addMinus=true;
    if (defaultMin >= 60){
      defaultMin = 60;
    }
    minutes = defaultMin;
    seconds = 0;

  }
  
  function minusDefault(){
    defaultMin--;
    if (defaultMin <= 1){
      defaultMin = 1;
    }
    minutes = defaultMin;
    seconds = 0;
  
  }
  
  function lastCall(){
    setTimeout(
        reset(done), 1000);
      clearTimeout(t);
      
  }
	
													
});

$(document).ready(function(){

 var img = [
"https://s3.amazonaws.com/memory-hosting-mobilehub-133708707/images/give_ass.png",
    
    "https://s3.amazonaws.com/memory-hosting-mobilehub-133708707/images/give_back_rub.png",
    
    "https://s3.amazonaws.com/memory-hosting-mobilehub-133708707/images/give_chest.png",
    
    "https://s3.amazonaws.com/memory-hosting-mobilehub-133708707/images/give_foot.png",
    
    "https://s3.amazonaws.com/memory-hosting-mobilehub-133708707/images/give_hand.png",
    
    "https://s3.amazonaws.com/memory-hosting-mobilehub-133708707/images/give_head.png",
    
    "https://s3.amazonaws.com/memory-hosting-mobilehub-133708707/images/give_kisses.png",
    
    "https://s3.amazonaws.com/memory-hosting-mobilehub-133708707/images/give_scalp.png",
    
    "https://s3.amazonaws.com/memory-hosting-mobilehub-133708707/images/give_tip.png",
    
    "https://s3.amazonaws.com/memory-hosting-mobilehub-133708707/images/rec_ass.png",
    
    "https://s3.amazonaws.com/memory-hosting-mobilehub-133708707/images/rec_back_rub.png",
    
    "https://s3.amazonaws.com/memory-hosting-mobilehub-133708707/images/rec_chest.png",
    
    "https://s3.amazonaws.com/memory-hosting-mobilehub-133708707/images/rec_foot.png",
    
    "https://s3.amazonaws.com/memory-hosting-mobilehub-133708707/images/rec_kisses.png",
    
    "https://s3.amazonaws.com/memory-hosting-mobilehub-133708707/images/rec_scalp.png",
    
    "https://s3.amazonaws.com/memory-hosting-mobilehub-133708707/images/rec_tip.png",
    
    "https://s3.amazonaws.com/memory-hosting-mobilehub-133708707/images/lick_tip.png",
    
    "https://s3.amazonaws.com/memory-hosting-mobilehub-133708707/images/suck_tip.png"	
]	

var	 total = 0,
	 move = 0,
	 count = 1,
	 first_card=null,
  	 secn_card=null ;

var stop_fa = false ,
	stop_fc = true,
 	stop_time = true;


var $card = $('.card'),
	$board = $('.board'),
	$start = $('.start'),
	$again = $('.again') ;


//4*6 card group;
var card_id=0 
 for(i=0; i<4; i++){
	for(j=0; j<6; j++){
		$('.room').append('	<div class="card" data-id="'+card_id+'"><div class="front face"></div><div  data-bid="0" class="back face" ></div></div>')
		card_id++;
		}
		$('.room').append('<br>')
	}




$start.click(function(){
	total = 0;
	stop_fa = true;
	stop_fc = false;
	stop_time = false;
	$('.card').removeClass('flip');
	$start.hide();
	randomIMG();
})

$again.click(function(){
	stop_fa = false;
	stop_fc = true;
	$start.show();
	$board.hide();
	$('.card').removeClass('fliped');
	randomIMG();
	flip_auto();
	flip_auto();
})

$board.hide();
randomIMG();
flip_auto();
flip_auto();
flip_auto();
flip_click();

// $('.card').addClass('fliped');

function randomIMG(){
	
	var c_array = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12];
	var c_length = c_array.length;
	var $card = $('.card');
	

	$card.each(function(){
		var r_id = Math.floor(Math.random() * (c_length - 1));	// Get Random Number 
		
		
		var temp = c_array[r_id];							    //Swaping
		c_array[r_id]= c_array[c_length - 1];
		c_array[c_length - 1] = temp;


		c_length--												// decrement c_length by 1
		
		$(this).find('.back').css({								// Set css
			'background-image' : 'url('+img[temp-1]+')',
			'background-repeat' : 'no-repeat',
			'background-size': '100%'
		})

		$(this).find('.back').attr('data-bid',temp)		// Set data attribute
	})

	return 0;
}





function flip_click(){
	 total = 0;  
	 move = 0;
	 count = 1;
	 var i =0
	 first_card=null;
  	 secn_card=null ;
	var $card = $('.card');
	


	$card.find('.front').click(function(){

		if(stop_fc == true){
			return 0;
		}
   	

	$(this).parent('.card').toggleClass('flip');
	move++;
	$('.c_move').html(move);

	if(count == 1){
		first_card = $(this).parent('.card').find('.back').attr('data-bid');
	}
	else if(count == 2){
		secn_card = $(this).parent('.card').find('.back').attr('data-bid');
	}

	
	if(first_card == secn_card){
		
		$('[data-bid="'+first_card+'"]').parent('.card').addClass('fliped')
		total++;
		if (total == 12) {

			stop_time = true;
			

      		var sec_f = pad(++sec%60) , 
    		   min_f = pad(parseInt(sec/60,10)) ;
		stop_fc = reset(move,sec_f,min_f);
		stop_fc = true;
		move = 0;
		}

	}
	if(stop_fc){
		return
	}
count++
		if(count>2){
			console.log(first_card,secn_card)
			first_card=null;
			secn_card=null;
			count = 1;
		setTimeout(function(){
			$card.removeClass('flip');
			
		},2000)
	}		
	});


	var sec = 0;
function pad ( val ) { return val > 9 ? val : "0" + val; }
setInterval( function(){
	if(stop_time){
    sec=0
		return
	}
    $(".sec").html(pad(++sec%60));
    $(".min").html(pad(parseInt(sec/60,10)));
}, 1000);


}


function flip_auto(time){	

  setTimeout( function(){
  	if(stop_fa){
	return ;
	}

	var r_ran = randomNum(1,24)
	$('[data-id="'+r_ran+'"]').toggleClass('flip')

	var newTime = randomNum(500,1000);	
	flip_auto(newTime)
  }, time)
}

 function randomNum( min, max ) {
    return Math.floor(Math.random() * ((max - min)+1) + min);
  }



function reset(move,sec,min) {
$board.show()
$board.find('.scr_moves').html(move);
$board.find('.scr_sec').html(sec);
$board.find('.scr_min').html(min);
return true;
}





});