import { projects } from "./data/projectsData.js";

const projectsContainer = document.querySelector(".projects-container");

const projectCards = projects.map((project) => {
  return `<div class="project-card">
    <img
      class="project-card__image"
      src=${project.image}
      alt="${project.name} project screenshot"
    />
    <div class="project-card__content">
      <h3 class="project-card__lang">${project.tech}</h3>
      <h2 class="project-card__title">${project.name}</h2>
      <p class="project-card__description">${project.description}</p>
      <a class="project-card__link" target="_blank" href=${project.codeUrl}> Code &lt;/&gt; </a>
      <a class="project-card__link" target="_blank" href=${project.liveSiteUrl}> Preview &lt;/&gt; </a>
    </div>
  </div>`;
});
console.log(projectCards.join(""));

projectsContainer.innerHTML = projectCards.join(" ");
