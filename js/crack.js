/**
 * Created by Marc on 07.02.2018.
 */
var crackingActive = false;
var hash = "";
var latinChars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v"];
var generatedLatin = false;
var possibleCombinations = [];

function generateComb() {
    var possibleCombinations = getCombination(latinChars);
    document.getElementById("combStatus").style = "color: green";
}

function startCrack() {

}

function getCombination (arr) {
    var i, j, temp;
    var result = [];
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
        result.push(temp);
    }
    generatedLatin = true;
    return result;
}
