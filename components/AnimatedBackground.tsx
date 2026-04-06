"use client";
import React, { useEffect, useRef } from 'react';

type AnimatedBackgroundProps = {
  style?: React.CSSProperties;
};

export default function AnimatedBackground({ style }: AnimatedBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    const particleCount = window.innerWidth < 768 ? 40 : 110;

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      hue: number;

      constructor() {
        this.x = Math.random() * canvas!.width;
        this.y = Math.random() * canvas!.height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.41) * 0.5;
        this.size = Math.random() * 1.8 + 0.8;
        this.hue = 210 + Math.random() * 30;  // monochrome blue range
      }

      update(elapsed: number) {
        this.x += this.vx + Math.sin(elapsed * 0.0004 + this.y * 0.002) * 0.3;
        this.y += this.vy + Math.cos(elapsed * 0.0003 + this.x * 0.002) * 0.3;

        if (this.x < -30) this.x = canvas!.width + 30;
        if (this.x > canvas!.width + 30) this.x = -30;
        if (this.y < -30) this.y = canvas!.height + 30;
        if (this.y > canvas!.height + 30) this.y = -30;
      }

      draw(elapsed: number) {
        if (!ctx) return;
        const alpha = 0.25 + 0.15 * Math.sin(elapsed * 0.002 + this.x * 0.01 + this.y * 0.01);
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${this.hue}, 90%, 70%, ${alpha})`;
        ctx.shadowColor = `hsla(${this.hue}, 90%, 72%, ${alpha * 0.75})`;
        ctx.shadowBlur = 6;
        ctx.fill();
        ctx.shadowBlur = 0;
      }
    }

    const init = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      particles = Array.from({ length: particleCount }, () => new Particle());
    };

    const render = (time: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, '#05132f');
      gradient.addColorStop(0.4, '#0c2b52');
      gradient.addColorStop(0.8, '#0a3f70');
      gradient.addColorStop(1, '#03172f');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.update(time);
        p.draw(time);
      });

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 140) {
            const intensity = 1 - dist / 140;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(173, 216, 230, ${0.08 + 0.16 * intensity})`;
            ctx.lineWidth = 1;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    window.addEventListener('resize', init);
    init();
    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', init);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 -z-20 pointer-events-none" style={style} />;
}