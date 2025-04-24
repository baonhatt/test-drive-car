import { useCallback } from 'react';

const useSmoothScroll = () => {
  const scrollToSection = useCallback((e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });

      // Update URL without causing a page jump
      window.history.pushState(null, '', `#${targetId}`);
    }
  }, []);

  return { scrollToSection };
};

export default useSmoothScroll; 