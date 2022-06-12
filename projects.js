const projects = [
  {
    name: 'Tonic',
    jobDescription: {
      company: 'CANOPY',
      role: 'Back End Dev',
      year: '2015'
    },
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    languages : ['html', 'css', 'javascript']
  },

  {
    name: 'Multipurpose Stories',
    jobDescription: {
      company: 'CANOPY',
      role: 'Back End Dev',
      year: '2015'
    },
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    languages : ['html', 'css', 'javascript']
  },

  {
    name: 'Tonic 3',
    jobDescription: {
      company: 'CANOPY',
      role: 'Back End Dev',
      year: '2015'
    },
    description: 'sbacjlsbncalksnc;laksmnc;alsmc;asmc;ams;cams;cma;slcma;smcldsknvlsndvlskdnv;sdv',
    languages : ['html', 'css', 'javascript']
  }
]

const workSection = document.querySelector('#work-section')
const popup = document.querySelector('.popup');

projects.forEach((project) => {
  let projectHTML = document.createElement('div');
  let popupHTML = document.createElement('div');
  projectHTML.innerHTML =(`
  <div class="project-section project1">
    <img class="project-img" src="images/SnapshootPortfolio(2).jpg" alt="project tonic homepage">
    <img class="project-img-desktop img1" src="images/desktop-images/img1.png" alt="project tonic homepage">
    
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
        <li class="language">${project.languages[0]}</li>
        <li class="language">${project.languages[1]}</li>
        <li class="language">${project.languages[2]}</li>
      </ul>

      <button type="button" class="project-button">
        See Project
      </button>
    </div>
  </div>

  `);

  popupHTML.innerHTML = (`
    <div class="popup-content">
        <h3 class="project-title">
           ${project.name}
        </h3>

        <img class="icon-cancel" src="images/popup-images/Icon-Cancel-Gray.svg" alt="">

        <ul class="project-info-top">
          <li class="job-place">${project.jobDescription.company}</li>
          <img class="circle" src="images/Counter.svg" alt="">
          <li class="job-title gray">${project.jobDescription.role}</li>
          <img class="circle" src="images/Counter.svg" alt="">
          <li class="project-year gray">${project.jobDescription.year}</li>
        </ul>

        <img class="project-img-desktop" src="images/desktop-images/img1.png" alt="project tonic homepage">
        <img class="popup-project-img" src="images/SnapshootPortfolio(1).jpg" alt="">

        <div class="popup-bottom">
          <p class="project-text">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent
          </p>

          <div class="badges-buttons">
            <ul class="project-languages">
              <li class="language">html</li>
              <li class="language">css</li>
              <li class="language">javaScript</li>
            </ul>
  
            <div class="popup-buttons">
              <button type="button" class="project-button">
                See live
                <img src="images/popup-images/Icon-Export.svg" alt="">
              </button>
              <button type="button" class="project-button">
                See Source
                <img src="images/popup-images/Icon -GitHub.svg" alt="">
              </button>
            </div>
          </div>
        </div>
      </div>
  
  `);
  
  workSection.appendChild(projectHTML);
  popup.appendChild(popupHTML);
})

const iconCancel = document.querySelector('.icon-cancel');
const projectButton = document.querySelectorAll('.project-info .project-button');

function togglePopup(element) {
  element.addEventListener('click', (e) => {
    popup.classList.toggle('display-none');
    
  });
}

togglePopup(iconCancel);

projectButton.forEach((btn, index) => {
  const popups = document.querySelectorAll('.popup')
  if()
  togglePopup(btn);
})
