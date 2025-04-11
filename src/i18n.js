import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      welcome: "Welcome to Prelease Canada",
      description: "Find your next rental home easily and quickly."
    }
  },
  fr: {
    translation: {
      welcome: "Bienvenue sur Prelease Canada",
      description: "Trouvez votre prochaine location facilement et rapidement."
    }
  },
  pt: {
    translation: {
      welcome: "Bem-vindo ao Prelease Canada",
      description: "Encontre sua próxima casa para alugar de forma fácil e rápida."
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
