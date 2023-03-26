import "reset-css";
import "./exterrnal-libs/layout/index.css";
import fallbackStylesheetUrl from "!!file-loader!./exterrnal-libs/layout/layout-without-css-vars.css";
import { supportsCssVars, createLink } from "./exterrnal-libs/layout/utils";
import "./index.entry.pcss";
import "./exterrnal-libs/breakpoints/index.css";

if (!supportsCssVars()) {
  createLink(fallbackStylesheetUrl);
}

document.addEventListener("DOMContentLoaded", () => {});

const refs = {
  dropdownTriger: document.querySelector(".dropdown"),
  listToShow: document.querySelector(".dropdown__list"),
};
refs.dropdownTriger.addEventListener("click", (e) => {
  if (e.currentTarget.classList.contains("dropdown")) {
    refs.listToShow.classList.toggle("is-shown");
    console.log("click");
  }
  e.stopPropagation();
});

window.addEventListener("click", () => {
  if (refs.listToShow.classList.contains("is-shown")) {
    refs.listToShow.classList.remove("is-shown");
    console.log("window", refs.listToShow);
  }
});
