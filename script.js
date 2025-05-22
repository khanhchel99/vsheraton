// ...existing code...

// Handle the scrolling issue - keep the navbar visible
document.addEventListener('DOMContentLoaded', function() {
  // Update the countdown timer
  const weddingDate = new Date('July 4, 2025 00:00:00').getTime();
  
  function updateCountdown() {
    const now = new Date().getTime();
    const distance = weddingDate - now;
    
    document.getElementById('days').innerText = Math.floor(distance / (1000 * 60 * 60 * 24));
    document.getElementById('hours').innerText = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    document.getElementById('minutes').innerText = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    document.getElementById('seconds').innerText = Math.floor((distance % (1000 * 60)) / 1000);
  }
  
  // Update the countdown every second
  updateCountdown();
  setInterval(updateCountdown, 1000);
  
  // Handle smooth scrolling to sections when clicking buttons
  document.querySelectorAll('button[onclick^="location.href="]').forEach(button => {
    button.addEventListener('click', function(e) {
      e.preventDefault();
      const href = this.getAttribute('onclick').split('\'')[1];
      const targetSection = document.querySelector(href);
      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop - 100, // Adjust for header height
          behavior: 'smooth'
        });
      }
    });
  });
});

// ...existing code...
