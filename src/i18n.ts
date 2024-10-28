import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import uzTranslation from './locales/uz/translation.json';
import enTranslation from './locales/en/translation.json';
import ruTranslation from './locales/ru/translation.json';

i18n.use(initReactI18next).init({
    resources: {
        uz: { translation: uzTranslation },
        en: { translation: enTranslation },
        ru: { translation: ruTranslation }
    },
    lng: 'uz', // boshlang‘ich til
    fallbackLng: 'en', // agar til topilmasa, ingliz tiliga o‘tiladi
    interpolation: {
        escapeValue: false // React xavfsiz, shuning uchun bu kerak emas
    }
});

export default i18n;
