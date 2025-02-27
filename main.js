document.addEventListener('DOMContentLoaded', () => {
    const textBlocks = document.querySelectorAll('.text-block');
    const photo = document.querySelector('.static-photo');
    const section = document.querySelector('.image-text-section');
  
    // Function to handle fade in and out of text blocks based on scroll position
    const handleScroll = () => {
      let scrollPosition = window.scrollY;
      let sectionPosition = section.offsetTop;
      let sectionHeight = section.offsetHeight;
  
      // Scroll within the image-text-section
      if (scrollPosition >= sectionPosition && scrollPosition < sectionPosition + sectionHeight) {
        // Calculate how far into the section the user has scrolled
        let sectionScroll = scrollPosition - sectionPosition;
  
        // Check for each text block
        textBlocks.forEach((block, index) => {
          let blockPosition = block.offsetTop;
          let blockHeight = block.offsetHeight;
  
          // Calculate the visibility of each text block
          if (sectionScroll + window.innerHeight > blockPosition && sectionScroll < blockPosition + blockHeight) {
            block.classList.add('active'); // Fade in the text block
          } else {
            block.classList.remove('active'); // Fade out the text block
          }
        });
      }
    };
  
    // Listen for scroll events
    window.addEventListener('scroll', handleScroll);
  });