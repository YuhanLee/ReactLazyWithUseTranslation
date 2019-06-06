import React from "react"; 

import { useTranslation } from "react-i18next";

const LogInPage = () => {
  const { t } = useTranslation(); 

  return (
    <h2>{t('Hello')}</h2> 
  ); 
}


export { LogInPage }; 