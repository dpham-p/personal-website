let slideIndex = 1;
let pause = false;

showDivs(slideIndex);
carousel();

function plusDivs(n) {
  showDivs((slideIndex += n));
}

function currentDiv(n) {
  showDivs((slideIndex = n));
}

function pauseDiv(e) {
  pause = true;
}

function unpauseDiv(e) {
  pause = false;
}

function showDivs(n) {
  const x = document.querySelectorAll('.mySlides');
  x.forEach(slide => {
    slide.removeEventListener('mouseover', pauseDiv);
    slide.removeEventListener('mouseout', pauseDiv);
  });

  if (n > x.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = x.length;
  }
  for (let i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(' w3-animate-left', '');
    x[i].className = x[i].className.replace(' work-item-middle', '');
    x[i].className = x[i].className.replace(' work-item-left', '');
    x[i].className = x[i].className.replace(' work-item-right', '');
  }

  x[slideIndex - 1].className += ' work-item-middle';
  x[slideIndex - 1].addEventListener('mouseover', pauseDiv);
  x[slideIndex - 1].addEventListener('mouseout', unpauseDiv);
  x[slideIndex % 3].className += ' work-item-left';
  x[(slideIndex + 1) % 3].className += ' work-item-right';
}

function carousel() {
  setTimeout(carousel, 5000);
  if (!pause) plusDivs(1);
}
