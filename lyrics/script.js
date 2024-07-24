// script.js
const lyricsElement = document.querySelector('.lyrics');

// Calculate the duration based on the lyrics length
const lyricsHeight = lyricsElement.clientHeight;
const animationDuration = lyricsHeight * 100; // Adjust the factor as needed

lyricsElement.style.animationDuration = `${animationDuration}s`;
