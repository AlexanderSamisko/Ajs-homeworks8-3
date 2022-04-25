import Settings from './Settings';

const mySettings = new Settings();
console.log(mySettings.active);

mySettings.getUsers('theme', 'gray');
mySettings.getUsers('music', 'rock');
mySettings.getUsers('difficulty', 'hard');

mySettings.defineActive('users');

console.log(mySettings.active);
