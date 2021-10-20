//import cons from 'cons';
// Write your code in this file!
const currentUser = 'Mike Kett';
const upperCaseCurrentUser = currentUser.toUpperCase();
const firstInitial = currentUser[0];
const restOfName = currentUser.slice(1);

const welcomeMessage = `Welcome to Flatbook, ${currentUser}!`;

const excitedWelcomeMessage = `WELCOME TO FLATBOOK, ${upperCaseCurrentUser}!`;

const shortGreeting = `Welcome, ${firstInitial}!`;

console.log(shortGreeting);
