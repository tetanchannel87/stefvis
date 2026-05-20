"use client";
import { useRef, useEffect, type HTMLAttributes } from "react";

interface SpotlightConfig {
  radius?: number;
  brightness?: number;
  color?: string;
  smoothing?: number;
}

const useSpotlightEffect = (config: SpotlightConfig) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    // не активируем на тач-устройствах — не нужен белый блик при тапе
    if (
      typeof window === "undefined" ||
      !window.matchMedia("(pointer: fine)").matches
    ) {
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let mouseX = -1000;
    let mouseY = -1000;
    let lastX = -1000;
    let lastY = -1000;
    let needsRedraw = false;
    let rafId: number | null = null;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      needsRedraw = true;
      schedule();
    };

    const handleMouseMove = (event: MouseEvent) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
      needsRedraw = true;
      schedule();
    };

    const handleMouseLeave = () => {
      mouseX = -1000;
      mouseY = -1000;
      needsRedraw = true;
      schedule();
    };

    const hexToRgb = (hex: string) => {
      const bigint = parseInt(hex.slice(1), 16);
      const r = (bigint >> 16) & 255;
      const g = (bigint >> 8) & 255;
      const b = bigint & 255;
      return `${r},${g},${b}`;
    };
    const rgbColor = hexToRgb(config.color || "#ffffff");
    const brightness = config.brightness || 0.15;
    const radius = config.radius || 200;

    const draw = () => {
      rafId = null;
      if (!needsRedraw && mouseX === lastX && mouseY === lastY) return;
      needsRedraw = false;
      lastX = mouseX;
      lastY = mouseY;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      if (mouseX === -1000 || mouseY === -1000) return;

      const gradient = ctx.createRadialGradient(
        mouseX, mouseY, 0,
        mouseX, mouseY, radius,
      );
      gradient.addColorStop(0, `rgba(${rgbColor}, ${brightness})`);
      gradient.addColorStop(1, "rgba(0,0,0,0)");

      // рисуем только в области под градиентом, не весь экран
      ctx.fillStyle = gradient;
      ctx.fillRect(mouseX - radius, mouseY - radius, radius * 2, radius * 2);
    };

    const schedule = () => {
      if (rafId == null) rafId = requestAnimationFrame(draw);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      if (rafId != null) cancelAnimationFrame(rafId);
    };
  }, [config.radius, config.brightness, config.color]);

  return canvasRef;
};

interface ComponentProps extends HTMLAttributes<HTMLCanvasElement> {
  config?: SpotlightConfig;
}

export const Component = ({
  config = {},
  className,
  ...rest
}: ComponentProps) => {
  const spotlightConfig = {
    radius: 200,
    brightness: 0.15,
    color: "#ffffff",
    smoothing: 0.1,
    ...config,
  };

  const canvasRef = useSpotlightEffect(spotlightConfig);

  return (
    <canvas
      ref={canvasRef}
      className={`fixed top-0 left-0 pointer-events-none z-[9999] w-full h-full ${className ?? ""}`}
      {...rest}
    />
  );
};

export default Component;
