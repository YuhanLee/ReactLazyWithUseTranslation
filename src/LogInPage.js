import React from "react"; 

import { useTranslation, I18nextProvider } from "react-i18next";
import "./locales/i18n"; 

const LogInPage = () => {
  const { t } = useTranslation(); 
  return (
    <I18nextProvider>
      <h2>{t('HelloText')}</h2> 
    </I18nextProvider>
  ); 
}


export { LogInPage }; 