//WAP to convert years into days and days into years? 

function yearsToDays(years) {
    return years * 365; 
}

function daysToYears(days) {
    return days / 365; 
}

// Example usage:
const years = 5;
const days = 1825; // 5 years * 365 days/year = 1825 days

console.log(`${years} years is equal to ${yearsToDays(years)} days.`);
console.log(`${days} days is equal to ${daysToYears(days)} years.`);


