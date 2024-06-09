// 9 Write to show
// i. Monday to Sunday using switch case in JS?
// ii. Vowel or Consonant using switch case in JS?

let dayNumber = 3; 

let dayName;
switch (dayNumber) {
    case 1:
        dayName = 'Monday';
        break;
    case 2:
        dayName = 'Tuesday';
        break;
    case 3:
        dayName = 'Wednesday';
        break;
    case 4:
        dayName = 'Thursday';
        break;
    case 5:
        dayName = 'Friday';
        break;
    case 6:
        dayName = 'Saturday';
        break;
    case 7:
        dayName = 'Sunday';
        break;
    default:
        dayName = 'Invalid day number';
}
console.log(`Day ${dayNumber} is ${dayName}.`);


let character = 'a'; 

let letterType;
switch (character.toLowerCase()) {
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
        letterType = 'Vowel';
        break;
    default:
        letterType = 'Consonant';
}
console.log(`The character '${character}' is a ${letterType}.`);
