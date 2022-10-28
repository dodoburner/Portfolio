const projects = [
  {
    img: 'images/kanban.png',
    name: 'Kanban Board',
    description:
      'A kanban board is a tool that can be used to manage work at a personal or organizational level. It visually depicts work at various stages of a process using cards to represent work items and columns to represent each stage of the process.',
    languages: ['react', 'redux', 'html', 'css', 'javascript'],
    source: 'https://github.com/dodoburner/kanban-task-management-web-app',
    live: 'https://kanban-task-management-app.netlify.app/',
  },
  {
    img: 'images/air-pollution-img.png',
    name: 'Air Pollution Data',
    description:
      "This is a Single Page Application designed for mobile phones. It uses 2 different API's. First to show a list of countries and cities, and second to show air pollution data for a given city.",
    languages: ['react', 'redux', 'html', 'css', 'javascript'],
    source: 'https://github.com/dodoburner/City-Air-Pollution-Data',
    live: 'https://city-air-pollution-app.netlify.app/',
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
    img: 'images/dl-img.png',
    name: 'Dog Lovers Summit',
    description:
      ' A responsive website for a conference built with the mobile first approach. It has 2 pages; home and about.',
    languages: ['html', 'css', 'javascript'],
    source: 'https://github.com/dodoburner/DL-Global-Summit',
    live: 'https://dodoburner.github.io/DL-Global-Summit/',
  },
  {
    img: 'images/mm.png',
    name: 'Math Magicians',
    description:
      'This is a single page app built with React that has 3 sections; Home, Calculator, and Quotes. The home page welcomes the user, the calculator calculates, and the quotes page displays a math quote from an API.',
    languages: ['react', 'html', 'css', 'javascript'],
    source: 'https://github.com/dodoburner/math-magicians',
    live: 'https://math-magicians-mm.netlify.app/',
  },
];

const workSection = document.createElement('section');
workSection.id = 'work-section';
workSection.innerHTML = `
  <button class="see-more-btn">
  SEE MORE
  <img class="arrow-img" src="images/icon-down.png" alt="">
  </button>
`;
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
        <a href="${project.live}" target="_blank">
          See live
          <img src="images/popup-images/Icon-Export.svg" alt="">
        </a> 
        </button>
        <button type="button" class="project-button">
          <a href="${project.source}" target="_blank">
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
