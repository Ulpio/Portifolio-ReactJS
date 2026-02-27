import { createElement } from 'react';
import { pdf } from '@react-pdf/renderer';
import CVDocument from '../components/cv/CVDocument.jsx';

const FILENAME = 'Ulpio-Netto-CV.pdf';

/**
 * Gera o PDF do currículo e dispara o download no navegador.
 * @returns {Promise<void>}
 */
export async function exportCV() {
  const blob = await pdf(createElement(CVDocument)).toBlob();
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = FILENAME;
  link.click();
  URL.revokeObjectURL(url);
}
