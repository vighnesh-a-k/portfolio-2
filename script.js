

document.addEventListener('DOMContentLoaded', function() {
    const paragraphs = document.querySelectorAll('.hidden');
  
    function revealText() {
      paragraphs.forEach((paragraph, index) => {
        setTimeout(() => {
          paragraph.classList.add('visible');
        }, index * 500); // Adjust the delay (in milliseconds) between each paragraph
      });
    }
  
    revealText();
  });

document.addEventListener('DOMContentLoaded', function() {
    const textToReveal = document.getElementById('textToReveal');
    const words = textToReveal.textContent.split(' ');
    const revealed = document.getElementById('revealed');
  
    function revealWords() {
      let delay = 0;
      words.forEach((word) => {
        setTimeout(() => {
          revealed.innerHTML += word + ' ';
        }, delay);
        delay += 100; // Adjust the delay (in milliseconds) between each word
      });
    }
  
    revealWords();
  });

// Create a wrapper element for the text
