const projects = [
  {
    img: 'images/img1.png',
    name: 'Tip Calculator',
    description:
      'A simple calculator to calculate the tip between you and your friends on a night out',
    languages: ['html', 'css', 'javascript'],
    source: 'https://github.com/dodoburner/tip-calculator',
    live: 'https://dodoburner.github.io/tip-calculator/',
  },
  {
    img: 'images/air-pollution-img.png',
    name: 'Air Pollution Data',
    description:
      "This is a Single Page Application designed for mobile phones. It is created with React & Redux and uses 2 different API's to store a list of countries, cities and air pollution data for a given city. It has a search bar where you can directly look up for air pollution data of a city.",
    languages: ['html', 'css', 'javascript', 'react', 'redux'],
    source: 'https://github.com/dodoburner/City-Air-Pollution-Data',
    live: 'https://city-air-pollution-app.netlify.app/',
  },
  {
    img: 'images/dl-img.png',
    name: 'Dog Lovers Summit',
    description:
      ' A responsive website for a conference built with the mobile first approach. It has 2 pages; home and about.',
    languages: ['html', 'css', 'javascript'],
    source: 'https://github.com/dodoburner/DL-Global-Summit',
    live: 'https://dodoburner.github.io/DL-Global-Summit/',
  },
  {
    img: 'images/tracker.png',
    name: 'IP Adress Tracker',
    description:
      "Web App that shows  info about the user's public IP address and displays the location on a map. The user can search for info about other IP adresses using the search bar.",
    languages: ['html', 'css', 'javascript'],
    source: 'https://github.com/dodoburner/IP-Adress-Tracker',
    live: 'https://dodoburner.github.io/IP-Adress-Tracker/',
  },
];

const workSection = document.createElement('section');
workSection.id = 'work-section';
const mainSection = document.querySelector('main');
mainSection.insertBefore(workSection, mainSection.children[1]);

projects.forEach((project, index) => {
  const projectHTML = document.createElement('div');
  projectHTML.innerHTML = `
    <img class="project-img" src=${project.img}>
    <img class="project-img-desktop img${index + 1}" src=${project.img}>
    
    <div class="project-info">
      <h3 class="project-title">
        ${project.name}
      </h3>

      <p class="project-text">
        ${project.description}
      </p>

      <ul class="project-languages">
      </ul>

      <div class="project-buttons">
        <button type="button" class="project-button">
        <a href="${project.live}">
          See live
          <img src="images/popup-images/Icon-Export.svg" alt="">
        </a> 
        </button>
        <button type="button" class="project-button">
          <a href="${project.source}">
            See Source
            <img src="images/popup-images/Icon -GitHub.svg" alt="">
          </a>
        </button>
      </div>
    </div>
  `;
  projectHTML.className = 'project-section';
  workSection.appendChild(projectHTML);
  const ul = document.querySelectorAll('.project-languages')[index];
  project.languages.forEach((language) => {
    const li = document.createElement('li');
    li.classList.add('language');
    li.innerHTML = `${language}`;
    ul.appendChild(li);
  });
});
