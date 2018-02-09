/**
 * Created by Marc on 07.02.2018.
 */
function findGetParameter(parameterName) {
    var result = null,
        tmp = [];
    var items = location.search.substr(1).split("&");
    for (var index = 0; index < items.length; index++) {
        tmp = items[index].split("=");
        if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
    }
    return result;
}

function hashcrackStart(hashfieldID) {
    var hash = document.getElementById(hashfieldID).value;
    startCrack(hash, mode, "hashIndicator");
}

var mode = findGetParameter("mode");

document.title = "Crack a " + mode + " Hash!";

setInterval(function () {
    if(generatedComb && enteredHash) {
        document.getElementById("crackButton").disabled = false;
        document.getElementById("crackButton").style = "background-color: green";
    }
}, 500);