const projects = [
  {
    name: 'Tonic',
    jobDescription: {
      company: 'CANOPY',
      role: 'Back End Dev',
      year: '2015'
    },
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    languages: ['html', 'css', 'javascript']
  },
  {
    name: 'Multi-Post Stories',
    jobDescription: {
      company: 'FACEBOOK',
      role: 'FullStack Dev',
      year: '2015'
    },
    description: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    languages: ['html', 'css', 'javascript']
  },
  {
    name: 'Facebook 360',
    jobDescription: {
      company: 'FACEBOOK',
      role: 'FullStack Dev',
      year: '2015'
    },
    description: 'Exploring the future of media in Facebook\'s first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.',
    languages: ['html', 'css', 'javascript']
  },
  {
    name: 'Multi-Post Stories',
    jobDescription: {
      company: 'Uber',
      role: 'Lead Developer',
      year: '2018'
    },
    description: 'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
    languages: ['html', 'css', 'javascript']
  }
]

const workSection = document.querySelector('#work-section')

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

  
  
  workSection.appendChild(projectHTML);
  
})

function createPopup(position) {
  const popup= document.createElement('section')
    popup.innerHTML = (`
    <div class="popup-content">
        <h3 class="project-title">
           ${projects[position].name}
        </h3>

        <img class="icon-cancel" src="images/popup-images/Icon-Cancel-Gray.svg" alt="">

        <ul class="project-info-top">
          <li class="job-place">${projects[position].jobDescription.company}</li>
          <img class="circle" src="images/Counter.svg" alt="">
          <li class="job-title gray">${projects[position].jobDescription.role}</li>
          <img class="circle" src="images/Counter.svg" alt="">
          <li class="project-year gray">${projects[position].jobDescription.year}</li>
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
  popup.classList.add('popup')
  document.body.appendChild(popup)
}

const iconCancel = document.querySelector('.icon-cancel');
const projectButton = document.querySelectorAll('.project-info .project-button');


projectButton.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    createPopup(index)
    let popup= document.querySelector('.popup')
    let closeButton =  document.querySelector('.icon-cancel').addEventListener('click', () => {
      document.body.removeChild(popup)
    })
  })
}); 
