
import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import { tr, en } from "./locales";

i18next.use(initReactI18next).init({
    compatibilityJSON: 'v3',
    lng: "en",
    fallbackLng: "en",
    resources: {
        en: {
            translation: en,
        },
        tr: {
            translation: tr,
        },
    },
});

export default i18next;