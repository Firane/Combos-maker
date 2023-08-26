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
let edit;
const comboContainer = Array.from(
  document.querySelectorAll(".combos__display__list__comboContainer__oneCombo")
);

const edits = Array.from(document.querySelectorAll(".edit"));

const input = Array.from(
  document.querySelectorAll(".combos__display__editor__inputsList__input")
);
const navArrow = document.querySelectorAll(".fa-caret-left");
// Ca gere le bouton du menu de nav

const navShow = () => {
  const navClassChecker = nav.classList.contains("hidden");
  const eachIcon = Array.from(navArrow);
  if (navClassChecker) {
    nav.classList.remove("hidden");
    nav.classList.add("showed");
    eachIcon.map((i) => {
      i.classList.add("OnRight");
      i.classList.remove("OnLeft");
    });
  } else {
    nav.classList.add("hidden");
    nav.classList.remove("showed");
    eachIcon.map((i) => {
      i.classList.add("OnLeft");
      i.classList.remove("OnRight");
    });
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

const listenInputs = () => {
  input.map((element) => {
    element.addEventListener("click", (e) => {
      let theClone = e.target.firstElementChild.cloneNode(true);
      let theDiv = edit.getElementsByTagName("div")[1];
      console.log(theDiv);
      console.log(theClone);
      theDiv.appendChild(theClone);

      // ca ajoute une balise img au lieu de la div contenant limg ca pause soucis plus tard pour le add event listener
    });
  });
};

const listenEdits = () => {
  edits.map((element) => {
    element.addEventListener("click", (e) => {
      edit = e.target.parentElement.parentElement;
      console.log(edit);
      console.log(edit.getElementsByTagName("div")[1]);
    });
  });
};

const listenComboContainer = () => {
  comboContainer.map((element) => {
    element.addEventListener("click", (e) => {
      console.log(e);
      if (e.target.tagName === "IMG") {
        console.log("saucisse");
      }
    });
  });
};

scroller.addEventListener("click", (e) => {
  navShow();
});

window.addEventListener("load", () => {
  liGenerator();
  listenInputs();
  listenEdits();
  listenComboContainer();
  charactersListContainer.classList.add("addBorder");
});
