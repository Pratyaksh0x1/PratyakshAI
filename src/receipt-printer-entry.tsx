import React from 'react';
import { createRoot } from 'react-dom/client';
import ReceiptPrinter, { ReceiptPrinterProps } from './components/ReceiptPrinter/ReceiptPrinter';

export function mountReceiptPrinter(containerId = 'receipt-printer-root', customProps: Partial<ReceiptPrinterProps> = {}) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const root = createRoot(container);
  root.render(<ReceiptPrinter {...customProps} />);
  return root;
}

if (typeof window !== 'undefined') {
  const init = () => {
    const el = document.getElementById('receipt-printer-root');
    if (el && !el.dataset.mounted) {
      el.dataset.mounted = 'true';
      mountReceiptPrinter('receipt-printer-root');
    }
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  (window as any).mountReceiptPrinter = mountReceiptPrinter;
}
