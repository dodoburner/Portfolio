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
    img: 'images/tesla-rental.png',
    name: 'Tesla Rental App',
    description:
      'A full-stack app built in a team of 4. The user must register to use the app, he can reserve a car and see the details of a car. The admin can also add or remove cars.',
    languages: ['React', 'Redux', 'Ruby', 'Ruby on Rails'],
    source: 'https://github.com/dodoburner/tesla-rental-app',
    live: 'https://tesla-car-rental-app.netlify.app/#/',
  },
  {
    img: 'images/ecommerce-site.png',
    name: 'E-Commerce Site',
    description:
      'This is a simple e-commerce website built with React & Redux. The app data is fetched from a graphql api. The user can navigate through the different categories and products and add/remove items from the cart.',
    languages: ['react', 'redux', 'html', 'css', 'javascript'],
    source: 'https://github.com/dodoburner/ecommerce-site',
    live: 'https://ecommerce-site99.netlify.app/',
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
      'A simple calculator to calculate the tip between you and your friends on a night out.',
    languages: ['html', 'css', 'javascript'],
    source: 'https://github.com/dodoburner/tip-calculator',
    live: 'https://dodoburner.github.io/tip-calculator/',
  },
];

const workSection = document.createElement('section');
workSection.id = 'work-section';
workSection.innerHTML = `
  <button class="see-more-btn">
  See More
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
  projectHTML.className = 'project-section hidden';
  workSection.appendChild(projectHTML);
  const ul = document.querySelectorAll('.project-languages')[index];
  project.languages.forEach((language) => {
    const li = document.createElement('li');
    li.classList.add('language');
    li.innerHTML = `${language}`;
    ul.appendChild(li);
  });
});

const projectContainers = document.querySelectorAll('.project-section');
const seeMoreBtn = document.querySelector('.see-more-btn');
let open = false;
seeMoreBtn.addEventListener('click', () => {
  open = !open;
  seeMoreBtn.innerHTML = open
    ? 'See Less <img class="arrow-img" src="images/icon-up.png" alt="">'
    : 'See More <img class="arrow-img" src="images/icon-down.png" alt="">';

  projectContainers.forEach((project, index) => {
    if (open) {
      project.style.display = 'block';
    } else if (index >= 3) {
      project.style.display = 'none';
    }
  });
});

window.addEventListener('resize', () => {
  if (window.innerWidth >= 768) {
    projectContainers.forEach((project) => {
      project.style.display = 'block';
    });
  } else {
    projectContainers.forEach((project, index) => {
      if (index >= 3) {
        project.style.display = 'none';
      }
    });
  }
});
