import React from "react";
import { IntlContextConsumer, changeLocale } from "gatsby-plugin-intl";

const languageName = {
  en: "Енглески",
  sr: "Српски",
};

const LanguageToggle = ({className}) => {
  return (
    <div>
      <IntlContextConsumer>
        {({ languages, language: currentLocale }) =>
          languages.map((language) => {
            if (language != currentLocale) {
              return (
                <a className={className} key={language} onClick={() => changeLocale(language)}>
                  {languageName[language]}
                </a>
              );
            }
          })
        }
      </IntlContextConsumer>
    </div>
  );
};

export default LanguageToggle;
