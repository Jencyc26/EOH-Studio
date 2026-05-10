/* =========================
EOH STORAGE ENGINE
========================= */

/* CURRENT PROJECT */

function getCurrentProject(){

return JSON.parse(
localStorage.getItem("current-project")
);

}

/* STORAGE KEY */

function createKey(type){

const project =
getCurrentProject();

if(!project){

return null;

}

return `${type}-${project.name}`;

}

/* LOAD */

function loadData(type){

const key =
createKey(type);

if(!key){

return [];

}

return JSON.parse(
localStorage.getItem(key)
) || [];

}

/* SAVE */

function saveData(type,data){

const key =
createKey(type);

localStorage.setItem(
key,
JSON.stringify(data)
);

}

/* ADD */

function addItem(type,item){

const data =
loadData(type);

/* DUPLICATE CHECK */

const duplicate =
data.some(entry =>

entry.name &&
item.name &&

entry.name.toLowerCase()
===
item.name.toLowerCase()

);

if(duplicate){

alert(
`${type} already exists`
);

return false;

}

data.push(item);

saveData(type,data);

return true;

}

/* DELETE */

function deleteItem(type,index){

const data =
loadData(type);

const deleted =
data.splice(index,1)[0];

saveData(type,data);

localStorage.setItem(
`${type}-undo`,
JSON.stringify(deleted)
);

}

/* UNDO */

function undoDelete(type){

const deleted =
JSON.parse(
localStorage.getItem(
`${type}-undo`
)
);

if(!deleted){

alert("Nothing to undo");

return;

}

const data =
loadData(type);

data.push(deleted);

saveData(type,data);

localStorage.removeItem(
`${type}-undo`
);

}

/* UPDATE */

function updateItem(type,index,newData){

const data =
loadData(type);

data[index] = newData;

saveData(type,data);

}

/* EXPORT */

function exportProjectData(){

const project =
getCurrentProject();

if(!project){

alert("No project");

return;

}

const exportData = {

project,

characters:
loadData("characters"),

story:
loadData("story"),

world:
loadData("world"),

timeline:
loadData("timeline"),

assets:
loadData("assets")

};

const blob =
new Blob(
[
JSON.stringify(
exportData,
null,
2
)
],
{
type:"application/json"
}
);

const url =
URL.createObjectURL(blob);

const a =
document.createElement("a");

a.href = url;

a.download =
`${project.name}.json`;

a.click();

}

/* IMPORT */

function importProjectData(file){

const reader =
new FileReader();

reader.onload = function(e){

const imported =
JSON.parse(e.target.result);

if(imported.characters){

saveData(
"characters",
imported.characters
);

}

if(imported.story){

saveData(
"story",
imported.story
);

}

if(imported.world){

saveData(
"world",
imported.world
);

}

if(imported.timeline){

saveData(
"timeline",
imported.timeline
);

}

if(imported.assets){

saveData(
"assets",
imported.assets
);

}

alert(
"Project Imported"
);

};

reader.readAsText(file);

}
