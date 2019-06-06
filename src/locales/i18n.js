import i18n from "i18next";

import { en } from "./en";

i18n.init({
  ns: ["login"], 
  resources: {
    en, 
  },
  lng: "en", 
});

export { i18n };
