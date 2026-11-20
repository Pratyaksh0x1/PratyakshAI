import React from 'react';
import { createRoot } from 'react-dom/client';
import Lanyard, { LanyardProps } from './components/Lanyard/Lanyard';

const defaultProps: LanyardProps = {
  frontImage: 'assets/card-front.png',
  backImage: 'assets/card-back.png',
  strapImage: 'assets/strap.png',
  strapColor: '#1e222d',
  strapWidth: 0.7,
  finish: 'glossy',
  cardColor: '#ffffff',
  metal: 'silver',
  orientation: 'portrait',
  cornerRadius: 0.28,
  size: 0.52,
  anchor: 'left',
  strapLength: 0.5,
  gravity: 1,
  damping: 0.5,
  elasticity: 0.55,
  breeze: 0.45,
  interactive: true,
  intro: true
};

export function mountLanyard(containerId = 'lanyard-card', customProps: Partial<LanyardProps> = {}) {
  const container = document.getElementById(containerId);
  if (!container) {
    console.warn(`Lanyard mount target #${containerId} not found.`);
    return;
  }

  const props: LanyardProps = {
    ...defaultProps,
    ...customProps
  };

  const root = createRoot(container);
  root.render(<Lanyard {...props} />);
  return root;
}

// Auto-mount when DOM is ready if the element exists
if (typeof window !== 'undefined') {
  const init = () => {
    const el = document.getElementById('lanyard-card');
    if (el && !el.dataset.mounted) {
      el.dataset.mounted = 'true';
      mountLanyard('lanyard-card');
    }
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // Also expose to window for external control
  (window as unknown as { mountLanyard: typeof mountLanyard; Lanyard: typeof Lanyard }).mountLanyard = mountLanyard;
  (window as unknown as { mountLanyard: typeof mountLanyard; Lanyard: typeof Lanyard }).Lanyard = Lanyard;
}
