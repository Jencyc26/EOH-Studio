function saveProjects(projects){
localStorage.setItem(
"eoh-projects",
JSON.stringify(projects)
);
}

function loadProjects(){
return JSON.parse(
localStorage.getItem("eoh-projects")
) || [];
}
