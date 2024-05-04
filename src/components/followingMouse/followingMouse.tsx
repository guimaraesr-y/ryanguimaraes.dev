'use client';

import React, { useState, useEffect } from 'react';

interface CircleProps {
    radius?: number;
    color?: string;
}

const FollowingMouse: React.FC<CircleProps> = ({ radius = 25, color = 'blue' }) => {
    const [moved, setMoved] = useState(false);
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    const handleMouseMove = (event: MouseEvent) => {
        setMoved(true);
        setX(event.pageX - radius);
        setY(event.pageY - radius);
    };

    useEffect(() => {
        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    });

    const circleStyle: React.CSSProperties = {
        position: 'absolute',
        left: `${x}px`,
        top: `${y}px`,
        width: `${radius * 2}px`,
        height: `${radius * 2}px`,
        borderRadius: '50%',
        border: '2px solid ' + color,
        pointerEvents: 'none',
    };

    return moved ? <div style={circleStyle} /> : '';
};

export default FollowingMouse;
