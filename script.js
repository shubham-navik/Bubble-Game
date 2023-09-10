var timer = 6;
var totalTime = timer;
var score = 0;
var hitrn = 0;
var hitcount = 0;
var totalcount = 0;
var accuracy = 0;

function increaseScore() {
    score += 1;
    document.querySelector("#scoreval").textContent = score;
}

function makeBubble() {
    var clutter = "";

for (var i = 1; i <= 90; i++){
    var rn = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${rn}</div>`;

}
document.querySelector("#pbtm").innerHTML = clutter;
}


function runTimmer() {
   var timerint =  setInterval(function () { 
        if (timer > 0) {
            
            timer--;
            document.querySelector("#timerval").textContent = timer+'s';
        }
        else {
            clearInterval(timerint)
            document.querySelector("#pbtm").innerHTML=` <div id="show" class="showscore">
            <div class="text">Game Over</div>
            <div class="result">
                <div class="ans">
                    <div>Hit</div>
                    <div>${hitcount}</div>
                </div>
                <div class="ans">
                    <div>Miss</div>
                    <div>${totalcount-hitcount}</div>
                </div>
                <div class="ans">
                    <div>Total</div>
                    <div>${totalcount}</div>
                </div>
                <div class="ans">
                    <div>Accuracy</div>
                    
                    <div>${accuracy.toFixed(2)*100}%</div>
                </div>
                <div class="ans">
                            <div>Total Time Taken</div>
                            <div>${totalTime}sec.</div>
                        </div>
            </div>
            <div class="playAgain">
            <button class="btn"><a href="index.html">Play Again !</a>  </button>
                    </div>
        </div>`;
            document.querySelector("#show").classList.remove('show');
        }
    }, 1000);
}
function getnewhit() {
     hitrn = Math.floor(Math.random() * 10);
    document.querySelector("#hitval").textContent = hitrn;
}
document.querySelector("#pbtm").addEventListener("click", function (details) {
    // alert("chal rha hai");
    console.log(Number(details.target.textContent));
    var clickednum = Number(details.target.textContent);
    if (hitrn === clickednum) {
        increaseScore();
        makeBubble();
        getnewhit();
        hitcount++;

    }
    makeBubble();
    getnewhit();
    totalcount++;
    
    accuracy = hitcount / totalcount;
    // accuracy = accuracy.toFixed(2);
    
})

// increaseScore();
getnewhit()
runTimmer()

makeBubble()