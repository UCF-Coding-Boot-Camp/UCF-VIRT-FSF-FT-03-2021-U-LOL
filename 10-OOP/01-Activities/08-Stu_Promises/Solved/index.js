// Prompt the user to enter what they are currently doing
const userInput = process.argv[2];
console.log('Current user activity:', userInput);

// If the user does not enter anything, return an error message
if (!userInput) {
  console.error(
    '\nPlease enter your current activity\nUsage: `node index.js <activity>`'
  );
  process.exit();
}

// If the user enters anything other than the word 'coding', set 'studentDistracted' to 'true'
const studentDistracted = userInput !== 'coding';

// Option 1 - uncomment to try 
// Refactored 'practiceCoding()' to use promises
// const practiceCoding = () =>
//   new Promise((resolve, reject) => {
//     if (studentDistracted) {
//       reject(new Error('Coding stopped - Student is distracted'));
//     }
//     resolve('We are coding!');
//   });

// uncomment if using Option 1
// practiceCoding()
//   .then(() => console.log('We are coding in promises!'))
//   .catch((err) => console.error('Promise rejected:', err));



// Refactor to call 'practiceCoding()' and chain a 'then()' and 'catch()'
// Comment out if using option 2
practiceCoding
  .then(() => console.log('We are coding in promises!'))
  .catch((err) => console.error('Promise rejected:', err));
