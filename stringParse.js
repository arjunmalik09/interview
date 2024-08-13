// read input character wise
// transform numeric string into number, let x
// transform alphabet string into substring
// append substring to main string x times
const parser = (inputStr) => {
    const inputLen = inputStr.length;
    let index = 0;
    let outputStr = "";
    let currentNum = 0;
    let currentStr = "";
    for (index = 0; index < inputLen; index++) {
        // check ascii value
        const isNumeric = inputStr[index].charCodeAt(0) - '0'.charCodeAt(0) >= 0
        && inputStr[index].charCodeAt(0) - '0'.charCodeAt(0) <= 9;
        if (isNumeric) {
            currentNum = (
                currentNum * 10 + (inputStr[index].charCodeAt(0) - '0'.charCodeAt(0))
            );
        } else {
            // alphabet or bracket in this case
            if () {
                currentStr = currentStr + currentStr[index];
            }
        }
    }
};
