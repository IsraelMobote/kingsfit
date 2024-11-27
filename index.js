
function myFunction(x) {
    x.classList.toggle("change");
  }

sliderData = [
  {
    picture : "images/picture-of-alot-of-people-cleaning.webp",
    text : "maintain a clean an hygienic workspace environment with our janitorial services, we provide regular cleaning and adequate facilities management"
  },
  {
    picture : "images/picture-someone-cleaning-with-mop-and-bucket.webp",
    text : "maintain a clean an hygienic workspace environment with our janitorial services, we provide regular cleaning and adequate facilities management"
  },
  {
    picture : "images/picture-of-mobile-cleaning-facilities.webp",
    text : "maintain a clean an hygienic workspace environment with our janitorial services, we provide regular cleaning and adequate facilities management"
  }
]
const actualSlider = document.querySelector('#actualSlider');

function populateSlider(element) {
  actualSlider.innerHTML = ""
  const image = document.createElement('img');
  image.setAttribute('src', `${element.picture}`);
  image.setAttribute('loading', 'lazy')

  const text = document.createElement('p');
  text.textContent = element.text;

  actualSlider.append(image);
  actualSlider.append(text);

}

populateSlider(sliderData[2]);

const firstIcon = document.querySelector('#firstIcon');
const secondIcon = document.querySelector('#secondIcon');

const firstCircle = document.querySelector('#firstCircle');
const secondCircle = document.querySelector('#secondCircle');
const thirdCircle = document.querySelector('#thirdCircle');

let slidertrackingNumber = 0;
setSlider();

firstIcon.addEventListener('click', function() {
  slidertrackingNumber = slidertrackingNumber - 1;
  setSlider()
});

secondIcon.addEventListener('click', function() {
  slidertrackingNumber = slidertrackingNumber + 1;
  setSlider()
});


function setSlider() {
  if (slidertrackingNumber == 0) {
    populateSlider(sliderData[0]);
    
    firstIcon.classList.add('hide');

    firstCircle.classList.add('active');
    secondCircle.classList.remove('active');
    thirdCircle.classList.remove('active');
  }

  else if (slidertrackingNumber == 1) {
    populateSlider(sliderData[1]);
    
    firstIcon.classList.remove('hide');
    secondIcon.classList.remove('hide');

    firstCircle.classList.remove('active');
    secondCircle.classList.add('active');
    thirdCircle.classList.remove('active');
  }

  else  if (slidertrackingNumber == 2) {
    populateSlider(sliderData[2]);
    
    secondIcon.classList.add('hide');

    firstCircle.classList.remove('active');
    secondCircle.classList.remove('active');
    thirdCircle.classList.add('active');
  }
}
