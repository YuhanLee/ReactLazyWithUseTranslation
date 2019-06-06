import i18n from "i18next";
import { initReactI18next } from 'react-i18next';

import { en } from "./en";

i18n
 .use(initReactI18next)  //passing instance
 .init({
  ns: ["login", "common"], 
  defaultNS: "common", 
  resources: {
    en, 
  },
  lng: "en", 
});

export { i18n };
