// longest substring without repeating characters
// n log n, solution
// keep 2 iterators, slow, fast
// when a repeating character comes move slow to fast
// keep updating longest substring seen
const longestSubstring = (inputStr) => {
    const inputLen = inputStr.length;
    let slow = 0;
    let fast = 0;
    let longestLen = 0;
    let longestSubString = "";
    while (true) {
        let seenCharacters = new Set();
        let currentStr = "";
        while (fast < inputLen) {
            if (seenCharacters.has(inputStr[fast])) {
                if (longestLen > currentStr.length) {
                    longestLen = currentStr.length;
                    longestSubString = currentStr;
                }
                // reset iterators and current string as repeating character is found
                slow = fast;
                seenCharacters = new Set();
                currentStr = "";
            }
            currentStr += inputStr[fast];
            fast += 1;
            seenCharacters.add(inputStr[fast]);
        }
    }
    return longestSubString;
};
