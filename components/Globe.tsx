import createGlobe from 'cobe';
import React, { useEffect, useRef } from 'react';

// Default config that can be overridden
const GLOBE_CONFIG: any = {
    width: 800,
    height: 800,
    onRender: () => { },
    devicePixelRatio: 2,
    phi: 0,
    theta: 0.3,
    dark: 0,
    diffuse: 0.4,
    mapSamples: 16000,
    mapBrightness: 1.2,
    baseColor: [1, 1, 1],
    markerColor: [251 / 255, 100 / 255, 21 / 255],
    glowColor: [1, 1, 1],
    markers: [
        { location: [14.0583, 108.2772], size: 0.03 },
        { location: [11.5564, 104.9282], size: 0.03 },
        // Add more markers as needed
    ],
};

const Globe: React.FC<{ className?: string, config?: any }> = ({ className, config = GLOBE_CONFIG }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        let phi = 0;
        let width = 0;

        // Resize handler to make it responsive
        const onResize = () => {
            if (canvasRef.current) {
                width = canvasRef.current.offsetWidth
            }
        }
        window.addEventListener('resize', onResize)
        onResize()

        if (!canvasRef.current) return;

        const globe = createGlobe(canvasRef.current, {
            ...config,
            width: width * 2,
            height: width * 2,
            onRender: (state) => {
                state.phi = phi;
                phi += 0.005;
                state.width = width * 2;
                state.height = width * 2;
            },
        });

        // Fade in effect
        setTimeout(() => {
            if (canvasRef.current) canvasRef.current.style.opacity = '1'
        })

        return () => {
            globe.destroy();
            window.removeEventListener('resize', onResize)
        };
    }, []);

    return (
        <div className={`relative flex items-center justify-center ${className}`}>
            <canvas
                ref={canvasRef}
                style={{
                    width: '100%',
                    height: '100%',
                    maxWidth: '100%',
                    aspectRatio: '1',
                    opacity: 0,
                    transition: 'opacity 1s ease'
                }}
            />
        </div>
    );
};

export default Globe;
