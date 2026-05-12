/* =========================
EOH GLOBAL APP SYSTEM
========================= */

/* PAGE NAVIGATION */

function navigate(path){
window.location.href = path;
}

/* CURRENT PAGE */

function getCurrentPage(){

const path =
window.location.pathname;

return path.split("/").pop();

}

/* PAGE TITLE MAP */

const pageTitles = {

"index.html":"Dashboard",
"project.html":"Workspace",
"characters.html":"Character Engine",
"story.html":"Story Engine",
"world.html":"World Engine",
"timeline.html":"Timeline Engine",
"assets.html":"Asset Engine",
"generator.html":"Generator Engine",
"comic.html":"Comic Engine",
"voice.html":"Voice Lab"

};

/* CLOUD */

function openCloud(){

alert(
"☁ Gemini Cloud Integration\n\nFuture:\n• Cloud Sync\n• Backup\n• AI Project Memory"
);

}

/* STORAGE */

function openStorage(){

let total =
JSON.stringify(localStorage).length;

let kb =
(total / 1024).toFixed(2);

alert(
`💾 EOH Storage\n\nUsed: ${kb} KB`
);

}

/* NOTIFICATIONS */

function openNotifications(){

alert(
"🔔 Notifications\n\nNo active notifications."
);

}

/* SETTINGS */

function openSettings(){
window.location.href = "settings.html";
}
/* PAGE LOAD */

window.onload = function(){

const page =
getCurrentPage();

console.log(
"EOH Loaded:",
pageTitles[page] || page
);

};
