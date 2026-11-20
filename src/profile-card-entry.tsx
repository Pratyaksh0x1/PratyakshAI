import React from 'react';
import { createRoot } from 'react-dom/client';
import ProfileCard, { ProfileCardProps } from './components/ProfileCard/ProfileCard';

const defaultProps: ProfileCardProps = {
  name: 'Pratyaksh Tomar',
  title: 'Aspiring Software Engineer',
  handle: 'Pratyaksh0x1',
  status: 'Online',
  statusColor: '#22c55e',
  contactText: 'Contact',
  avatarUrl: 'assets/1.jpeg',
  miniAvatarUrl: 'assets/1.jpeg',
  holo: 0.75,
  glare: 0.45,
  tiltStrength: 14,
  parallax: 9,
  radius: 18,
  enableTilt: true,
  intro: true,
  showUserInfo: true,
  theme: 'light',
  backdropColor: '#fcf8ee',
  onContactClick: () => {
    window.open('https://www.linkedin.com/in/pratyaksh-tomar-112bb6337', '_blank', 'noopener,noreferrer');
  }
};

export function mountProfileCard(containerId = 'profile-card-container', customProps: Partial<ProfileCardProps> = {}) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const props = { ...defaultProps, ...customProps };
  const root = createRoot(container);
  root.render(<ProfileCard {...props} />);
  return root;
}

if (typeof window !== 'undefined') {
  const init = () => {
    const el = document.getElementById('profile-card-container');
    if (el && !el.dataset.mounted) {
      el.dataset.mounted = 'true';
      mountProfileCard('profile-card-container');
    }
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  (window as any).mountProfileCard = mountProfileCard;
}
