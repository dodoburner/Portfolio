const projects = [
  {
    img: "images/desktop-images/img1.png",
    name: 'Tip Calculator',
    jobDescription: {
      company: 'Frontend Mentor',
      role: 'Student',
      year: '2022',
    },
    description: 'A simple calculator to calculate the tip between you and your friends on a night out',
    languages: ['html', 'css', 'javascript'],
    source: 'https://github.com/dodoburner/tip-calculator',
    live: 'https://dodoburner.github.io/tip-calculator/'
  },
  {
    img: "images/air-pollution-img.png",
    name: 'Air Pollution Data',
    jobDescription: {
      company: 'Microverse',
      role: 'Student',
      year: '2022',
    },
    description: 'This is a Single Page Application designed for mobile phones. It is created with React & Redux and uses 2 different API\'s to store a list of countries, cities and air pollution data for a given city. It has a search bar where you can directly look up for air pollution data of a city.',
    languages: ['html', 'css', 'javascript', 'react', 'redux'],
    source: 'https://github.com/dodoburner/City-Air-Pollution-Data',
    live: 'https://city-air-pollution-app.netlify.app/'
  },
  {
    img: "images/dl-img.png",
    name: 'Dog Lovers Summit',
    jobDescription: {
      company: 'Microverse',
      role: 'Student',
      year: '2022',
    },
    description: ' A responsive website for a conference built with the mobile first approach. It has 2 pages; home and about.',
    languages: ['html', 'css', 'javascript'],
    source: 'https://github.com/dodoburner/DL-Global-Summit',
    live: 'https://dodoburner.github.io/DL-Global-Summit/'
  },
  {
    img: "images/tracker.png",
    name: 'IP Adress Tracker',
    jobDescription: {
      company: 'Frontend Mentor',
      role: 'Student',
      year: '2022',
    },
    description: 'Web App that shows  info about the user\'s public IP address and displays the location on a map. The user can search for info about other IP adresses using the search bar.',
    languages: ['html', 'css', 'javascript'],
    source: 'https://github.com/dodoburner/IP-Adress-Tracker',
    live: 'https://dodoburner.github.io/IP-Adress-Tracker/'
  },
];

const workSection = document.createElement('section');
workSection.id = 'work-section';
const mainSection = document.querySelector('main');
mainSection.insertBefore(workSection, mainSection.children[1]);

projects.forEach((project, index) => {
  const projectHTML = document.createElement('div');
  projectHTML.innerHTML = (`
    <img class="project-img" src=${project.img}>
    <img class="project-img-desktop img${index + 1}" src=${project.img}>
    
    <div class="project-info">
      <h3 class="project-title">
        ${project.name}
      </h3>

      <div class="project-info-top">
        <p class="job-place">
          ${project.jobDescription.company}
        </p>
        <img class="circle" src="images/Counter.svg" alt="">
        <p class="job-title gray">
          ${project.jobDescription.role}
        </p>
        <img class="circle" src="images/Counter.svg" alt="">
        <p class="project-year gray">
          ${project.jobDescription.year}
        </p>
      </div>

      <p class="project-text">
        ${project.description}
      </p>

      <ul class="project-languages">
      </ul>

      <button type="button" class="project-button">
        See Project
      </button>
    </div>
  `);
  projectHTML.className = 'project-section';
  workSection.appendChild(projectHTML);
  const ul = document.querySelectorAll('.project-languages')[index];
  project.languages.forEach((language) => {
    const li = document.createElement('li');
    li.classList.add('language');
    li.innerHTML = `${language}`
    ul.appendChild(li)
  })
});

function createPopup(position) {
  const popup = document.createElement('div');
  popup.innerHTML = (`
    <div class="popup-content">
        <h3 class="project-title">
           ${projects[position].name}
        </h3>

        <img class="icon-cancel" src="images/popup-images/Icon-Cancel-Gray.svg" alt="">
        <img class="popup-project-img" src=${projects[position].img} alt="">

        <ul class="project-info-top">
          <li class="job-place">${projects[position].jobDescription.company}</li>
          <img class="circle" src="images/Counter.svg" alt="">
          <li class="job-title gray">${projects[position].jobDescription.role}</li>
          <img class="circle" src="images/Counter.svg" alt="">
          <li class="project-year gray">${projects[position].jobDescription.year}</li>
        </ul>

        <img class="project-img-desktop-popup"  src=${projects[position].desktopImage} alt="">

        <div class="popup-bottom">
          <p class="project-text">
            ${projects[position].description}
          </p>

          <div class="badges-buttons">
            <ul class="popup-project-languages">
            </ul>
  
            <div class="popup-buttons">
              <button type="button" class="project-button">
              <a href="${projects[position].live}">
                See live
                <img src="images/popup-images/Icon-Export.svg" alt="">
              </a> 
              </button>
              <button type="button" class="project-button">
                <a href="${projects[position].source}">
                  See Source
                  <img src="images/popup-images/Icon -GitHub.svg" alt="">
                </a>
              </button>
            </div>
          </div>
        </div>
        <div class="projects-navigation-buttons">
            <button type="button" class="previous">
              previous project
            </button>
            <button type="button" class="next">
              next project
            </button>
          </div>  
      </div>
  `);
  popup.classList.add('popup');
  workSection.appendChild(popup);
  document.body.classList.add('not-scrollable');
  const ul = document.querySelector('.popup-project-languages');
  projects[position].languages.forEach((language) => {
    const li = document.createElement('li');
    li.classList.add('language');
    li.innerHTML = `${language}`
    ul.appendChild(li)
  })
}

const projectButton = document.querySelectorAll('.project-info .project-button');
let position = 0;

function popupClose() {
  const popup = document.querySelector('.popup');
  document.querySelector('.icon-cancel').addEventListener('click', () => {
    workSection.removeChild(popup);
    document.body.classList.toggle('not-scrollable');
  });
}

function popupNavigation() {
  const popupNavButton = document.querySelectorAll('.projects-navigation-buttons button');
  popupNavButton.forEach((btn) => {
    btn.addEventListener('click', () => {
      const popup = document.querySelector('.popup');
      if (btn.classList.contains('previous') && position !== 0) {
        workSection.removeChild(popup);
        createPopup(position - 1);
        position -= 1;
        popupNavigation();
        popupClose();
      } else if (btn.classList.contains('next') && position !== 3) {
        workSection.removeChild(popup);
        createPopup(position + 1);
        position += 1;
        popupNavigation();
        popupClose();
      }
    });
  });
}

projectButton.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    position = index;
    createPopup(index);
    popupClose();
    popupNavigation();
  });
});
