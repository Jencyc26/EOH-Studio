let projects = loadProjects();

function renderProjects(){

const grid = document.getElementById("projectGrid");

if(!grid) return;

const old = document.querySelectorAll(".generated-project");
old.forEach(card => card.remove());

projects.forEach(project => {

const card = document.createElement("div");

card.classList.add(
"project-card",
"generated-project"
);

card.innerHTML = `
<h3>${project.name}</h3>
<p>${project.style}<br>${project.world}</p>
`;

card.onclick = () => {
openProject(project);
};

grid.appendChild(card);

});

}
