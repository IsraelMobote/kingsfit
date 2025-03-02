
function myFunction(x) {
  x.classList.toggle("change");
}

const menuBarsContainer = document.querySelector('.container');
const menuItemsContainer = document.querySelector('.menuItemsContainer');
const menuItems = document.querySelector('.menuItems');
const body = document.querySelector('body');
const header = document.querySelector('header');

menuBarsContainer.addEventListener('click', function () {
  header.classList.toggle('active')
  menuItems.classList.toggle('active')
  menuItemsContainer.classList.toggle('active')
  body.classList.toggle('active')
})

const anchorTagsInMenu = document.querySelectorAll('.menuItems p a');

const container = document.querySelector('.container');

anchorTagsInMenu.forEach(element => {
  element.addEventListener('click', function () {

    myFunction(container)
    header.classList.toggle('active')
    menuItems.classList.toggle('active')
    menuItemsContainer.classList.toggle('active')
    body.classList.toggle('active')

  })
});

sliderData = [
  {
    picture: "images/picture-of-mobile-cleaning-facilities.webp",
    text: `Maintain a clean an hygienic workspace
     environment with our janitorial services`
  },
  {
    picture: "images/picture-of-alot-of-people-cleaning.webp",
    text: `Keep your floors looking their best with the best
     floor maintenance services`
  },
  {
    picture: "images/picture-someone-cleaning-with-mop-and-bucket.webp",
    text: `Eliminate germs and bacteria with our 
    deep-cleaning steamer sanitization services`
  }
]
const actualSlider = document.querySelector('#actualSlider');
let sliderImage = document.querySelector('#actualSlider img');
let sliderText = document.querySelector('#actualSlider p');

function populateSlider(element) {
 
  sliderImage.setAttribute('src', `${element.picture}`);
  sliderImage.setAttribute('loading', 'lazy')
  sliderImage.classList.remove('fade-away');

  sliderText.textContent = element.text;
  sliderText.classList.remove('fade-away');

}


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

    sliderImage.classList.add('fade-away')
    sliderText.classList.add('fade-away')
    setTimeout(() => {
      populateSlider(sliderData[0]);
    }, 250);


    firstIcon.classList.add('hide');

    firstCircle.classList.add('active');
    secondCircle.classList.remove('active');
    thirdCircle.classList.remove('active');
  }

  else if (slidertrackingNumber == 1) {

    sliderImage.classList.add('fade-away')
    sliderText.classList.add('fade-away')
    setTimeout(() => {
      populateSlider(sliderData[1]);
    }, 250);

    firstIcon.classList.remove('hide');
    secondIcon.classList.remove('hide');

    firstCircle.classList.remove('active');
    secondCircle.classList.add('active');
    thirdCircle.classList.remove('active');
  }

  else if (slidertrackingNumber == 2) {

    sliderImage.classList.add('fade-away')
    sliderText.classList.add('fade-away')
    setTimeout(() => {
      populateSlider(sliderData[2]);
    }, 250);

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
  image: 'images/an-individual-using-a-glass-cleaner-to-wipe-glass-with-only-the hand-shown-in-the-image.webp',
  imageAlt: 'an individual using a glass cleaner to wipe glass with only the hand shown in the image',
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

cleaningTypes = [{
  image: 'images/pnggg1(1).png',
  alt: 'Icon of a tall building with its colours consisting of lightblue,skyblue and yellow',
  title: 'Apartment Cleaning & Sanitizing',
  moreInfo: 'Our thorough apartment cleaning services never miss the little details in your space!'
}, {
  image: 'images/pnggg2(1).png',
  alt: 'Icon of a bucket with containers for cleaning, like bottles and spray bottles with its colours consisting of lightblue,skyblue and yellow',
  title: 'Move In / Move Out Cleaning',
  moreInfo: 'Moving can be messy but our cleaning professionals ensure a spotless clean'
}, {
  image: 'images/pnggg3(1).png',
  alt: 'Icon of a van with its colours consisting of lightblue,skyblue and yellow',
  title: 'House Cleaning & Sanitizing',
  moreInfo: 'Our unique Detail-Clean Rotation System ensures that your home is cleaned to the highest standard.'
}, {
  image: 'images/pnggg4(1).png',
  alt: 'Icon of a bungalow building with its colours consisting of lightblue,skyblue and yellow',
  title: 'One-Time Cleaning Services',
  moreInfo: 'We proudly offer customizable one-time cleaning programs to suit your needs.'
}]

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

function displayAboutUs(element) {
  element.innerHTML = '';

  const heading = document.createElement('h1');
  heading.textContent = 'About Us';

  element.append(heading);

  const aboutUsContainer = document.createElement('div');

  const imageContainer = document.createElement('div');
  const img = document.createElement('img');
  img.src = aboutInfo.image;
  img.alt = aboutInfo.imageAlt;
  img.loading = 'lazy';

  imageContainer.append(img);

  const paragraph1 = document.createElement('p')
  paragraph1.textContent = aboutInfo.paragraph1

  const paragraph2 = document.createElement('p')
  paragraph2.textContent = aboutInfo.paragraph2

  const paragraph3 = document.createElement('p')
  paragraph3.textContent = aboutInfo.paragraph3

  const cleaningTypesContainer = document.createElement('div')
  cleaningTypesContainer.className = 'cleaningTypesContainer'

  cleaningTypes.forEach(item => {
    const cleaningTypesInnerContainer = document.createElement('div')

    const image = document.createElement('img')
    image.src = item.image
    image.alt = item.alt
    image.loading = 'lazy'

    const title = document.createElement('p')
    title.textContent = item.title
    title.className = 'title'

    const moreInfo = document.createElement('p')
    moreInfo.textContent = item.moreInfo

    cleaningTypesInnerContainer.append(image)
    cleaningTypesInnerContainer.append(title)
    cleaningTypesInnerContainer.append(moreInfo)

    cleaningTypesContainer.append(cleaningTypesInnerContainer)
  });

  aboutUsContainer.append(imageContainer);

  aboutUsContainer.append(paragraph2);
  aboutUsContainer.append(paragraph3);
  aboutUsContainer.append(paragraph1);

  aboutUsContainer.append(cleaningTypesContainer)

  element.append(aboutUsContainer);

}

displayAboutUs(aboutUs);

featuresList = {
  mainImage: 'images/medium-shot-workers-with-cleaning-cart.webp',
  mainImageAlt: '',
  features: [{
    featureImage: 'images/ppp1.png',
    featureAlt: '',
    featureTitle: 'Happy Customers'
  }, {
    featureImage: 'images/gggg1.png',
    featureAlt: '',
    featureTitle: 'Flexible and Affordable Pricing'
  }, {
    featureImage: 'images/00023030.png',
    featureAlt: '',
    featureTitle: 'Diligent Cleaners'
  }, {
    featureImage: 'images/Untitled-1.png',
    featureAlt: '',
    featureTitle: 'Quality Cleaning Services'
  }]
}

const features = document.querySelector('#features');

function displayFeatures(element) {

  const heading = document.createElement('h1')
  heading.textContent = 'Our Features'

  const img = document.createElement('img')
  img.src = featuresList.mainImage
  img.alt = featuresList.mainImageAlt
  img.loading = 'lazy'

  const featuresContainer = document.createElement('div')
  featuresContainer.append(heading)

  let counterNumber = 0

  featuresList.features.forEach(item => {

    counterNumber += 1

    const featureInnerContainer = document.createElement('div')

    const featureImage = document.createElement('img')
    featureImage.src = item.featureImage
    featureImage.alt = item.featureAlt
    featureImage.loading = 'lazy'

    if (counterNumber === 3) {
      featureImage.className = 'increaseSize'
    }

    const featureTitle = document.createElement('p')
    featureTitle.textContent = item.featureTitle

    featureInnerContainer.append(featureImage)
    featureInnerContainer.append(featureTitle)

    featuresContainer.append(featureInnerContainer)
  });

  element.append(img)
  element.append(featuresContainer)

}

displayFeatures(features);

const form = document.querySelector('form');

const submitButtonLink = document.querySelector('button a');

function getEmailLink() {
  let Name = ''
  Name = document.querySelector('#name');

  let message = ''
  message = document.querySelector('#message');

  let emailMessage = ''
  emailMessage = `My name is ${Name.value}, ${message.value}`
  const newMessage = emailMessage.replaceAll(' ', '%20');
  const mainMessage = `mailto:finixsolutions02@gmail.com?subject=get%20in%20touch%20message&body=Hi%2C%0A%0A${newMessage}%0A%0AThank%20you`

  submitButtonLink.href = mainMessage;

}

form.addEventListener('submit', function (event) {

  event.preventDefault();

  getEmailLink();
});

const fumigationAndRattingSection = document.querySelector('#fumigationAndRatting');

fumigationList = [{
  cornerImage: 'images/image-of-rodents-in-diagram.webp',
  cornerImageAlt: 'image of rodents in diagram',
  fullImage: 'images/people-disinfecting-together-dangerous-area-wearing-white-overall-clothing.webp',
  fullImageAlt: 'people disinfecting together dangerous area wearing white overall clothing',
  body: `We offer the perfect selection of solutions to deal with; bed bugs, cockroaches,
   mosquitoes, snakes, scorpions, bird-mites, rodent, insect or bird infestation.`
}, {
  cornerImage: 'images/an-individual-disinfecting-a-room-wearing-a-white-overall-clothing.webp',
  cornerImageAlt: 'an individual disinfecting a room wearing a white overall clothing',
  fullImage: 'images/a-man-in-blue-outfit-and-wearing-a-face-mask-while-using-a-sprayer.webp',
  fullImageAlt: 'a man in blue outfit and wearing a face mask while using a sprayer',
  body: `We offer the perfect selection of solutions to deal with; bed bugs, cockroaches,
   mosquitoes, snakes, scorpions, bird-mites, rodent, insect or bird infestation.`
}]

function displayFumigationSection(element) {
  const h1 = document.createElement('h1');
  h1.textContent = 'Fumigation And Ratting'
  const line = document.createElement('hr')

  element.append(h1)
  element.append(line)

  const fumigationSectionContainer = document.createElement('div');

  fumigationList.forEach(item => {
    const innerSectionContainer = document.createElement('div');

    const cornerImage = document.createElement('img')
    cornerImage.src = item.cornerImage
    cornerImage.alt = item.cornerImageAlt
    cornerImage.loading = 'lazy'

    const fullImage = document.createElement('img')
    fullImage.src = item.fullImage
    fullImage.alt = item.fullImageAlt
    fullImage.loading = 'lazy'

    const body = document.createElement('p')
    body.textContent = item.body

    innerSectionContainer.append(cornerImage)
    innerSectionContainer.append(fullImage)
    innerSectionContainer.append(body)

    fumigationSectionContainer.append(innerSectionContainer);
  });


  element.append(fumigationSectionContainer)

}

displayFumigationSection(fumigationAndRattingSection);


FAQs = [{
  question: "IS A LONG TERM CONTRACT REQUIRED FOR SERVICE?",
  answer: "King's fit cleaning services for homes and workspace"
}, {
  question: "CAN I TRUST YOUR CLEANERS?",
  answer: "King's fit cleaning services for homes and workspace"
}, {
  question: "WHAT SHOULD I EXPECT FROM YOUR CLEANERS",
  answer: "King's fit cleaning services for homes and workspace"
}, {
  question: "HOW DO I GET STARTED?",
  answer: "King's fit cleaning services for homes and workspace"
}, {
  question: "WHY DO WE STAND BEHIND OUR WORK?",
  answer: "King's fit cleaning services for homes and workspace"
}, {
  question: "WHAT IS OUR HOME CLEANING PROCESS?",
  answer: "King's fit cleaning services for homes and workspace"
}];

const FAQsContainer = document.querySelector('#frequent-asked-questions');

function displayFAQs(list) {
  list.forEach(element => {
    const quesAndAnswerContainer = document.createElement('div')

    const questionContainer = document.createElement('div')
    const question = document.createElement('p')
    question.textContent = element.question

    const sign = document.createElement('span')

    const answerContainer = document.createElement('div')
    answerContainer.className = 'answerContainer'

    const answer = document.createElement('p')
    answer.textContent = element.answer
    answerContainer.append(answer)

    sign.addEventListener('click', function () {
      sign.classList.toggle('changeTextContent')
      sign.textContent = ""

      answerContainer.classList.toggle('active')
    })

    questionContainer.append(question)
    questionContainer.append(sign)

    quesAndAnswerContainer.append(questionContainer)
    quesAndAnswerContainer.append(answerContainer)

    FAQsContainer.append(quesAndAnswerContainer);
  });
}

displayFAQs(FAQs);
