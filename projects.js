const projects = [
  {
    mobileImage: 'src="images/SnapshootPortfolio(0).jpg" alt="project tonic homepage"',
    desktopImage: 'src="images/desktop-images/img1.png" alt="project tonic homepage"',
    name: 'Tonic',
    jobDescription: {
      company: 'CANOPY',
      role: 'Back End Dev',
      year: '2015',
    },
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    languages: ['html', 'css', 'javascript'],
  },
  {
    mobileImage: 'src="images/SnapshootPortfolio(1).jpg" alt="project multi-post-stories homepage"',
    desktopImage: 'src="images/desktop-images/img2.png" alt="project multi-post-stories homepage"',
    name: 'Multi-Post Stories',
    jobDescription: {
      company: 'FACEBOOK',
      role: 'FullStack Dev',
      year: '2015',
    },
    description: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    languages: ['html', 'css', 'javascript'],
  },
  {
    mobileImage: 'src="images/SnapshootPortfolio(2).jpg" alt="project tonic homepage"',
    desktopImage: 'src="images/desktop-images/img3.png" alt="project tonic homepage"',
    name: 'Facebook 360',
    jobDescription: {
      company: 'FACEBOOK',
      role: 'FullStack Dev',
      year: '2015',
    },
    description: 'Exploring the future of media in Facebook\'s first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.',
    languages: ['html', 'css', 'javascript'],
  },
  {
    mobileImage: 'src="images/SnapshootPortfolio(3).jpg" alt="project multi-post-stories homepage"',
    desktopImage: 'src="images/desktop-images/img4.png" alt="project multi-post-stories homepage"',
    name: 'Multi-Post Stories',
    jobDescription: {
      company: 'Uber',
      role: 'Lead Developer',
      year: '2018',
    },
    description: 'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
    languages: ['html', 'css', 'javascript'],
  },
];

const workSection = document.createElement('section');
workSection.id = 'work-section';
const mainSection = document.querySelector('main');
mainSection.insertBefore(workSection, mainSection.children[1]);

projects.forEach((project, index) => {
  const projectHTML = document.createElement('div');
  projectHTML.innerHTML = (`
    <img class="project-img" ${project.mobileImage}>
    <img class="project-img-desktop img${index + 1}" ${project.desktopImage}>
    
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
  `);
  projectHTML.className = 'project-section';
  workSection.appendChild(projectHTML);
});

function createPopup(position) {
  const popup = document.createElement('div');
  popup.innerHTML = (`
    <div class="popup-content">
        <h3 class="project-title">
           ${projects[position].name}
        </h3>

        <img class="icon-cancel" src="images/popup-images/Icon-Cancel-Gray.svg" alt="">
        <img class="popup-project-img" src="images/SnapshootPortfolio(${position}).jpg" alt="">

        <ul class="project-info-top">
          <li class="job-place">${projects[position].jobDescription.company}</li>
          <img class="circle" src="images/Counter.svg" alt="">
          <li class="job-title gray">${projects[position].jobDescription.role}</li>
          <img class="circle" src="images/Counter.svg" alt="">
          <li class="project-year gray">${projects[position].jobDescription.year}</li>
        </ul>

        <img class="project-img-desktop-popup" src="images/desktop-images/img${position + 1}.png" alt="project tonic homepage">

        <div class="popup-bottom">
          <p class="project-text">
            ${projects[position].description}
          </p>

          <div class="badges-buttons">
            <ul class="project-languages">
              <li class="language">${projects[position].languages[0]}</li>
              <li class="language">${projects[position].languages[1]}</li>
              <li class="language">${projects[position].languages[2]}</li>
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
        <div class="projects-navigation-buttons">
            <button type="button">
            <svg width="20" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M20 .755l-14.374 11.245 14.374 11.219-.619.781-15.381-12 15.391-12 .609.755z"/></svg>
              previous project
            </button>
            <button type="button">
              next project
              <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M4 .755l14.374 11.245-14.374 11.219.619.781 15.381-12-15.391-12-.609.755z"/></svg>
            </button>
          </div>  
      </div>
  `);
  popup.classList.add('popup');
  workSection.appendChild(popup);
  document.body.classList.toggle('not-scrollable');
}

const projectButton = document.querySelectorAll('.project-info .project-button');

projectButton.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    createPopup(index);
    const popup = document.querySelector('.popup');
    document.querySelector('.icon-cancel').addEventListener('click', () => {
      workSection.removeChild(popup);
      document.body.classList.toggle('not-scrollable');
    });
  });
});
