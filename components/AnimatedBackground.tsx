"use client";
import React, { useEffect, useRef } from 'react';

type AnimatedBackgroundProps = {
  style?: React.CSSProperties;
};

class Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  hue: number;

  constructor(
    private canvas: HTMLCanvasElement,
    private ctx: CanvasRenderingContext2D,
  ) {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.vx = (Math.random() - 0.5) * 0.5;
    this.vy = (Math.random() - 0.41) * 0.5;
    this.size = Math.random() * 1.8 + 0.8;
    this.hue = 175 + Math.random() * 25;
  }

  update(elapsed: number) {
    this.x += this.vx + Math.sin(elapsed * 0.0004 + this.y * 0.002) * 0.3;
    this.y += this.vy + Math.cos(elapsed * 0.0003 + this.x * 0.002) * 0.3;

    if (this.x < -30) this.x = this.canvas.width + 30;
    if (this.x > this.canvas.width + 30) this.x = -30;
    if (this.y < -30) this.y = this.canvas.height + 30;
    if (this.y > this.canvas.height + 30) this.y = -30;
  }

  draw(elapsed: number) {
    const alpha =
      0.25 +
      0.15 * Math.sin(elapsed * 0.002 + this.x * 0.01 + this.y * 0.01);
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    this.ctx.fillStyle = `hsla(${this.hue}, 90%, 70%, ${alpha})`;
    this.ctx.shadowColor = `hsla(${this.hue}, 90%, 72%, ${alpha * 0.75})`;
    this.ctx.shadowBlur = 6;
    this.ctx.fill();
    this.ctx.shadowBlur = 0;
  }
}

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

    const init = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      particles = Array.from(
        { length: particleCount },
        () => new Particle(canvas, ctx),
      );
    };

    const render = (time: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, '#061a1d');
      gradient.addColorStop(0.4, '#0d2b30');
      gradient.addColorStop(0.8, '#0a3338');
      gradient.addColorStop(1, '#051417');
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
