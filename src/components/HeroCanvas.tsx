"use client";

import { useEffect, useRef, useState, useCallback } from "react";

const TOTAL_FRAMES = 80;
const IMAGE_PATH = "/hero-sequence/frame_";
const FRAME_DURATION = 1000 / 12; // ~12fps for slow, immersive cinematic feel

export default function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const currentFrameRef = useRef(0);
  const resizeRafRef = useRef<number>(0);
  const loopRafRef = useRef<number>(0);
  const lastTimeRef = useRef(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [loadProgress, setLoadProgress] = useState(0);

  // Build frame URL
  const getFrameUrl = useCallback((index: number) => {
    const frameNumber = String(index + 1).padStart(3, "0");
    return `${IMAGE_PATH}${frameNumber}.jpg`;
  }, []);

  // Draw frame with responsive scaling logic
  const drawFrame = useCallback((frameIndex: number) => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    const img = imagesRef.current[frameIndex];
    if (!canvas || !ctx || !img) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const canvasRatio = canvas.width / canvas.height;
    const imgRatio = img.naturalWidth / img.naturalHeight;

    let drawWidth: number;
    let drawHeight: number;
    let drawX: number;
    let drawY: number;

    const isMobile = canvas.width < 768;
    let zoom = 1;

    if (isMobile) {
      zoom = 1.55; // Zoom in 55% on mobile to hide watermark and bring pizza closer
      
      // On mobile, show the entire image width so it doesn't get cut off
      if (imgRatio > canvasRatio) {
        drawWidth = canvas.width;
        drawHeight = canvas.width / imgRatio;
      } else {
        drawHeight = canvas.height;
        drawWidth = canvas.height * imgRatio;
      }
    } else {
      zoom = 1.15; // Zoom in 15% on desktop to just crop the Veo watermark
      
      // On desktop, use object-fit: cover to fill the screen
      if (imgRatio > canvasRatio) {
        drawHeight = canvas.height;
        drawWidth = canvas.height * imgRatio;
      } else {
        drawWidth = canvas.width;
        drawHeight = canvas.width / imgRatio;
      }
    }

    // Apply zoom and calculate centering
    drawWidth *= zoom;
    drawHeight *= zoom;
    drawX = (canvas.width - drawWidth) / 2;
    drawY = (canvas.height - drawHeight) / 2;

    // Fill background with same dark color as brand to blend seamlessly
    ctx.fillStyle = "#050505";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    ctx.drawImage(img, drawX, drawY, drawWidth, drawHeight);
  }, []);

  // Preload all images
  useEffect(() => {
    let loadedCount = 0;
    const images: HTMLImageElement[] = [];

    for (let i = 0; i < TOTAL_FRAMES; i++) {
      const img = new Image();
      img.src = getFrameUrl(i);
      img.onload = () => {
        loadedCount++;
        setLoadProgress(Math.round((loadedCount / TOTAL_FRAMES) * 100));
        if (loadedCount === TOTAL_FRAMES) {
          setIsLoaded(true);
          drawFrame(0);
        }
      };
      images.push(img);
    }

    imagesRef.current = images;
  }, [getFrameUrl, drawFrame]);

  // Auto-play loop animation
  useEffect(() => {
    if (!isLoaded) return;

    // Entry fade-in
    const initGSAP = async () => {
      const { gsap } = await import("gsap");
      gsap.fromTo(
        canvasRef.current,
        { opacity: 0, scale: 1.05 },
        { opacity: 1, scale: 1, duration: 2.5, ease: "power4.out" }
      );
    };
    initGSAP();

    // Frame loop
    const animate = (timestamp: number) => {
      if (!lastTimeRef.current) lastTimeRef.current = timestamp;
      const elapsed = timestamp - lastTimeRef.current;

      if (elapsed >= FRAME_DURATION) {
        lastTimeRef.current = timestamp - (elapsed % FRAME_DURATION);
        currentFrameRef.current = (currentFrameRef.current + 1) % TOTAL_FRAMES;
        drawFrame(currentFrameRef.current);
      }

      loopRafRef.current = requestAnimationFrame(animate);
    };

    loopRafRef.current = requestAnimationFrame(animate);

    return () => {
      if (loopRafRef.current) cancelAnimationFrame(loopRafRef.current);
    };
  }, [isLoaded, drawFrame]);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      if (resizeRafRef.current) cancelAnimationFrame(resizeRafRef.current);
      resizeRafRef.current = requestAnimationFrame(() => {
        drawFrame(currentFrameRef.current);
      });
    };

    window.addEventListener("resize", handleResize, { passive: true });
    return () => {
      window.removeEventListener("resize", handleResize);
      if (resizeRafRef.current) cancelAnimationFrame(resizeRafRef.current);
    };
  }, [drawFrame]);

  return (
    <section id="inicio" ref={containerRef} className="relative w-full h-screen overflow-hidden bg-brand-darker">
      {/* Preloader */}
      {!isLoaded && (
        <div className="absolute inset-0 z-30 flex flex-col items-center justify-center bg-brand-darker">
          <div className="text-center space-y-6">
            <h2 className="text-3xl font-serif font-bold text-white neon-text-red animate-pulse">
              Os Brothers
            </h2>
            <div className="w-64 h-1.5 bg-zinc-800 rounded-full overflow-hidden">
              <div
                className="h-full preloader-bar rounded-full transition-all duration-300"
                style={{ width: `${loadProgress}%` }}
              />
            </div>
            <p className="text-zinc-500 text-sm font-medium">
              Preparando sua experiência... {loadProgress}%
            </p>
          </div>
        </div>
      )}

      {/* Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ opacity: isLoaded ? 1 : 0 }}
      />

      {/* Subtle bottom gradient only */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-brand-dark to-transparent pointer-events-none z-10" />
    </section>
  );
}
