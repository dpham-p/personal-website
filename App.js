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
    x[i].style.display = 'none';
  }

  x[slideIndex - 1].style.display = 'block';
  x[slideIndex - 1].addEventListener('mouseover', pauseDiv);
  x[slideIndex - 1].addEventListener('mouseout', unpauseDiv);
}

function carousel() {
  setTimeout(carousel, 10000);
  if (!pause) plusDivs(1);
}
