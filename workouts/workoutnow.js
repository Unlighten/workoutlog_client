window.onload = function () {
  
  var seconds = 00; 
  var tens = 00; 
  var minutes = 00;
  var appendTens = document.getElementById("tens")
  var appendSeconds = document.getElementById("seconds")
  var appendMinutes = document.getElementById("minutes")
  var stopbutStart = document.getElementById('stopbut-start');
  var stopbutStop = document.getElementById('stopbut-stop');
  var stopbutReset = document.getElementById('stopbut-reset');
  var Interval ;

  stopbutStart.onclick = function() {
    
     clearInterval(Interval);
     Interval = setInterval(startTimer, 10);
  }
  
    stopbutStop.onclick = function() {
       clearInterval(Interval);
  }
  

  stopbutReset.onclick = function() {
    clearInterval(Interval);
    minutes = "00";
    tens = "00";
  	seconds = "00";
    appendTens.innerHTML = tens;
  	appendSeconds.innerHTML = seconds;
    appendMinutes.innerHTML = minutes;
  }
  
   
  
  function startTimer () {
    tens++; 
    
    if(tens < 9){
      appendTens.innerHTML = "0" + tens;
    }
    
    if (tens > 9){
      appendTens.innerHTML = tens;
      
    } 
    
    if (tens > 99) {
      console.log("seconds");
      seconds++;
      appendSeconds.innerHTML = "0" + seconds;
      tens = 0;
      appendTens.innerHTML = "0" + 0;
    }
    
    if (seconds > 9){
      appendSeconds.innerHTML = seconds;
    }

    if (seconds == 59) {
      console.log("minutes");
      minutes++;
      appendMinutes.innerHTML = "0" + minutes;
      seconds = 0;
      appendSeconds.innerHTML = "0";
    }
  
  }
  

}