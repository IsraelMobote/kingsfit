
function myFunction(x) {
  x.classList.toggle("change");
}

sliderData = [
  {
    picture: "images/picture-of-alot-of-people-cleaning.webp",
    text: "maintain a clean an hygienic workspace environment with our janitorial services, we provide regular cleaning and adequate facilities management"
  },
  {
    picture: "images/picture-someone-cleaning-with-mop-and-bucket.webp",
    text: "maintain a clean an hygienic workspace environment with our janitorial services, we provide regular cleaning and adequate facilities management"
  },
  {
    picture: "images/picture-of-mobile-cleaning-facilities.webp",
    text: "maintain a clean an hygienic workspace environment with our janitorial services, we provide regular cleaning and adequate facilities management"
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

firstIcon.addEventListener('click', function () {
  slidertrackingNumber = slidertrackingNumber - 1;
  setSlider()
});

secondIcon.addEventListener('click', function () {
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

  else if (slidertrackingNumber == 2) {
    populateSlider(sliderData[2]);

    secondIcon.classList.add('hide');

    firstCircle.classList.remove('active');
    secondCircle.classList.remove('active');
    thirdCircle.classList.add('active');
  }
}


const ourServices = document.querySelector('#our-services');

servicesList = [{
  img: '',
  title: 'MARBLE & FLOOR RESTORATION',
  textBody: 'Save cost, Let our professional cleaning team increase the life span of your investment. Improve the look and feel of marble and floor designs with our well trained team.'
},
{
  img: '',
  title: 'HOME/RESIDENTIAL CLEANING',
  textBody: 'Do you have a busy schedule or need professional cleaners to take care of your home or commercial apartment? We provide special quality domestic cleaning services'
}, {
  img: '',
  title: 'EVENT/PRE & AFTER PARTY CLEANING',
  textBody: 'Your house or venue a mess after partying? Take out the after party cleaning stress with our cleaning team. Use our after party cleaning services for your next party or event'
}, {
  img: '',
  title: 'CARPET,RUG & UPHOLSTERY CLEANING',
  textBody: 'We use modern equipments and quality friendly chemicals for carpet,rug and upholstery cleaning jobs. We offer hot water extraction by using powerful vacuum cleaners'
},
{
  img: '',
  title: 'FUMIGATION AND RATTING',
  textBody: 'We offer the perfect selection of solutions to deal with; bed bugs, cockroaches, mosquitoes, snakes, scorpions, birdmites, rodent, insect or bird infestation'
}, {
  img: '',
  title: 'JANITORIAL/COMMERCIAL CLEANING',
  textBody: 'First impression do matter! Give your customers a good first '
}];