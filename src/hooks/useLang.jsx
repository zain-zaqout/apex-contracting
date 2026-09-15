'use client';

import { createContext, useContext, useEffect, useMemo } from 'react';
import { translations } from '../data/translations';

const LangContext = createContext(null);

export function LangProvider({ children }) {
  const lang = 'en';
  const dir = 'ltr';
  useEffect(() => { document.documentElement.lang = lang; document.documentElement.dir = dir; }, [lang, dir]);
  const value = useMemo(() => ({ lang, dir, t: translations.en }), [lang, dir]);
  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error('useLang must be used within LangProvider');
  return ctx;
}
