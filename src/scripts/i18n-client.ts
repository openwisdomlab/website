// Client-side i18n script to apply translations dynamically
import { ui, defaultLang } from '~/i18n/languages';

type LangKey = keyof typeof ui;
type TranslationKey = keyof typeof ui[typeof defaultLang];

export function initI18n() {
  const currentLang = (document.documentElement.getAttribute('data-lang') || defaultLang) as LangKey;
  applyTranslations(currentLang);
}

export function applyTranslations(lang: LangKey) {
  // Get all elements with data-i18n attribute
  const elements = document.querySelectorAll('[data-i18n]');

  elements.forEach((element) => {
    const key = element.getAttribute('data-i18n') as TranslationKey;
    if (key && ui[lang] && ui[lang][key]) {
      element.textContent = ui[lang][key];
    }
  });

  // Update language display in toggle button
  const langToggle = document.querySelector('#language-toggle span');
  if (langToggle) {
    langToggle.textContent = lang.toUpperCase();
  }
}

// Initialize on page load
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initI18n);
} else {
  initI18n();
}

// Re-initialize on Astro page transitions
document.addEventListener('astro:page-load', initI18n);
