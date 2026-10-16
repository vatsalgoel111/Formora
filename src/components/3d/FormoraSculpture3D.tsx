import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
import { RotateCcw } from 'lucide-react';

interface FormoraSculpture3DProps {
  className?: string;
  enableInteraction?: boolean;
}

export const FormoraSculpture3D: React.FC<FormoraSculpture3DProps> = ({
  className = '',
  enableInteraction = true,
}) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [webGLSupported, setWebGLSupported] = useState<boolean>(true);
  const [isInteracting, setIsInteracting] = useState<boolean>(false);
  const [hasCustomRotation, setHasCustomRotation] = useState<boolean>(false);

  // References for animation and interaction
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const sculptureGroupRef = useRef<THREE.Group | null>(null);
  const animFrameIdRef = useRef<number | null>(null);

  // Smooth rotation state tracking
  const rotationStateRef = useRef({
    currentX: 0.1,
    currentY: 0.35,
    targetX: 0.1,
    targetY: 0.35,
    hoverTiltX: 0,
    hoverTiltY: 0,
    isDragging: false,
    dragStartX: 0,
    dragStartY: 0,
    lastPointerX: 0,
    lastPointerY: 0,
    lastDragTime: 0,
  });

  const resetCamera = () => {
    rotationStateRef.current.targetX = 0.1;
    rotationStateRef.current.targetY = 0.35;
    setHasCustomRotation(false);
  };

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // WebGL capability check
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl2') || canvas.getContext('webgl');
      if (!gl) {
        setWebGLSupported(false);
        return;
      }
    } catch {
      setWebGLSupported(false);
      return;
    }

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // 1. SCENE CREATION
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const width = container.clientWidth || 500;
    const height = container.clientHeight || 500;

    // 2. CAMERA SETUP with generous FOV for cinematic presence
    const camera = new THREE.PerspectiveCamera(36, width / height, 0.1, 100);
    camera.position.set(0, 0.2, 5.8);
    camera.lookAt(0, 0, 0);
    cameraRef.current = camera;

    // 3. RENDERER SETUP with high fidelity PBR color management
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    rendererRef.current = renderer;

    container.appendChild(renderer.domElement);

    // 4. STUDIO ENVIRONMENT REFLECTION (RoomEnvironment via PMREMGenerator)
    // Ensures metallic chrome surfaces reflect realistic studio softboxes instead of dull flat gray
    const pmremGenerator = new THREE.PMREMGenerator(renderer);
    pmremGenerator.compileEquirectangularShader();
    const roomEnv = new RoomEnvironment();
    const envTexture = pmremGenerator.fromScene(roomEnv, 0.04).texture;
    scene.environment = envTexture;
    pmremGenerator.dispose();

    // 5. FORMORA BRAND MONOGRAM 3D GEOMETRY
    // Mathematically faithful to the aerodynamic speedform "F" in Formora brand identity
    const shape = new THREE.Shape();
    const cx = 62;
    const cy = 60;
    const s = 0.032;
    const to3D = (x: number, y: number): [number, number] => [(x - cx) * s, -(y - cy) * s];

    const [sx, sy] = to3D(26, 104);
    shape.moveTo(sx, sy);

    const [p1x, p1y] = to3D(26, 38);
    shape.lineTo(p1x, p1y);

    const [c1ax, c1ay] = to3D(26, 26);
    const [c1bx, c1by] = to3D(36, 20);
    const [c1x, c1y] = to3D(52, 19);
    shape.bezierCurveTo(c1ax, c1ay, c1bx, c1by, c1x, c1y);

    const [c2ax, c2ay] = to3D(70, 18);
    const [c2bx, c2by] = to3D(92, 18);
    const [c2x, c2y] = to3D(106, 20);
    shape.bezierCurveTo(c2ax, c2ay, c2bx, c2by, c2x, c2y);

    const [c3ax, c3ay] = to3D(101, 27);
    const [c3bx, c3by] = to3D(88, 33);
    const [c3x, c3y] = to3D(74, 35);
    shape.bezierCurveTo(c3ax, c3ay, c3bx, c3by, c3x, c3y);

    const [c4ax, c4ay] = to3D(54, 37);
    const [c4bx, c4by] = to3D(44, 41);
    const [c4x, c4y] = to3D(44, 48);
    shape.bezierCurveTo(c4ax, c4ay, c4bx, c4by, c4x, c4y);

    const [p2x, p2y] = to3D(86, 48);
    shape.lineTo(p2x, p2y);

    const [c5ax, c5ay] = to3D(80, 55);
    const [c5bx, c5by] = to3D(70, 63);
    const [c5x, c5y] = to3D(52, 64);
    shape.bezierCurveTo(c5ax, c5ay, c5bx, c5by, c5x, c5y);

    const [p3x, p3y] = to3D(44, 64);
    shape.lineTo(p3x, p3y);

    const [p4x, p4y] = to3D(44, 88);
    shape.lineTo(p4x, p4y);

    const [c6ax, c6ay] = to3D(44, 98);
    const [c6bx, c6by] = to3D(38, 102);
    const [c6x, c6y] = to3D(26, 104);
    shape.bezierCurveTo(c6ax, c6ay, c6bx, c6by, c6x, c6y);

    // Deep architectural extrusion with multi-stage beveled chamfers
    const extrudeSettings: THREE.ExtrudeGeometryOptions = {
      steps: 2,
      depth: 0.38,
      bevelEnabled: true,
      bevelThickness: 0.09,
      bevelSize: 0.07,
      bevelOffset: 0,
      bevelSegments: 8,
      curveSegments: 36,
    };

    const geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
    geometry.center();

    // 6. DUAL-FINISH PBR MATERIALS (Physical chrome with micro-contrast chamfers)
    // Front & rear polished face
    const faceMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xF7F6FB,
      metalness: 0.95,
      roughness: 0.14,
      clearcoat: 0.5,
      clearcoatRoughness: 0.08,
      envMapIntensity: 1.4,
    });

    // Precision beveled chamfers and sides
    const bevelMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xDDD9EA,
      metalness: 0.96,
      roughness: 0.22,
      clearcoat: 0.25,
      clearcoatRoughness: 0.12,
      envMapIntensity: 1.2,
    });

    const sculptureGroup = new THREE.Group();
    sculptureGroupRef.current = sculptureGroup;

    const sculptureMesh = new THREE.Mesh(geometry, [faceMaterial, bevelMaterial]);
    sculptureMesh.castShadow = true;
    sculptureMesh.receiveShadow = true;
    sculptureGroup.add(sculptureMesh);

    // Initial scale and positioning
    sculptureGroup.scale.set(0.96, 0.96, 0.96);
    scene.add(sculptureGroup);

    // 7. GROUND CONTACT SHADOW PLANE
    // Ultra-soft physical contact shadow grounded underneath the sculpture
    const shadowCanvas = document.createElement('canvas');
    shadowCanvas.width = 512;
    shadowCanvas.height = 512;
    const sCtx = shadowCanvas.getContext('2d');
    if (sCtx) {
      const grad = sCtx.createRadialGradient(256, 256, 10, 256, 256, 240);
      grad.addColorStop(0, 'rgba(0, 0, 0, 0.88)');
      grad.addColorStop(0.3, 'rgba(0, 0, 0, 0.5)');
      grad.addColorStop(0.65, 'rgba(182, 92, 255, 0.05)');
      grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
      sCtx.fillStyle = grad;
      sCtx.fillRect(0, 0, 512, 512);
    }
    const shadowTex = new THREE.CanvasTexture(shadowCanvas);
    const shadowGeo = new THREE.PlaneGeometry(4.8, 4.8);
    const shadowMat = new THREE.MeshBasicMaterial({
      map: shadowTex,
      transparent: true,
      depthWrite: false,
      opacity: 0.75,
    });
    const shadowMesh = new THREE.Mesh(shadowGeo, shadowMat);
    shadowMesh.rotation.x = -Math.PI / 2;
    shadowMesh.position.y = -1.68;
    scene.add(shadowMesh);

    // 8. STUDIO LIGHTING RIG
    // Key Light: High-angle crisp studio key
    const keyLight = new THREE.DirectionalLight(0xFFFFFF, 2.6);
    keyLight.position.set(4.2, 5.0, 4.2);
    keyLight.castShadow = true;
    keyLight.shadow.mapSize.width = 1024;
    keyLight.shadow.mapSize.height = 1024;
    keyLight.shadow.bias = -0.0003;
    scene.add(keyLight);

    // Focused Electric Violet Rim Light: Grazes the beveled speedform chamfer
    const violetRimLight = new THREE.DirectionalLight(0xB65CFF, 4.0);
    violetRimLight.position.set(-4.5, -0.6, -3.2);
    scene.add(violetRimLight);

    // Soft Lavender Top/Back Fill: Accents the top aerodynamic curve
    const topFillLight = new THREE.DirectionalLight(0xD0A0FF, 1.2);
    topFillLight.position.set(0, 4.8, -2.0);
    scene.add(topFillLight);

    // Subtle Ambient Ground Bounce: Prevents harsh blacks
    const hemiLight = new THREE.HemisphereLight(0x282036, 0x08080B, 0.9);
    scene.add(hemiLight);

    // 9. HIGH-PERFORMANCE INTERACTION LOGIC
    // Mouse hover creates gentle parallax tilt without fighting or snapping auto-rotation
    // Drag allows 360 degree smooth inspection with inertia and pitch limits
    const state = rotationStateRef.current;

    const handlePointerDown = (e: MouseEvent | TouchEvent) => {
      if (!enableInteraction) return;
      state.isDragging = true;
      setIsInteracting(true);
      setHasCustomRotation(true);

      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
      const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;

      state.dragStartX = clientX;
      state.dragStartY = clientY;
      state.lastPointerX = clientX;
      state.lastPointerY = clientY;
      state.lastDragTime = performance.now();
    };

    const handlePointerMove = (e: MouseEvent | TouchEvent) => {
      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
      const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;

      if (state.isDragging) {
        const deltaX = clientX - state.lastPointerX;
        const deltaY = clientY - state.lastPointerY;

        // Smooth drag rotation
        state.targetY += deltaX * 0.008;
        state.targetX = Math.max(-0.55, Math.min(0.55, state.targetX + deltaY * 0.008));

        state.lastPointerX = clientX;
        state.lastPointerY = clientY;
        state.lastDragTime = performance.now();
      } else if (enableInteraction && container && !prefersReducedMotion) {
        // Subtle hover parallax: bounded gently so it never jerks or over-rotates
        const rect = container.getBoundingClientRect();
        if (
          clientX >= rect.left &&
          clientX <= rect.right &&
          clientY >= rect.top &&
          clientY <= rect.bottom
        ) {
          const nx = ((clientX - rect.left) / rect.width) * 2 - 1;
          const ny = -(((clientY - rect.top) / rect.height) * 2 - 1);
          state.hoverTiltX = ny * 0.14;
          state.hoverTiltY = nx * 0.18;
        } else {
          state.hoverTiltX = 0;
          state.hoverTiltY = 0;
        }
      }
    };

    const handlePointerUp = () => {
      state.isDragging = false;
      setIsInteracting(false);
      state.lastDragTime = performance.now();
    };

    const domEl = renderer.domElement;
    domEl.addEventListener('mousedown', handlePointerDown);
    window.addEventListener('mousemove', handlePointerMove);
    window.addEventListener('mouseup', handlePointerUp);

    domEl.addEventListener('touchstart', handlePointerDown, { passive: true });
    window.addEventListener('touchmove', handlePointerMove, { passive: true });
    window.addEventListener('touchend', handlePointerUp);

    // 10. RESIZE OBSERVER for robust, glitch-free viewport adaptation
    const resizeObserver = new ResizeObserver((entries) => {
      if (!entries || entries.length === 0) return;
      const entry = entries[0];
      const w = entry.contentRect.width || container.clientWidth;
      const h = entry.contentRect.height || container.clientHeight;
      if (w > 0 && h > 0) {
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        renderer.setSize(w, h);
      }
    });
    resizeObserver.observe(container);

    // 11. SILKY 60 FPS RENDER LOOP
    const clock = new THREE.Clock();

    const animate = () => {
      animFrameIdRef.current = requestAnimationFrame(animate);
      const delta = Math.min(clock.getDelta(), 0.1);
      const elapsedTime = clock.getElapsedTime();

      if (sculptureGroup) {
        // Auto-rotation: smoothly increments targetY if user is not actively dragging
        // If user recently dragged, wait 2.2 seconds before slowly resuming idle orbit
        const timeSinceDrag = performance.now() - state.lastDragTime;
        if (!state.isDragging && !prefersReducedMotion) {
          if (timeSinceDrag > 2200) {
            state.targetY += delta * 0.32;
          }
        }

        // Smooth physical damping toward target rotation + subtle hover tilt
        state.currentY = THREE.MathUtils.damp(
          state.currentY,
          state.targetY + state.hoverTiltY,
          5.5,
          delta
        );
        state.currentX = THREE.MathUtils.damp(
          state.currentX,
          state.targetX + state.hoverTiltX,
          5.5,
          delta
        );

        sculptureGroup.rotation.y = state.currentY;
        sculptureGroup.rotation.x = state.currentX;

        // Subtle architectural breathing levitation
        if (!prefersReducedMotion) {
          const bob = Math.sin(elapsedTime * 0.95) * 0.055;
          sculptureGroup.position.y = bob;
          shadowMat.opacity = 0.75 - bob * 0.8;
        }
      }

      renderer.render(scene, camera);
    };

    animate();

    // 12. CLEANUP ON UNMOUNT
    return () => {
      if (animFrameIdRef.current) {
        cancelAnimationFrame(animFrameIdRef.current);
      }
      resizeObserver.disconnect();

      domEl.removeEventListener('mousedown', handlePointerDown);
      window.removeEventListener('mousemove', handlePointerMove);
      window.removeEventListener('mouseup', handlePointerUp);

      domEl.removeEventListener('touchstart', handlePointerDown);
      window.removeEventListener('touchmove', handlePointerMove);
      window.removeEventListener('touchend', handlePointerUp);

      geometry.dispose();
      faceMaterial.dispose();
      bevelMaterial.dispose();
      shadowGeo.dispose();
      shadowTex.dispose();
      shadowMat.dispose();
      envTexture.dispose();
      renderer.dispose();

      if (container.contains(domEl)) {
        container.removeChild(domEl);
      }
    };
  }, [enableInteraction]);

  return (
    <div
      className={`relative w-full h-full flex items-center justify-center select-none overflow-hidden ${className}`}
    >
      {/* 3D Canvas Mount Point */}
      <div
        ref={mountRef}
        className={`w-full h-full absolute inset-0 z-0 ${
          isInteracting ? 'cursor-grabbing' : 'cursor-grab'
        }`}
        aria-label="Interactive 3D Formora Brand Sculpture"
      />

      {/* Atmospheric Studio Glow */}
      <div
        className="absolute w-[360px] h-[360px] rounded-full pointer-events-none opacity-25 blur-3xl z-0"
        style={{
          background:
            'radial-gradient(circle, rgba(182, 92, 255, 0.35) 0%, rgba(8, 8, 11, 0) 70%)',
        }}
      />

      {/* Fallback View if WebGL is unavailable */}
      {!webGLSupported && (
        <div className="absolute inset-0 flex flex-col items-center justify-center p-8 bg-[#09090D] z-10 text-center">
          <div className="w-28 h-28 mb-6 rounded-2xl bg-[#12121A] border border-[#F5F3F8]/10 flex items-center justify-center shadow-2xl">
            <svg width="68" height="68" viewBox="0 0 120 120" fill="none">
              <path
                d="M 26 104 L 26 38 C 26 26, 36 20, 52 19 C 70 18, 92 18, 106 20 C 101 27, 88 33, 74 35 C 54 37, 44 41, 44 48 L 86 48 C 80 55, 70 63, 52 64 L 44 64 L 44 88 C 44 98, 38 102, 26 104 Z"
                fill="#FFFFFF"
              />
            </svg>
          </div>
          <span className="text-sm font-medium text-[#F5F3F8] tracking-wide">
            FORMORA Monogram Sculpture
          </span>
          <span className="text-xs text-[#A5A2B2] mt-1 font-mono tracking-wider">
            Dark Futurism & Architectural Precision
          </span>
        </div>
      )}

      {/* Subtle, Editorial Interaction Cue & Reset Option */}
      {webGLSupported && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex items-center gap-3 pointer-events-none">
          <div className="px-3 py-1 rounded-full bg-[#101016]/80 border border-[#F5F3F8]/10 backdrop-blur-md flex items-center gap-2 text-[10px] font-mono tracking-widest text-[#A5A2B2]/80 uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B65CFF] animate-pulse" />
            <span>DRAG TO INSPECT</span>
          </div>

          {hasCustomRotation && (
            <button
              type="button"
              onClick={resetCamera}
              className="pointer-events-auto px-2.5 py-1 rounded-full bg-[#101016]/90 border border-[#F5F3F8]/15 hover:border-[#B65CFF]/50 text-[10px] font-mono text-[#A5A2B2] hover:text-[#F5F3F8] backdrop-blur-md flex items-center gap-1.5 transition-colors cursor-pointer"
              title="Reset view angle"
            >
              <RotateCcw className="w-2.5 h-2.5" />
              <span>RESET</span>
            </button>
          )}
        </div>
      )}
    </div>
  );
};
