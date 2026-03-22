import { createElement } from 'react';
import { pdf } from '@react-pdf/renderer';
import CVDocument from '../components/cv/CVDocument.jsx';

/**
 * Generates a bilingual CV PDF and triggers a browser download.
 * @param {'en' | 'pt'} lang — language code (defaults to 'en')
 * @returns {Promise<void>}
 */
export async function exportCV(lang = 'en') {
  const resolvedLang = lang.startsWith('pt') ? 'pt' : 'en';
  const filename = resolvedLang === 'pt'
    ? 'Ulpio-Netto-Curriculo.pdf'
    : 'Ulpio-Netto-Resume.pdf';

  const blob = await pdf(
    createElement(CVDocument, { lang: resolvedLang }),
  ).toBlob();

  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  link.click();
  URL.revokeObjectURL(url);
}
