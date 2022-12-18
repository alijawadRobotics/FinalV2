function countDown(){
   
    //Countdown timer for 10 sec
    //Use for loop function
    var currTime = 10;
    var i;
    for (i=1; i<12; i++)
    {
        setTimeout(function () {
            document.getElementById("Countdown Timer").innerHTML = " Time Left " + currTime;
            currTime = currTime - 1;
        }, 1000 * i);
    }

}
function efficiency(){//Use for loop timer and warning text section
            var currTime = 10;
        for (var i = 1; i <= 10; i++) {
            if (i == 10) {
                setTimeout(function () {
                    document.getElementById("countdownTimer1").innerHTML = "Launching";
                }, 1000 * i);
                currTime = currTime-1;
            } else if (i > 4) {
                setTimeout(function () {
                    document.getElementById("countdownTimer1").innerHTML ="Less than 1/2 way to launch, time left = " + currTime;
                    currTime = currTime-1;
                }, 1000 * i);
            } else {
                setTimeout(function () {
                    document.getElementById("countdownTimer1").innerHTML = "Time left " + currTime;
                    currTime = currTime-1;
                }, 1000 * i);
            }
        }
}
function stopStart(){
            //stop launching red code
            document.getElementById("stopStart").disabled = true;
            document.getElementById("array").disabled = false;
}
function array(){//array function call the class progress display
            document.getElementById("array").disabled = true;
            document.getElementById("stopStart").disabled = false;
    var classes = ["Timer", " Loop", " Function", " Condition", " Sound", " Table", " Final Project"]
    document.getElementById("array").innerHTML = classes;
}