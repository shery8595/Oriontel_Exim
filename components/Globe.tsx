import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const Globe: React.FC<{ className?: string }> = ({ className }) => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    
    // Dynamic camera position based on screen width
    const isMobile = window.innerWidth < 768;
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 1000);
    camera.position.z = isMobile ? 3.8 : 2.8;

    const renderer = new THREE.WebGLRenderer({ 
      antialias: true, 
      alpha: true 
    });
    const { clientWidth, clientHeight } = mountRef.current;
    renderer.setSize(clientWidth, clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mountRef.current.appendChild(renderer.domElement);

    const loader = new THREE.TextureLoader();
    
    // Group to hold globe layers
    const globeGroup = new THREE.Group();
    scene.add(globeGroup);

    const radius = 1;
    const segments = isMobile ? 64 : 128; // Lower segments on mobile for performance

    // 1. Earth Map Layer
    const earthTexture = loader.load('https://threejs.org/examples/textures/planets/earth_lights_2048.png');
    const earthMaterial = new THREE.MeshBasicMaterial({
      map: earthTexture,
      transparent: true,
      opacity: 0.8,
      color: new THREE.Color(0x41EAD4),
      blending: THREE.AdditiveBlending,
    });
    const earthMesh = new THREE.Mesh(new THREE.SphereGeometry(radius, segments, segments), earthMaterial);
    globeGroup.add(earthMesh);

    // 2. Subtle Wireframe
    const wireframeMaterial = new THREE.MeshBasicMaterial({
      color: 0x41EAD4,
      wireframe: true,
      transparent: true,
      opacity: 0.05,
    });
    const wireframe = new THREE.Mesh(new THREE.SphereGeometry(radius * 1.001, 32, 32), wireframeMaterial);
    globeGroup.add(wireframe);

    // 3. Inner Core
    const coreMaterial = new THREE.MeshBasicMaterial({ color: 0x011627 });
    const coreMesh = new THREE.Mesh(new THREE.SphereGeometry(radius * 0.99, 32, 32), coreMaterial);
    globeGroup.add(coreMesh);

    // 4. Enhanced Atmosphere
    const haloMaterial = new THREE.ShaderMaterial({
      transparent: true,
      uniforms: {
        glowColor: { value: new THREE.Color(0x41EAD4) },
      },
      vertexShader: `
        varying float intensity;
        void main() {
          vec3 vNormal = normalize( normalMatrix * normal );
          intensity = pow( 0.6 - dot( vNormal, vec3( 0.0, 0.0, 1.0 ) ), 4.0 );
          gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
        }
      `,
      fragmentShader: `
        uniform vec3 glowColor;
        varying float intensity;
        void main() {
          vec3 glow = glowColor * intensity;
          gl_FragColor = vec4( glow, intensity * 0.4 );
        }
      `,
      side: THREE.BackSide,
      blending: THREE.AdditiveBlending
    });
    const halo = new THREE.Mesh(new THREE.SphereGeometry(radius * 1.15, segments, segments), haloMaterial);
    scene.add(halo);

    // Animation
    let frame = 0;
    const animate = () => {
      frame = requestAnimationFrame(animate);
      globeGroup.rotation.y += 0.002;
      globeGroup.rotation.x = Math.sin(Date.now() * 0.0001) * 0.1;
      earthMaterial.opacity = 0.6 + Math.sin(Date.now() * 0.001) * 0.2;
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      if (!mountRef.current) return;
      const { clientWidth, clientHeight } = mountRef.current;
      renderer.setSize(clientWidth, clientHeight);
      camera.aspect = clientWidth / clientHeight;
      camera.position.z = window.innerWidth < 768 ? 3.8 : 2.8;
      camera.updateProjectionMatrix();
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(frame);
      mountRef.current?.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, []);

  return (
    <div className={`relative ${className}`}>
      <div className="absolute inset-0 bg-brand-teal/5 blur-[100px] rounded-full scale-125 pointer-events-none"></div>
      <div ref={mountRef} className="w-full h-full" />
    </div>
  );
};

export default Globe;
