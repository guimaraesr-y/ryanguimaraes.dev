import React from 'react';
import { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

const PulseLoadingWheel = ({ size }: {
    size?: number
}) => {
  const circleRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.to(circleRef.current, {
      scale: 1.2,
      yoyo: true,
      repeat: -1,
      duration: 1,
      ease: 'power4.inOut',
    });
  });

  return (
    <div className="flex items-center justify-center">
      <div className="rounded-full bg-white" ref={circleRef} style={{ width: size, height: size }}></div>
    </div>
  );
};

export default PulseLoadingWheel;
