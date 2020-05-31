/**
 * Given a string of text, this function returns a list of numbers
 * where a's become 1's (both upper and lowe case), b's are 2's, and
 * so on. Other characters are ignored
 * @param {String} str input string of text
 * @returns {Array<number>} list of corresponding numbers
 */
function textToNum(str) {
    let result = [];
    for(let i = 0; i < str.length; i++) {
        let c = str.charCodeAt(i);
        if(c >= 65 && c <= 90) {
            result.push(c - 64);
        } else if(c >= 97 && c <= 122) {
            result.push(c - 96);
        }
    }
    return result;
}

/**
 * Given a list of numbers (in the range 1-26), this function returns
 * a string of characters replacing 1's with a's, 2's with b's, and
 * so on.
 * @param {Array<number>} nums
 * @returns {String} corresponding characters (all lowercase)
 */
function numToText(nums) {
    let result = "";
    for(let i = 0; i < nums.length; i++) {
        let n = nums[i];
        if (n == 0) n = 26;
        result += String.fromCharCode(n + 96);
    }
    return result;
}

/**
 * Given a list of numbers, this function performs an identical
 * operation to each number in the list. For example, add 3 to the
 * number and reduce it mod 26
 * @param {Array<number>} nums input list of numbers
 * @param {char} op operation (+, -, *, /, or %)
 * @param {number} scale number to apply operation with
 */
function listCompute(nums, op, scale) {
    for(let i = 0; i < nums.length; i++) {
        if(op == '+') nums[i] += scale;
        else if(op == '-') nums[i] -= scale;
        else if(op == '*') nums[i] *= scale;
        else if(op == '/') nums[i] /= scale;
        else if(op == '%') nums[i] %= scale;
    }
}

/**
 * This function cleans a String of text by deleting any non-letter
 * characters, and changing each character to a capital letter.
 * @param {String} text input String of text
 * @returns {String} cleaned String of text
 */
function cleanText(text) {
    text = text.toUpperCase();
    let result = "";
    for(let i = 0; i < text.length; i++) {
        let c = text.charCodeAt(i);
        if(c > 64 && c < 91) {
            result = result.concat(text.charAt(i));
        }
    }
    return result;
}

/**
 * Given a string of text, this function counts the number of times
 * each character occurs in the string, and stores it into the
 * returned dictionary
 * @param {String} text input string of text
 * @returns {Dictionary} dictionary of characters as keys and numbers as values
 */
function frequencyAnalysis(text) {
    let dict = {};
    for(let i = 0; i < text.length; i++) {
        let c = text.charAt(i);
        if(dict.hasOwnProperty(c)) {
            dict[c]++;
        } else {
            dict[c] = 1;
        }
    }
    for(key in dict) {
        dict[key] /= text.length;
        dict[key] *= 1000.0;
        dict[key] = Math.round(dict[key]);
        dict[key] /= 10.0;
    }
    return dict;
}

/**
 * Given a dictionary of frequency analysis data, this function
 * outputs the data to the HTML table on the frequency analysis
 * page
 * @param {Dictionary} dict dictionary of data
 */
function outputTable(dict) {
    console.log(dict);
    let length = Object.keys(dict).length;
    for(let i = 0; i < length; i++) {
        let n = -1;
        let letter = "";
        for(key in dict) {
            let value = dict[key];
            if(value > n) {
                n = value;
                letter = key;
            }
        }
        //TODO: output to table
        console.log("" + letter + ": " + dict[letter]);
        delete dict[letter];
    }
}