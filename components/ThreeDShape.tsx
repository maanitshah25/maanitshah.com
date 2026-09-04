"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

const ORANGE = "#f97316";

// Draws the front cover: title + tagline, no photo.
const createFrontCoverTexture = () => {
  const canvas = document.createElement("canvas");
  canvas.width = 800;
  canvas.height = 1200;
  const ctx = canvas.getContext("2d");

  if (ctx) {
    const { width, height } = canvas;

    // Background
    const bg = ctx.createLinearGradient(0, 0, 0, height);
    bg.addColorStop(0, "#111827");
    bg.addColorStop(1, "#080b13");
    ctx.fillStyle = bg;
    ctx.fillRect(0, 0, width, height);

    // Border frame
    ctx.strokeStyle = ORANGE;
    ctx.lineWidth = 6;
    ctx.strokeRect(28, 28, width - 56, height - 56);
    ctx.lineWidth = 1.5;
    ctx.strokeRect(46, 46, width - 92, height - 92);

    // Decorative opening quote mark
    ctx.fillStyle = "rgba(249, 115, 22, 0.18)";
    ctx.textAlign = "center";
    ctx.font = "italic bold 260px Georgia, 'Times New Roman', serif";
    ctx.fillText("“", width / 2, height * 0.36);

    // Name
    ctx.fillStyle = "#ffffff";
    ctx.textAlign = "center";
    ctx.font = "bold 88px Georgia, 'Times New Roman', serif";
    ctx.fillText("MAANIT", width / 2, height * 0.46);
    ctx.fillText("SHAH", width / 2, height * 0.46 + 100);

    // Divider
    ctx.strokeStyle = ORANGE;
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(width / 2 - 90, height * 0.46 + 150);
    ctx.lineTo(width / 2 + 90, height * 0.46 + 150);
    ctx.stroke();

    // Tagline
    ctx.fillStyle = ORANGE;
    ctx.font = "italic 42px Georgia, 'Times New Roman', serif";
    wrapCenteredText(
      ctx,
      "Compiling ideas into impact",
      width / 2,
      height * 0.46 + 220,
      width - 200,
      54
    );
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.needsUpdate = true;
  return texture;
};

// Simple centered word-wrap helper for canvas text.
function wrapCenteredText(
  ctx: CanvasRenderingContext2D,
  text: string,
  x: number,
  y: number,
  maxWidth: number,
  lineHeight: number
) {
  const words = text.split(" ");
  const lines: string[] = [];
  let line = "";

  words.forEach((word, i) => {
    const testLine = line + word + " ";
    if (ctx.measureText(testLine).width > maxWidth && i > 0) {
      lines.push(line.trim());
      line = word + " ";
    } else {
      line = testLine;
    }
  });
  lines.push(line.trim());

  const startY = y - ((lines.length - 1) * lineHeight) / 2;
  lines.forEach((l, i) => ctx.fillText(l, x, startY + i * lineHeight));
}

const ThreeDShape = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;

    // Fall back to a sane aspect/size if the container isn't laid out yet
    // (e.g. mounted while hidden) — the ResizeObserver below corrects this
    // as soon as real dimensions are available.
    const initialWidth = container.offsetWidth || 300;
    const initialHeight = container.offsetHeight || 320;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      50,
      initialWidth / initialHeight,
      0.1,
      1000
    );
    camera.position.z = 42;

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });
    renderer.setClearColor(0x000000, 0);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(initialWidth, initialHeight);
    renderer.domElement.style.cursor = "grab";
    renderer.domElement.style.touchAction = "none";
    container.appendChild(renderer.domElement);

    // Book Geometry
    const bookLength = 20;
    const bookHeight = 30;
    const bookThickness = 5;

    const geometry = new THREE.BoxGeometry(
      bookLength,
      bookHeight,
      bookThickness
    );

    // Materials: [+x, -x, +y, -y, +z (front cover), -z (back cover)]
    const frontCoverTexture = createFrontCoverTexture();
    const frontMaterial = new THREE.MeshStandardMaterial({
      map: frontCoverTexture,
    });
    const backMaterial = new THREE.MeshStandardMaterial({ color: 0x4b5563 });
    const spineMaterial = new THREE.MeshStandardMaterial({ color: 0x1f2937 });
    const edgeMaterial = new THREE.MeshStandardMaterial({ color: 0xe7e5df });

    const materials = [
      spineMaterial,
      spineMaterial,
      edgeMaterial,
      edgeMaterial,
      frontMaterial,
      backMaterial,
    ];

    const book = new THREE.Mesh(geometry, materials);
    book.rotation.x = -0.12;
    book.rotation.y = -0.4;
    scene.add(book);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);

    const keyLight = new THREE.PointLight(0xffffff, 1.1);
    keyLight.position.set(25, 20, 30);
    scene.add(keyLight);

    const fillLight = new THREE.PointLight(0xffffff, 0.4);
    fillLight.position.set(-25, -10, 20);
    scene.add(fillLight);

    // Handle Window Resize
    const handleResize = () => {
      const { offsetWidth, offsetHeight } = container;
      if (offsetWidth === 0 || offsetHeight === 0) return;
      camera.aspect = offsetWidth / offsetHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(offsetWidth, offsetHeight);
    };
    window.addEventListener("resize", handleResize);

    // Guards against mounting at 0x0 (e.g. container hidden/laid out late)
    // and keeps the canvas in sync if the container's own size changes.
    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(container);

    // Drag-to-orbit interaction
    let isDragging = false;
    let previousX = 0;
    let previousY = 0;
    const dragSpeed = 0.008;
    const idleSpinSpeed = 0.006;
    const MAX_TILT = 0.9;

    const onPointerDown = (e: PointerEvent) => {
      isDragging = true;
      previousX = e.clientX;
      previousY = e.clientY;
      renderer.domElement.style.cursor = "grabbing";
      renderer.domElement.setPointerCapture(e.pointerId);
    };

    const onPointerMove = (e: PointerEvent) => {
      if (!isDragging) return;
      const deltaX = e.clientX - previousX;
      const deltaY = e.clientY - previousY;
      previousX = e.clientX;
      previousY = e.clientY;

      book.rotation.y += deltaX * dragSpeed;
      book.rotation.x += deltaY * dragSpeed;
      book.rotation.x = Math.max(
        -MAX_TILT,
        Math.min(MAX_TILT, book.rotation.x)
      );
    };

    const onPointerUp = (e: PointerEvent) => {
      isDragging = false;
      renderer.domElement.style.cursor = "grab";
      if (renderer.domElement.hasPointerCapture(e.pointerId)) {
        renderer.domElement.releasePointerCapture(e.pointerId);
      }
    };

    renderer.domElement.addEventListener("pointerdown", onPointerDown);
    renderer.domElement.addEventListener("pointermove", onPointerMove);
    renderer.domElement.addEventListener("pointerup", onPointerUp);
    renderer.domElement.addEventListener("pointercancel", onPointerUp);

    // Animation (auto-rotates when idle, pauses while dragging)
    let frameId: number;
    const animate = () => {
      frameId = requestAnimationFrame(animate);
      if (!isDragging) {
        book.rotation.y += idleSpinSpeed;
      }
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("resize", handleResize);
      resizeObserver.disconnect();
      renderer.domElement.removeEventListener("pointerdown", onPointerDown);
      renderer.domElement.removeEventListener("pointermove", onPointerMove);
      renderer.domElement.removeEventListener("pointerup", onPointerUp);
      renderer.domElement.removeEventListener("pointercancel", onPointerUp);
      container.removeChild(renderer.domElement);

      geometry.dispose();
      frontMaterial.dispose();
      backMaterial.dispose();
      spineMaterial.dispose();
      edgeMaterial.dispose();
      frontCoverTexture.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <section className="py-12 md:py-28">
      <p className="text-orange-500 text-xs md:text-sm font-medium uppercase tracking-widest font-serif">
      </p>
      <h3 className="text-2xl md:text-3xl font-semibold font-serif text-black dark:text-white mt-1 mb-2">
      </h3>
      <p className="text-sm md:text-base mb-4 font-serif text-black dark:text-white/70 max-w-xl">
      </p>
      <div
        ref={containerRef}
        className="w-full h-[320px] md:h-[440px] flex items-center justify-center overflow-hidden relative select-none"
      />
    </section>
  );
};

export default ThreeDShape;
