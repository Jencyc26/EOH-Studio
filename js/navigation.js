function openProject(project){

localStorage.setItem(
"current-project",
JSON.stringify(project)
);

window.location.href = "pages/project.html";

}
