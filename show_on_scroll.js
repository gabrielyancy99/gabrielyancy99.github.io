const elementsToShow = document.querySelectorAll('.show-on-scroll');

const checkIfVisible = () => {
  // Get the current scroll position
  const scrollPosition = window.scrollY;

  // Get the height of the viewport
  const windowHeight = window.innerHeight;

  // Check if each element is within the viewport
  elementsToShow.forEach(element => {
    const elementPosition = element.getBoundingClientRect().top;

    if (elementPosition - windowHeight <= 0) {
      element.classList.add('show');
    }
  });
};

// Attach the function to the scroll event
window.addEventListener('load', checkIfVisible);
window.addEventListener('scroll', checkIfVisible);