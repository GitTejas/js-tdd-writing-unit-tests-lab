export function isPalindrome(word) {
    if (typeof word !== 'string') {
      throw new Error('Input must be a string');
    }
  
    if (!/^[A-Za-z]*$/.test(word)) {
      throw new Error('Input must contain only alphabetic characters');
    }
  
    // Convert the word to lowercase for case-insensitive comparison
    const lowercaseWord = word.toLowerCase();
  
    // Check if the word is empty or a single character
    if (lowercaseWord.length <= 1) {
      return false;
    }
  
    // Check if the word is a palindrome by comparing characters from start and end
    for (let i = 0; i < Math.floor(lowercaseWord.length / 2); i++) {
      if (lowercaseWord[i] !== lowercaseWord[lowercaseWord.length - 1 - i]) {
        return false;
      }
    }
  
    return true;
  }