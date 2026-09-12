"use client";

import { useEffect, useRef } from "react";

const PARTICLE_COLORS = ["#F472B6", "#C084FC", "#818CF8", "#F9A8D4"];
const MAX_LINK_DISTANCE = 140;
const MOUSE_LINK_DISTANCE = 180;

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
}

export default function ParticleNetworkBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvasEl = canvasRef.current;
    if (!canvasEl) return;
    const ctx = canvasEl.getContext("2d");
    if (!ctx) return;

    const canvas: HTMLCanvasElement = canvasEl;
    const context: CanvasRenderingContext2D = ctx;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let width = 0;
    let height = 0;
    let particles: Particle[] = [];
    let animationFrameId = 0;
    const mouse = { x: -9999, y: -9999, active: false };

    function createParticles() {
      const area = width * height;
      const count = Math.min(90, Math.max(28, Math.round(area / 16000)));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        radius: Math.random() * 1.6 + 1,
        color: PARTICLE_COLORS[Math.floor(Math.random() * PARTICLE_COLORS.length)],
      }));
    }

    function resize() {
      const parent = canvas.parentElement;
      width = parent ? parent.clientWidth : window.innerWidth;
      height = parent ? parent.clientHeight : window.innerHeight;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
      createParticles();
    }

    function drawFrame() {
      context.clearRect(0, 0, width, height);

      for (const particle of particles) {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x <= 0 || particle.x >= width) particle.vx *= -1;
        if (particle.y <= 0 || particle.y >= height) particle.vy *= -1;
        particle.x = Math.max(0, Math.min(width, particle.x));
        particle.y = Math.max(0, Math.min(height, particle.y));
      }

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i];
          const b = particles[j];
          const dist = Math.hypot(a.x - b.x, a.y - b.y);
          if (dist < MAX_LINK_DISTANCE) {
            context.strokeStyle = `rgba(196, 181, 253, ${1 - dist / MAX_LINK_DISTANCE})`;
            context.lineWidth = 1;
            context.beginPath();
            context.moveTo(a.x, a.y);
            context.lineTo(b.x, b.y);
            context.stroke();
          }
        }

        if (mouse.active) {
          const dist = Math.hypot(particles[i].x - mouse.x, particles[i].y - mouse.y);
          if (dist < MOUSE_LINK_DISTANCE) {
            context.strokeStyle = `rgba(244, 114, 182, ${1 - dist / MOUSE_LINK_DISTANCE})`;
            context.lineWidth = 1;
            context.beginPath();
            context.moveTo(particles[i].x, particles[i].y);
            context.lineTo(mouse.x, mouse.y);
            context.stroke();
          }
        }
      }

      for (const particle of particles) {
        context.beginPath();
        context.fillStyle = particle.color;
        context.shadowBlur = 8;
        context.shadowColor = particle.color;
        context.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        context.fill();
      }
      context.shadowBlur = 0;

      if (mouse.active) {
        context.beginPath();
        context.fillStyle = "#F472B6";
        context.arc(mouse.x, mouse.y, 2.5, 0, Math.PI * 2);
        context.fill();
      }
    }

    function step() {
      drawFrame();
      animationFrameId = requestAnimationFrame(step);
    }

    function handlePointerMove(event: PointerEvent) {
      const rect = canvas.getBoundingClientRect();
      mouse.x = event.clientX - rect.left;
      mouse.y = event.clientY - rect.top;
      mouse.active = true;
    }

    function handlePointerLeave() {
      mouse.active = false;
    }

    resize();
    window.addEventListener("resize", resize);
    canvas.addEventListener("pointermove", handlePointerMove);
    canvas.addEventListener("pointerleave", handlePointerLeave);

    // A plain "resize" listener only fires on viewport size changes. On
    // mobile the hero's height is content-driven (fonts/images finishing
    // load can shift it), so also watch the parent element directly.
    const resizeObserver = new ResizeObserver(() => resize());
    if (canvas.parentElement) resizeObserver.observe(canvas.parentElement);

    if (prefersReducedMotion) {
      drawFrame();
    } else {
      step();
    }

    return () => {
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("pointermove", handlePointerMove);
      canvas.removeEventListener("pointerleave", handlePointerLeave);
      resizeObserver.disconnect();
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        display: "block",
      }}
    />
  );
}
