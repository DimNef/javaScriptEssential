let testText = "The quick brown fox jumps over the lazy dog.";
let startTime, endTime;

function startTest(){
    document.getElementById("inputText").value = testText;
    document.getElementById("output").innerHTML='';
    startTime = new Date().getTime();
    var button = document.getElementById("btn");
    button.innerHTML = "End Test";
    button.onclick = endTest;
}
function endTest(){
    endTime =new Date().getTime();
    // set to read only to disable from user input after stop
    document.getElementById("userInput").readOnly =true;
    // Calculate time elapsed and words per minute (WPM)

    var timeElapsed = (endTime-startTime)/1000;
    var userTypedText = document.getElementById("userInput").value;

    //regex
    var typedWords = userTypedText.split(/\s+/).filter(function(word){
        return word!=="";
    }).length;
    wpm = 0;
    if (timeElapsed !== 0 && !isNaN(typedWords)) {
                wpm = Math.round((typedWords / timeElapsed) * 60);
            }
    //display
    var outputDiv = document.getElementById("output");
    outputDiv.innerHTML = "<h2>Typing Test Results:</h2>"+
    "<p>Total Length: "+userTypedText.length+"</p>"+
    "<p>Words Typed: "+ typedWords+ "</p>"+
    "<p>Time Elapsed: " + timeElapsed.toFixed(2) + " seconds</p>" +
    "<p>Words Per Minute (WPM): " + wpm + "</p>";

var button = document.getElementById("btn");
            button.innerHTML = "Start Test";
            button.onclick = startTest;
}