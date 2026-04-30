import { useEffect } from 'react';

const CursorTrail = () => {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const spawn = (x, y) => {
      const count = 5;
      for (let i = 0; i < count; i++) {
        const star = document.createElement('div');
        const size = Math.random() * 8 + 4;
        const angle = Math.random() * 360;
        const distance = Math.random() * 30 + 10;
        const duration = Math.random() * 400 + 300;
        const color = ['#1D9E75', '#378ADD', '#ffffff', '#9FE1CB', '#B5D4F4'][Math.floor(Math.random() * 5)];

        star.style.cssText = `
          position: fixed;
          width: ${size}px;
          height: ${size}px;
          pointer-events: none;
          z-index: 99999;
          left: ${x}px;
          top: ${y}px;
          transform: translate(-50%, -50%);
          font-size: ${size}px;
          line-height: 1;
          color: ${color};
          user-select: none;
          transition: all ${duration}ms ease-out;
        `;
        star.innerHTML = ['✦', '✧', '⋆', '★', '·'][Math.floor(Math.random() * 5)];
        document.body.appendChild(star);

        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            const rad = angle * Math.PI / 180;
            star.style.left = (x + Math.cos(rad) * distance) + 'px';
            star.style.top = (y + Math.sin(rad) * distance) + 'px';
            star.style.opacity = '0';
            star.style.transform = `translate(-50%, -50%) scale(0)`;
          });
        });

        setTimeout(() => star.remove(), duration + 50);
      }
    };

    let lastX = 0, lastY = 0;
    const onMove = e => {
      const dx = e.clientX - lastX;
      const dy = e.clientY - lastY;
      if (Math.sqrt(dx * dx + dy * dy) > 8) {
        spawn(e.clientX, e.clientY);
        lastX = e.clientX;
        lastY = e.clientY;
      }
    };

    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  return null;
};

export default CursorTrail;
