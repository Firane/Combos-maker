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

let inputDisplayed = Array.from(
  document.querySelectorAll(
    ".combos__display__list__comboContainer__oneCombo__inputdisplayed"
  )
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
      theDiv.innerHTML += `
      <div class='combos__display__list__comboContainer__oneCombo__inputdisplayed'></div>
      `;

      everyIconsContainer = theDiv.getElementsByTagName("div");
      everyIconsContainer[everyIconsContainer.length - 1].appendChild(theClone);

      inputDisplayed = Array.from(
        document.querySelectorAll(
          ".combos__display__list__comboContainer__oneCombo__inputdisplayed"
        )
      );

      listenInputDisplayed();
      // ca ajoute une balise img au lieu de la div contenant limg ca pause soucis plus tard pour le add event listener
    });
  });
};

const listenEdits = () => {
  edits.map((element) => {
    element.addEventListener("click", (e) => {
      if (edit === undefined) {
        listenInputDisplayed();
        edit = e.target.parentElement.parentElement;
        let theDiv = edit.getElementsByTagName("div")[1];
        console.log("defined");
        console.log(theDiv);
        theDiv.style.border = "2px dashed white";
      } else {
        console.log("undefined");
        edit = undefined;
        const combos = Array.from(
          document.querySelectorAll(
            ".combos__display__list__comboContainer__oneCombo"
          )
        );
        console.log(combos);
        combos.map((element) => {
          element.style.border = "2px solid white";
        });
      }
    });
  });
};

// const listenComboContainer = () => {
//   comboContainer.map((element) => {
//     element.addEventListener("click", (e) => {
//       if (e.target.tagName === "IMG") {
//         console.log("saucisse");
//       }
//     });
//   });
// };

const listenInputDisplayed = () => {
  inputDisplayed.map((element) => {
    element.addEventListener("click", (e) => {
      element.remove();
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
  // listenComboContainer();

  charactersListContainer.classList.add("addBorder");
});

combosMakerMinimizer.addEventListener("click", (e) => {
  console.log("minimizer");
  const teub = getComputedStyle(combosMakerInputsList);
  console.log(teub);
  console.log(teub.height);

  if (teub.height != "0px") {
    // combosMakerInputsList.classList.add("minimizerOut");
    // combosMakerInputsList.classList.remove("minimizerIn");
    combosMakerInputsList.style.height = "0px";
    combosMakerInputsList.style.overflow = "hidden";
  } else {
    // combosMakerInputsList.classList.add("minimizerIn");
    // combosMakerInputsList.classList.remove("minimizerOut");
    combosMakerInputsList.style.height = "auto";
  }
});
