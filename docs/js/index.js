const mainBtn = document.getElementById("main-btn");
const profileBtn = document.getElementById("profile-btn");
const devBtn = document.getElementById("dev-btn");
const artBtn = document.getElementById("art-btn");
const contactBtn = document.getElementById("contact-btn");

let main = document.querySelector(".main");
let profile = document.querySelector(".profile");
let dev = document.querySelector(".dev");
let art = document.querySelector(".art");
let contact = document.querySelector(".contact");

let sections = [main, profile, dev, art, contact];

function activateSection(section) {
  section.classList.add("active");
  section.classList.remove("top");
  section.classList.remove("tab");
}

function deactivateSection(section) {
  sections.map((item) => {
    if (item != section) {
      item.classList.remove("active");
    }
  });
}

function activateHover(section){
    sections.map((item) => {
        if (item != section){
            item.classList.add("tab");
        }
    })
}

function mainActivate(section) {
  activateSection(section);
  deactivateSection(section);
  activateHover(section);
    profile.classList.remove("profile-top");
    dev.classList.remove("dev-top");
    art.classList.remove("art-top");
    contact.classList.remove("dev-top"); 
}

function profileActivate(section) {
  activateSection(section);
  deactivateSection(section);
  activateHover(section);

  main.classList.add("main-top");
  dev.classList.remove("dev-top");
  art.classList.remove("art-top");
  contact.classList.remove("contact-top");
}

function devActivate(section) {
  activateSection(section);
  deactivateSection(section);
  activateHover(section);

  main.classList.add("main-top");
  profile.classList.add("profile-top");
  art.classList.remove("art-top");
  contact.classList.remove("contact-top");
}

function artActivate(section) {
    activateSection(section);
    deactivateSection(section);
    activateHover(section);
  
    main.classList.add("main-top");
    profile.classList.add("profile-top");
    dev.classList.add("dev-top");
    contact.classList.remove("contact-top");
  }

  function contactActivate(section) {
    activateSection(section);
    deactivateSection(section);
    activateHover(section);
  
    main.classList.add("main-top");
    profile.classList.add("profile-top");
    dev.classList.add("dev-top");
    art.classList.add("art-top");
  }
