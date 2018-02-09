/**
 * Created by Marc on 07.02.2018.
 */
var crackingActive = false;
var hash = "";
var latinChars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v"];
var generatedComb = false;
var enteredHash = false;


var possibleCombinations = [];

function generateComb() {
    var possibleCombinations = getCombination(latinChars);
    document.getElementById("combStatus").style = "color: green";
}

function startCrack(hash, mode, indicatorID) {
    alert("This can take a long time! Don't kill the script, it's normal for browsers to think the script stopped responding.");
    var tryhash = "";
    var iter = 0;
    var combinationLength = possibleCombinations.length;
    var progress = document.getElementById(indicatorID); //Required because otherwise Chrome will close tab

    while (hash !== tryhash && iter + 1 < combinationLength) {
        tryhash = eval(mode + "('" + possibleCombinations[iter] + "');");
        progress.innerHTML = "Entry: " + possibleCombinations[iter] + "  Iteration: " + iter;
        iter++;
    }
    alert("Result: " + hash + " equals " + possibleCombinations[iter - 1]);
}

function getCombination (arr) {
    var i, j, temp;
    var arrLen = arr.length;
    var power = Math.pow;
    var combinations = power(2, arrLen);

    // Time & Space Complexity O (n * 2^n)

    for (i = 0; i < combinations;  i++) {
        temp = '';

        for (j = 0; j < arrLen; j++) {
            // & is bitwise AND
            if ((i & power(2, j))) {
                temp += arr[j]
            }
        }
        possibleCombinations.push(temp);
    }
    generatedComb = true;
    console.log(possibleCombinations);
}

function validateHash(fieldID, indicatorID) {

    var indicatorElement = document.getElementById(indicatorID);

    var field = document.getElementById(fieldID);
    var value = field.value;

    if (mode === "md5") {
        if (value.length === 32) {
            indicatorElement.style = "color: green";
            enteredHash = true;
        }
        else {
            alert("Invalid Hash entered!");
        }
    }
    else if (mode === "sha512") {
        if (value.length === 128) {
            indicatorElement.style = "color: green";
            enteredHash = true;
        }
        else {
            alert("Invalid Hash entered!");
        }
    }
    // else form is good let it submit, of course you will
    // probably want to alert the user WHAT went wrong.

    return true;
}
