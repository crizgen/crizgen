"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useMedia } from "@/lib/useMedia";

type Input = { mx: number; my: number; scroll: number };

const COUNT = 4200;

function mulberry32(seed: number) {
  let a = seed;
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const vertex = /* glsl */ `
  uniform float uTime;
  uniform float uScroll;
  uniform vec2 uMouse;
  uniform float uSize;
  attribute float aRand;
  attribute vec3 aDir;
  varying float vRand;

  void main() {
    vec3 p = position;
    float n = sin(p.x * 2.0 + uTime * 0.6) + sin(p.y * 2.3 + uTime * 0.5) + sin(p.z * 1.7 + uTime * 0.7);
    p += normalize(p) * n * 0.05;
    p += aDir * uScroll * (1.2 + aRand * 2.6);

    vec4 mv = modelViewMatrix * vec4(p, 1.0);
    float d = distance(mv.xy, uMouse);
    float push = smoothstep(1.5, 0.0, d);
    mv.xy += normalize(mv.xy - uMouse + 0.0001) * push * 0.3;

    vRand = aRand;
    gl_PointSize = uSize * (0.55 + aRand * 0.9) * (1.0 - uScroll * 0.5) * (4.6 / -mv.z);
    gl_Position = projectionMatrix * mv;
  }
`;

const fragment = /* glsl */ `
  uniform float uScroll;
  varying float vRand;

  void main() {
    float d = length(gl_PointCoord - 0.5);
    if (d > 0.5) discard;
    float a = smoothstep(0.5, 0.0, d);
    vec3 ember = vec3(1.0, 0.30, 0.11);
    vec3 cream = vec3(0.95, 0.93, 0.89);
    vec3 col = mix(cream, ember, step(0.64, vRand));
    gl_FragColor = vec4(col * 0.9, a * (1.0 - uScroll) * 0.5);
  }
`;

function Particles({ input }: { input: React.RefObject<Input> }) {
  const mat = useRef<THREE.ShaderMaterial>(null);
  const pts = useRef<THREE.Points>(null);

  const { geometry, uniforms } = useMemo(() => {
    const pos = new Float32Array(COUNT * 3);
    const rand = new Float32Array(COUNT);
    const dir = new Float32Array(COUNT * 3);
    const rnd = mulberry32(7);
    const golden = Math.PI * (3 - Math.sqrt(5));
    for (let i = 0; i < COUNT; i++) {
      const y = 1 - (i / (COUNT - 1)) * 2;
      const r = Math.sqrt(1 - y * y);
      const t = golden * i;
      const shell = 1.55 + (rnd() - 0.5) * 0.18;
      const x = Math.cos(t) * r;
      const z = Math.sin(t) * r;
      pos.set([x * shell, y * shell, z * shell], i * 3);
      rand[i] = rnd();
      const v = new THREE.Vector3(x + (rnd() - 0.5) * 0.8, y + (rnd() - 0.5) * 0.8, z + (rnd() - 0.5) * 0.8).normalize();
      dir.set([v.x, v.y, v.z], i * 3);
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.BufferAttribute(pos, 3));
    g.setAttribute("aRand", new THREE.BufferAttribute(rand, 1));
    g.setAttribute("aDir", new THREE.BufferAttribute(dir, 3));
    return {
      geometry: g,
      uniforms: {
        uTime: { value: 0 },
        uScroll: { value: 0 },
        uMouse: { value: new THREE.Vector2(99, 99) },
        uSize: { value: 8.5 },
      },
    };
  }, []);

  useFrame((state, dt) => {
    const m = mat.current;
    const p = pts.current;
    if (!m || !p) return;
    const u = m.uniforms;
    u.uTime.value += dt;
    u.uScroll.value += (input.current.scroll - u.uScroll.value) * Math.min(1, dt * 4);
    u.uMouse.value.set(
      input.current.mx * state.viewport.width * 0.5,
      input.current.my * state.viewport.height * 0.5,
    );
    p.rotation.y += dt * 0.14;
    p.rotation.x += (input.current.my * 0.25 - p.rotation.x) * Math.min(1, dt * 2);
  });

  return (
    <points ref={pts} geometry={geometry}>
      <shaderMaterial
        ref={mat}
        vertexShader={vertex}
        fragmentShader={fragment}
        uniforms={uniforms}
        transparent
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

/** Particle sphere for the hero. Desktop only, off for reduced motion. */
export default function HeroOrb() {
  const desktop = useMedia("(min-width: 768px)");
  const still = useMedia("(prefers-reduced-motion: reduce)");
  const box = useRef<HTMLDivElement>(null);
  const input = useRef<Input>({ mx: 0, my: 0, scroll: 0 });
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (!desktop || still) return;
    const el = box.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setVisible(e.isIntersecting));
    io.observe(el);
    const move = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      input.current.mx = (e.clientX - (r.left + r.width / 2)) / (r.width / 2);
      input.current.my = -(e.clientY - (r.top + r.height / 2)) / (r.height / 2);
    };
    const scroll = () => {
      input.current.scroll = Math.min(1, window.scrollY / (window.innerHeight * 0.9));
    };
    window.addEventListener("pointermove", move, { passive: true });
    window.addEventListener("scroll", scroll, { passive: true });
    return () => {
      io.disconnect();
      window.removeEventListener("pointermove", move);
      window.removeEventListener("scroll", scroll);
    };
  }, [desktop, still]);

  if (!desktop || still) return null;

  return (
    <div
      ref={box}
      aria-hidden
      className="pointer-events-none absolute right-[-2%] top-[46%] z-0 aspect-square w-[min(46vw,66vh)] -translate-y-1/2"
    >
      <Canvas
        dpr={[1, 1.5]}
        frameloop={visible ? "always" : "never"}
        camera={{ position: [0, 0, 5], fov: 45 }}
        gl={{ antialias: false, alpha: true, powerPreference: "high-performance" }}
      >
        <Particles input={input} />
      </Canvas>
    </div>
  );
}
