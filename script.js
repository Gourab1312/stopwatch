let hr = 0;
let min = 0;
let sec = 0;
let msec = 0;

let timer = false; //this function will determine whether the timer is chal raha h aur ruka hua h


function start(){
    timer = true;
    stopwatch();
}

function stop(){
    timer = false;

}

function reset(){
    timer = false;

    hr = 0;
    document.getElementById('hr').innerHTML = "00";
    min = 0;
    document.getElementById('min').innerHTML = "00";
    sec = 0;
    document.getElementById('sec').innerHTML = "00";
    msec = 0;
    document.getElementById('msec').innerHTML = "00";

}

function stopwatch(){
    if(timer == true){
        msec = msec+1;

        if(msec == 100){
            sec = sec +1;
            msec = 0;
        }

        if(sec == 60)
        {
            min = min+1;
            sec = 0;
        }

        if(min ==60)
        {
            hr = hr+1;
            min = 0;
            sec = 0;
            msec = 0;
        }

        let hrString = hr;
        let minString = min;
        let secString = sec;
        let msecString = msec;

        // storing all the values adding a string thus making them a string itself
        if(hr<10){
            hrString = "0" + hrString;
        }
        if(min<10){
            minString = "0" + minString;
        }
        if(sec<10){
            secString = "0" + secString;
        }
        if(msec<10){
            msecString = "0" + msecString;
        }


        document.getElementById("hr").innerHTML = hrString;
        document.getElementById("min").innerHTML = minString;
        document.getElementById("sec").innerHTML = secString;
        document.getElementById("msec").innerHTML = msecString;


        setTimeout("stopwatch()", 01); //after 1 miliseconds we are calling the same function
    }
}