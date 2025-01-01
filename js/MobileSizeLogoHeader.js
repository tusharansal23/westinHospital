window.addEventListener('resize', () => {
    const logoElement = document.querySelector('.logoClass');
    if (window.innerWidth <= 768) { // Define the mobile breakpoint
      logoElement.classList.remove('logoClass');
    } else {
      logoElement.classList.add('logoClass');
    }
  });
  
  // Trigger the function once on page load
  document.addEventListener('DOMContentLoaded', () => {
    const logoElement = document.querySelector('.logoClass');
    if (window.innerWidth <= 768) {
      logoElement.classList.remove('logoClass');
    }
  });
  