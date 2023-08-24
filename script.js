const characters = [
  "Ryu",
  "JP",
  "Kimberly",
  "Manon",
  "Marisa",
  "Lily",
  "Jamie",
  "Chun-li",
  "Blanka",
  "Ken",
  "Cammy",
  "Guile",
  "Dhalsim",
  "Zangief",
  "Juri",
  "Luke",
  "DeeJay",
  "Honda",
];

// Ca gere le bouton du menu de nav

const navShow = () => {
  const navClassChecker = nav.classList.contains("hidden");
  if (navClassChecker) {
    nav.classList.remove("hidden");
    nav.classList.add("showed");
  } else {
    nav.classList.add("hidden");
    nav.classList.remove("showed");
  }
};

const liGenerator = () => {
  characters.map((i) => {
    charactersListContainer.innerHTML += `
        
            <li class="character__list__pick">
            <button type="button">
            <img
                class="character__list__thumb"
                src="/Images/Characters/${i}Thumb.webp"
            />
            <h3>${i}</h3>
            </button>
            </li>
        
        `;
  });
};

scroller.addEventListener("click", (e) => {
  navShow();
});

window.addEventListener("load", () => {
  liGenerator();
  charactersListContainer.classList.add("addBorder");
});
