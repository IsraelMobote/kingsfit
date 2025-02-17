
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
  img: 'images/a-man-using-a-mower-with-two-hands.webp',
  alt: 'a man using a mower with two hands',
  title: 'MARBLE & FLOOR RESTORATION',
  textBody: 'Save cost, Let our professional cleaning team increase the life span of your investment. Improve the look and feel of marble and floor designs with our well trained team.'
},
{
  img: 'images/using-cleaning-solutions-to-clean-surfaces.webp',
  alt: 'an individual using cleaning solutions to clean surfaces',
  title: 'HOME/RESIDENTIAL CLEANING',
  textBody: 'Do you have a busy schedule or need professional cleaners to take care of your home or commercial apartment? We provide special quality domestic cleaning services'
}, {
  img: 'images/medium-shot-workers-with-cleaning-cart.webp',
  alt: 'medium shot workers with cleaning cart',
  title: 'EVENT/PRE & AFTER PARTY CLEANING',
  textBody: 'Your house or venue a mess after partying? Take out the after party cleaning stress with our cleaning team. Use our after party cleaning services for your next party or event'
}, {
  img: 'images/an-individual-cleaning-with-vacuum-cleaner.webp',
  alt: 'an individual cleaning with vacuum cleaner',
  title: 'CARPET,RUG & UPHOLSTERY CLEANING',
  textBody: 'We use modern equipments and quality friendly chemicals for carpet,rug and upholstery cleaning jobs. We offer hot water extraction by using powerful vacuum cleaners'
},
{
  img: 'images/Electrodry-Pest-Control-Services.webp',
  alt: '',
  title: 'FUMIGATION AND RATTING',
  textBody: 'We offer the perfect selection of solutions to deal with; bed bugs, cockroaches, mosquitoes, snakes, scorpions, birdmites, rodent, insect or bird infestation'
}, {
  img: 'images/an-exterminator-working-to-exterminate-insects-or-rodents.webp',
  alt: 'an exterminator working to exterminate insects or rodents',
  title: 'JANITORIAL/COMMERCIAL CLEANING',
  textBody: 'First impressions do matter! Give your customers a good first impression and also improve productivity at your work place with our quality cleaning services'
}];

aboutInfo = {
  image: '',
  paragraph1: `At kingsfit cleaning hub, we are more than just a cleaning service, we are partners in keeping your workspace spotless. 
  Whether it's an office, gym, medical facility, or co-working space. We make sure your environment
  reflects the high standards your business stands for`,
  paragraph2: `Our team of professionals delivers customized cleaning solutions 
  tailored to the unique needs of modern spaces across Nigeria. 
  From corporate offices to shared workspace and everything in between,
   we adapt to ensure your space is always looking its best.`,
  paragraph3: `With Eco-friendly products and a sharp focus on detail, 
  we create cleaner, healthier environments for your team, clients and visitors. 
  You handle your business- We will handle the clean.`
}

function displayServices() {

  ourServices.innerHTML = '';

  const heading = document.createElement('h1');
  heading.textContent = 'Our Services';

  ourServices.append(heading);

  servicesList.forEach(element => {
    const serviceContainer = document.createElement('div');

    const image = document.createElement('img');
    image.src = element.img;
    image.alt = element.alt;
    image.loading = 'lazy';

    const serviceItemHeading = document.createElement('h2');
    serviceItemHeading.textContent = element.title;

    const serviceItemParagraph = document.createElement('p');
    serviceItemParagraph.textContent = element.textBody;

    const serviceItemButton = document.createElement('span');
    serviceItemButton.textContent = 'LEARN MORE';

    serviceContainer.append(image);
    serviceContainer.append(serviceItemHeading);
    serviceContainer.append(serviceItemParagraph);
    serviceContainer.append(serviceItemButton);

    ourServices.append(serviceContainer);
  });
}

displayServices();

const aboutUs = document.querySelector('#about-us')

function displayAboutUs() {
  aboutUs.innerHTML = '';

  const heading = document.createElement('h1');
  heading.textContent = 'About Us';

  aboutUs.append(heading);

  const aboutUsContainer = document.createElement('div')
}