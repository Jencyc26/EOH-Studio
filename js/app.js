/* =========================
EOH GLOBAL APP SYSTEM
========================= */

/* ACTIVE PAGE DETECTION */

function getCurrentPage() {
  const path = window.location.pathname;
  return path.split("/").pop();
}

/* SIDEBAR NAVIGATION */

function navigate(page) {
  window.location.href = page;
}

/* PAGE TITLES */

const pageTitles = {
  "index.html": "Dashboard",
  "project.html": "Workspace",
  "characters.html": "Character Engine",
  "story.html": "Story Engine",
  "world.html": "World Engine",
  "timeline.html": "Timeline Engine",
  "assets.html": "
