const friend = "BRUTUS"
const shiftValue = 3;

const latinAlphabet = "abcdefghijklmnopqrstuvwxyz";

const firstLetter = friend.indexOf[0];
const index = latinAlphabet.indexOf(firstLetter.toLowerCase());

// Q1 The result is 1 instead of 2 for B because indexes always start at number 0. 0 = A, 1 = B, and so on. 

const cipherIndex = index + shiftValue;
const encryptedFirstLetter = alphabet[new index]; 


// Q2 If we continue to go beyone the last letter "z", the % modulus operator could help us by giving us the remainder of whatever goes past z, which will give us an index number. 

const alphabetLength = alphabet.length;
const newIndex = (index + shiftValue) % alphabetLength;
const encryptedFirstLetter = alphabet[newIndex];


const message = "EUXWXV";
const challengeMessage = message.slice(3); 
