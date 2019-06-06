import i18n from "i18next";

import { en } from "./en";

i18n.init({
  ns: ["login", "common"], 
  defaultNS: "common", 
  resources: {
    en, 
  },
  lng: "en", 
});

export { i18n };
