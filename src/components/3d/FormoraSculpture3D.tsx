import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Eye, EyeOff, RotateCcw, Sparkles } from 'lucide-react';

interface FormoraSculpture3DProps {
  className?: string;
  enableInteraction?: boolean;
}

type MaterialPreset = 'satin-chrome' | 'obsidian-ceramic' | 'electric-violet';

export const FormoraSculpture3D: React.FC<FormoraSculpture3DProps> = ({
  className = '',
  enableInteraction = true,
}) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [webGLSupported, setWebGLSupported] = useState<boolean>(true);
  const [activeMaterial, setActiveMaterial] = useState<MaterialPreset>('satin-chrome');
  const [isRotating, setIsRotating] = useState<boolean>(true);
  const [showControls, setShowControls] = useState<boolean>(true);

  // References for render loop manipulation
  const sculptureGroupRef = useRef<THREE.Group | null>(null);
  const materialsRef = useRef<Record<MaterialPreset, THREE.Material> | null>(null);
  const animationFrameIdRef = useRef<number | null>(null);
  const targetRotationRef = useRef<{ x: number; y: number }>({ x: 0.1, y: 0.3 });
  const isDraggingRef = useRef<boolean>(false);
  const previousPointerPosRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Detect WebGL capability
    const testCanvas = document.createElement('canvas');
    const gl = testCanvas.getContext('webgl2') || testCanvas.getContext('webgl');
    if (!gl) {
      setWebGLSupported(false);
      return;
    }

    // SCENE SETUP
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x08080B, 0.08);

    const width = container.clientWidth || 600;
    const height = container.clientHeight || 550;

    const camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 100);
    camera.position.set(0, 0.8, 5.2);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    container.appendChild(renderer.domElement);

    // MATERIALS DEFINITION
    const chromeMat = new THREE.MeshStandardMaterial({
      color: 0xEAE8F2,
      metalness: 0.92,
      roughness: 0.18,
      envMapIntensity: 1.2,
    });

    const obsidianMat = new THREE.MeshStandardMaterial({
      color: 0x14141B,
      metalness: 0.6,
      roughness: 0.28,
      envMapIntensity: 0.8,
    });

    const violetMat = new THREE.MeshStandardMaterial({
      color: 0x3A1B5C,
      emissive: 0xB65CFF,
      emissiveIntensity: 0.35,
      metalness: 0.8,
      roughness: 0.2,
      envMapIntensity: 1.4,
    });

    materialsRef.current = {
      'satin-chrome': chromeMat,
      'obsidian-ceramic': obsidianMat,
      'electric-violet': violetMat,
    };

    // GENERATE 3D SCULPTURAL FORMORA "F" GEOMETRY
    const sculptureGroup = new THREE.Group();
    sculptureGroupRef.current = sculptureGroup;

    // Procedural "F" profile using Shape & ExtrudeGeometry
    const shape = new THREE.Shape();
    // Spine and aerodynamic wings inspired by Formora brand mark
    shape.moveTo(-0.9, -1.3);
    shape.lineTo(-0.9, 0.8);
    shape.bezierCurveTo(-0.9, 1.25, -0.6, 1.4, 0.1, 1.4);
    shape.bezierCurveTo(0.6, 1.4, 1.1, 1.35, 1.5, 1.4);
    shape.bezierCurveTo(1.3, 1.15, 0.95, 0.95, 0.5, 0.9);
    shape.bezierCurveTo(-0.1, 0.82, -0.35, 0.68, -0.35, 0.4);
    shape.lineTo(0.9, 0.4);
    shape.bezierCurveTo(0.75, 0.15, 0.45, -0.05, -0.05, -0.08);
    shape.lineTo(-0.35, -0.08);
    shape.lineTo(-0.35, -0.85);
    shape.bezierCurveTo(-0.35, -1.15, -0.55, -1.25, -0.9, -1.3);

    const extrudeSettings: THREE.ExtrudeGeometryOptions = {
      steps: 2,
      depth: 0.38,
      bevelEnabled: true,
      bevelThickness: 0.08,
      bevelSize: 0.06,
      bevelOffset: 0,
      bevelSegments: 5,
    };

    const geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
    geometry.center();

    const mainMesh = new THREE.Mesh(geometry, chromeMat);
    mainMesh.castShadow = true;
    mainMesh.receiveShadow = true;
    sculptureGroup.add(mainMesh);

    // Architectural floating accent ring (precision engineering aura)
    const ringGeo = new THREE.TorusGeometry(1.65, 0.022, 16, 80);
    const ringMat = new THREE.MeshStandardMaterial({
      color: 0xB65CFF,
      metalness: 0.95,
      roughness: 0.15,
      emissive: 0x8B5CF6,
      emissiveIntensity: 0.4,
    });
    const accentRing = new THREE.Mesh(ringGeo, ringMat);
    accentRing.rotation.x = Math.PI / 2.3;
    accentRing.position.y = -0.15;
    sculptureGroup.add(accentRing);

    // Secondary subtle geometric gimbal axis
    const innerRingGeo = new THREE.TorusGeometry(1.4, 0.012, 16, 60);
    const innerRingMat = new THREE.MeshStandardMaterial({
      color: 0xF5F3F8,
      metalness: 0.9,
      roughness: 0.2,
    });
    const innerRing = new THREE.Mesh(innerRingGeo, innerRingMat);
    innerRing.rotation.y = Math.PI / 3;
    sculptureGroup.add(innerRing);

    scene.add(sculptureGroup);

    // CONTACT SHADOW PLANE BENEATH OBJECT
    const shadowCanvas = document.createElement('canvas');
    shadowCanvas.width = 256;
    shadowCanvas.height = 256;
    const sCtx = shadowCanvas.getContext('2d');
    if (sCtx) {
      const grad = sCtx.createRadialGradient(128, 128, 0, 128, 128, 120);
      grad.addColorStop(0, 'rgba(0, 0, 0, 0.85)');
      grad.addColorStop(0.35, 'rgba(0, 0, 0, 0.45)');
      grad.addColorStop(0.7, 'rgba(182, 92, 255, 0.08)');
      grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
      sCtx.fillStyle = grad;
      sCtx.fillRect(0, 0, 256, 256);
    }
    const shadowTex = new THREE.CanvasTexture(shadowCanvas);
    const shadowGeo = new THREE.PlaneGeometry(4.2, 4.2);
    const shadowMat = new THREE.MeshBasicMaterial({
      map: shadowTex,
      transparent: true,
      depthWrite: false,
    });
    const shadowMesh = new THREE.Mesh(shadowGeo, shadowMat);
    shadowMesh.rotation.x = -Math.PI / 2;
    shadowMesh.position.y = -1.55;
    scene.add(shadowMesh);

    // LIGHTING RIG
    // 1. Warm studio key light
    const keyLight = new THREE.DirectionalLight(0xFFFFFF, 2.2);
    keyLight.position.set(4, 5, 4);
    keyLight.castShadow = true;
    keyLight.shadow.mapSize.width = 1024;
    keyLight.shadow.mapSize.height = 1024;
    keyLight.shadow.bias = -0.0005;
    scene.add(keyLight);

    // 2. Signature Electric Violet Rim Light
    const violetRimLight = new THREE.DirectionalLight(0xB65CFF, 4.5);
    violetRimLight.position.set(-4, -1, -3);
    scene.add(violetRimLight);

    // 3. Cool fill light from above
    const topFill = new THREE.DirectionalLight(0xD0A0FF, 1.4);
    topFill.position.set(0, 4, -2);
    scene.add(topFill);

    // 4. Subtle ambient bounce
    const hemiLight = new THREE.HemisphereLight(0x2A2038, 0x08080B, 0.9);
    scene.add(hemiLight);

    // POINTER & DRAG INTERACTION
    const handlePointerDown = (e: MouseEvent | TouchEvent) => {
      isDraggingRef.current = true;
      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
      const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
      previousPointerPosRef.current = { x: clientX, y: clientY };
    };

    const handlePointerMove = (e: MouseEvent | TouchEvent) => {
      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
      const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;

      if (isDraggingRef.current) {
        const deltaX = clientX - previousPointerPosRef.current.x;
        const deltaY = clientY - previousPointerPosRef.current.y;

        targetRotationRef.current.y += deltaX * 0.007;
        targetRotationRef.current.x = Math.max(-0.6, Math.min(0.6, targetRotationRef.current.x + deltaY * 0.007));

        previousPointerPosRef.current = { x: clientX, y: clientY };
      } else if (enableInteraction && container) {
        // Subtle hover parallax
        const rect = container.getBoundingClientRect();
        const nx = ((clientX - rect.left) / rect.width) * 2 - 1;
        const ny = -(((clientY - rect.top) / rect.height) * 2 - 1);
        targetRotationRef.current.x = ny * 0.25;
        targetRotationRef.current.y = nx * 0.45;
      }
    };

    const handlePointerUp = () => {
      isDraggingRef.current = false;
    };

    const domEl = renderer.domElement;
    domEl.addEventListener('mousedown', handlePointerDown);
    window.addEventListener('mousemove', handlePointerMove);
    window.addEventListener('mouseup', handlePointerUp);

    domEl.addEventListener('touchstart', handlePointerDown, { passive: true });
    window.addEventListener('touchmove', handlePointerMove, { passive: true });
    window.addEventListener('touchend', handlePointerUp);

    // RESIZE LISTENER
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    // RENDER LOOP WITH SPRING DAMPING
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameIdRef.current = requestAnimationFrame(animate);
      const delta = clock.getDelta();

      if (sculptureGroup) {
        if (isRotating && !isDraggingRef.current) {
          targetRotationRef.current.y += delta * 0.35;
        }

        // Smooth damping
        sculptureGroup.rotation.y = THREE.MathUtils.damp(sculptureGroup.rotation.y, targetRotationRef.current.y, 4, delta);
        sculptureGroup.rotation.x = THREE.MathUtils.damp(sculptureGroup.rotation.x, targetRotationRef.current.x, 4, delta);

        // Counter-rotation for accent ring
        accentRing.rotation.z += delta * 0.2;
        innerRing.rotation.x += delta * 0.15;

        // Subtle gentle levitation bobbing
        sculptureGroup.position.y = Math.sin(clock.getElapsedTime() * 1.2) * 0.08;
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      if (animationFrameIdRef.current) {
        cancelAnimationFrame(animationFrameIdRef.current);
      }
      domEl.removeEventListener('mousedown', handlePointerDown);
      window.removeEventListener('mousemove', handlePointerMove);
      window.removeEventListener('mouseup', handlePointerUp);
      domEl.removeEventListener('touchstart', handlePointerDown);
      window.removeEventListener('touchmove', handlePointerMove);
      window.removeEventListener('touchend', handlePointerUp);
      window.removeEventListener('resize', handleResize);

      geometry.dispose();
      ringGeo.dispose();
      innerRingGeo.dispose();
      shadowGeo.dispose();
      shadowTex.dispose();
      chromeMat.dispose();
      obsidianMat.dispose();
      violetMat.dispose();
      ringMat.dispose();
      innerRingMat.dispose();
      shadowMat.dispose();

      renderer.dispose();
      if (container.contains(domEl)) {
        container.removeChild(domEl);
      }
    };
  }, [enableInteraction, isRotating]);

  // MATERIAL SWITCHER
  const handleMaterialChange = (preset: MaterialPreset) => {
    setActiveMaterial(preset);
    if (!sculptureGroupRef.current || !materialsRef.current) return;
    const mesh = sculptureGroupRef.current.children[0] as THREE.Mesh;
    if (mesh && materialsRef.current[preset]) {
      mesh.material = materialsRef.current[preset];
    }
  };

  const resetCamera = () => {
    targetRotationRef.current = { x: 0.1, y: 0.3 };
  };

  return (
    <div className={`relative w-full h-full min-h-[460px] md:min-h-[560px] flex items-center justify-center select-none overflow-hidden ${className}`}>
      {/* 3D Canvas Mount Point */}
      <div 
        ref={mountRef} 
        className="w-full h-full absolute inset-0 cursor-grab active:cursor-grabbing z-0"
        aria-label="Interactive 3D Formora Brand Sculpture"
      />

      {/* Atmospheric Backlight Bloom */}
      <div 
        className="absolute w-[340px] h-[340px] rounded-full pointer-events-none opacity-30 blur-3xl z-0"
        style={{
          background: 'radial-gradient(circle, rgba(182, 92, 255, 0.45) 0%, rgba(8, 8, 11, 0) 70%)',
        }}
      />

      {/* Fallback Container if WebGL is unavailable */}
      {!webGLSupported && (
        <div className="absolute inset-0 flex flex-col items-center justify-center p-8 bg-[#101016]/90 z-10 text-center">
          <div className="w-24 h-24 mb-6 rounded-2xl bg-[#171720] border border-[#F5F3F8]/10 flex items-center justify-center shadow-2xl">
            <svg width="60" height="60" viewBox="0 0 120 120" fill="none">
              <path
                d="M 28 102 L 28 36 C 28 26, 36 22, 50 22 C 68 22, 88 20, 104 22 C 98 28, 86 34, 72 36 C 52 38, 44 41, 44 50 L 84 50 C 78 57, 68 64, 52 65 L 44 65 L 44 88 C 44 96, 38 100, 28 102 Z"
                fill="#FFFFFF"
              />
            </svg>
          </div>
          <span className="text-sm font-medium text-[#F5F3F8]">FORMORA Monogram Sculpture</span>
          <span className="text-xs text-[#A5A2B2] mt-1">Dark Futurism & Architectural Precision</span>
        </div>
      )}

      {/* Ergonomic Collapsible Bottom Control Dock (Compliant with 3D UI guidelines) */}
      {webGLSupported && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center pointer-events-auto">
          {showControls ? (
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#101016]/90 border border-[#F5F3F8]/10 shadow-xl backdrop-blur-md">
              {/* Material swatches */}
              <div className="flex items-center gap-1.5 pr-2 border-r border-[#F5F3F8]/10">
                <button
                  type="button"
                  onClick={() => handleMaterialChange('satin-chrome')}
                  title="Satin Chrome Finish"
                  className={`w-5 h-5 rounded-full border transition-all ${
                    activeMaterial === 'satin-chrome'
                      ? 'border-[#B65CFF] ring-2 ring-[#B65CFF]/30 scale-110'
                      : 'border-white/20 opacity-70 hover:opacity-100'
                  }`}
                  style={{ background: 'linear-gradient(135deg, #FFFFFF 0%, #A5A2B2 100%)' }}
                />
                <button
                  type="button"
                  onClick={() => handleMaterialChange('obsidian-ceramic')}
                  title="Obsidian Ceramic Finish"
                  className={`w-5 h-5 rounded-full border transition-all ${
                    activeMaterial === 'obsidian-ceramic'
                      ? 'border-[#B65CFF] ring-2 ring-[#B65CFF]/30 scale-110'
                      : 'border-white/20 opacity-70 hover:opacity-100'
                  }`}
                  style={{ background: 'linear-gradient(135deg, #242432 0%, #0A0A0E 100%)' }}
                />
                <button
                  type="button"
                  onClick={() => handleMaterialChange('electric-violet')}
                  title="Electric Violet Glow"
                  className={`w-5 h-5 rounded-full border transition-all ${
                    activeMaterial === 'electric-violet'
                      ? 'border-[#B65CFF] ring-2 ring-[#B65CFF]/40 scale-110'
                      : 'border-white/20 opacity-70 hover:opacity-100'
                  }`}
                  style={{ background: 'linear-gradient(135deg, #D0A0FF 0%, #7C3AED 100%)' }}
                />
              </div>

              {/* Rotation toggle */}
              <button
                type="button"
                onClick={() => setIsRotating(!isRotating)}
                className={`px-2 py-1 text-[11px] font-mono rounded transition-colors ${
                  isRotating ? 'text-[#B65CFF] bg-[#B65CFF]/10' : 'text-[#A5A2B2] hover:text-[#F5F3F8]'
                }`}
                title="Toggle Auto Rotation"
              >
                {isRotating ? 'Auto-Orbit' : 'Paused'}
              </button>

              {/* Reset view */}
              <button
                type="button"
                onClick={resetCamera}
                className="p-1 text-[#A5A2B2] hover:text-[#F5F3F8] transition-colors"
                title="Reset Camera Angle"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>

              {/* Collapse Dock */}
              <button
                type="button"
                onClick={() => setShowControls(false)}
                className="p-1 text-[#A5A2B2] hover:text-[#F5F3F8] transition-colors ml-1"
                title="Hide Sculpture Controls"
              >
                <EyeOff className="w-3.5 h-3.5" />
              </button>
            </div>
          ) : (
            <button
              type="button"
              onClick={() => setShowControls(true)}
              className="px-2.5 py-1 text-[10px] font-mono tracking-wider text-[#A5A2B2] hover:text-[#B65CFF] bg-[#101016]/80 border border-[#F5F3F8]/10 rounded-full backdrop-blur-md flex items-center gap-1.5 transition-colors"
            >
              <Eye className="w-3 h-3" />
              <span>3D DOCK</span>
            </button>
          )}

          {/* Interactive cue */}
          <span className="text-[10px] text-[#A5A2B2]/60 mt-1 font-mono tracking-wider uppercase pointer-events-none">
            DRAG TO INSPECT · SCROLL FRIENDLY
          </span>
        </div>
      )}
    </div>
  );
};
