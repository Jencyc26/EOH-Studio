const modal = document.getElementById("projectModal");
const openModal = document.getElementById("openModal");
const createProjectBtn = document.getElementById("createProject");

if(openModal){

openModal.onclick = () => {
modal.style.display = "flex";
};

window.onclick = (e) => {
if(e.target === modal){
modal.style.display = "none";
}
};

}

if(createProjectBtn){

createProjectBtn.onclick = () => {

const name = document.getElementById("projectName").value;
const style = document.getElementById("projectStyle").value;
const world = document.getElementById("projectWorld").value;

if(name === ""){
alert("Enter project name");
return;
}

const newProject = {
name,
style,
world
};

projects.push(newProject);

saveProjects(projects);

renderProjects();

modal.style.display = "none";

};

}
