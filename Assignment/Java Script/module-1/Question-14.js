//Write a JavaScript exercise to get the extension of a filename.?

function getFileExtension(filename) {
    const parts = filename.split('.');

    if (parts.length > 1 && parts[parts.length - 1] !== '') {
        return parts[parts.length - 1];
    } else {
        return 'Invalid filename';
    }
}

// Example usage:
const filename1 = 'example.txt';
const filename2 = 'script.js';
const filename3 = 'data';

console.log(`Extension of ${filename1}: ${getFileExtension(filename1)}`);
console.log(`Extension of ${filename2}: ${getFileExtension(filename2)}`);
console.log(`Extension of ${filename3}: ${getFileExtension(filename3)}`);
