// clock function
function digitalClock() {
    var clock = document.getElementById("clock-prog");
    let now = new Date();

    var h = now.getHours();
    var m = now.getMinutes();
    var s = now.getSeconds();

    if(h>=12){
        h=h-12;
    }

    if(h<10){
        h="0"+h;
    }
    if(m<10){
        m="0"+m;
    }
    if(s<10){
        s="0"+s;
    }

    clock.innerHTML = h + " : " + m + " : " + s;

}

setInterval(digitalClock,1000);


// stop watch function

stopWatchDisplay=document.getElementById("stopWatch-prog");
var goOn=false;
var counter= 0;
var hcounter=0;
var isValid;
nowTimer();
function startFn(){
    if(!goOn){
        goOn=true;
        isValid=setInterval(counterincreament,1000);
    }
    return false;
}
function counterincreament(){
    if(goOn){
        counter++;
        nowTimer();
    }  
    if(counter>=59){
        hcounter+=counter/59;
        counter=counter-60;
    }
    // stopWatchDisplay.innerHTML= hcounter +" : "+counter;
}
function stopFn(){
    goOn=false;
    clearInterval(isValid);
    return false;
}
function resetFn(){
    stopFn();
    counter = 0;
    hcounter =0;
    nowTimer();
    return false;
}
function nowTimer() {
    stopWatchDisplay.innerHTML = `${hcounter.toString().padStart(2, '0')} : ${counter.toString().padStart(2, '0')}`;
  }



// stopWatchDisplay.innerHTML=counter;


