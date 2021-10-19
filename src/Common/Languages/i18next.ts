import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import {langDetector} from './langDetector';
import ru_RU from './ru_RU.json';

const resources = {
  ru_RU,
};

i18n.use(initReactI18next).init({
  resources,
  compatibilityJSON: 'v3',
  lng: langDetector(),
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
