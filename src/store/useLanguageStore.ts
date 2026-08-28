import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { translations, type Language } from '@/locales/translations';

interface LanguageState {
  lang: Language;
  t: typeof translations.es;
  toggleLanguage: () => void;
}

export const useLanguageStore = create<LanguageState>()(
  persist(
    (set, get) => ({
      lang: 'es',
      t: translations.es,
      toggleLanguage: () => {
        const newLang = get().lang === 'es' ? 'en' : 'es';
        set({ lang: newLang, t: translations[newLang] });
      },
    }),
    { 
      name: 'portafolio-lang-v2', 
      
      partialize: (state) => ({ lang: state.lang }), 
    }
  )
);