import React, { PropsWithChildren, useEffect, useRef } from 'react';

type Props = PropsWithChildren<{
  as?: 'div' | 'article';
  className?: string;
}>;

export default function ScrollReveal({ as: Tag = 'div', className = '', children }: Props) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element || !('IntersectionObserver' in window)) return;
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (preference.matches) return;

    const reveal = () => {
      element.classList.remove('reveal-pending');
      observer.unobserve(element);
    };
    const observer = new IntersectionObserver(entries => {
      if (entries.some(entry => entry.isIntersecting)) reveal();
    }, { threshold: 0.08 });

    element.classList.add('reveal-pending');
    observer.observe(element);
    const onPreferenceChange = () => { if (preference.matches) reveal(); };
    preference.addEventListener('change', onPreferenceChange);
    element.addEventListener('focusin', reveal);
    return () => {
      observer.disconnect();
      element.classList.remove('reveal-pending');
      element.removeEventListener('focusin', reveal);
      preference.removeEventListener('change', onPreferenceChange);
    };
  }, []);

  return <Tag ref={element => { ref.current = element; }} className={`scroll-reveal ${className}`}>{children}</Tag>;
}
