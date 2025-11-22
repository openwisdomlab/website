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

  // Handle data-i18n-list for list items (comma-separated translations)
  const listElements = document.querySelectorAll('[data-i18n-list]');
  listElements.forEach((listElement) => {
    const key = listElement.getAttribute('data-i18n-list') as TranslationKey;
    if (key && ui[lang] && ui[lang][key]) {
      const items = ui[lang][key].split(', ');
      const liElements = listElement.querySelectorAll('li');
      liElements.forEach((li, index) => {
        if (items[index]) {
          // Find the text node (skip the span with bullet)
          const textNodes = Array.from(li.childNodes).filter(node =>
            node.nodeType === Node.TEXT_NODE ||
            (node.nodeType === Node.ELEMENT_NODE && !(node as Element).classList.contains('w-1.5'))
          );
          // Update the last text content (after the bullet span)
          if (textNodes.length > 0) {
            const lastNode = textNodes[textNodes.length - 1];
            if (lastNode) {
              if (lastNode.nodeType === Node.TEXT_NODE) {
                lastNode.textContent = items[index];
              } else {
                (lastNode as Element).textContent = items[index];
              }
            }
          }
        }
      });
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
