"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

const ThreeDShape = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      container.offsetWidth / container.offsetHeight,
      0.1,
      1000
    );
    camera.position.z = 50;

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(container.offsetWidth, container.offsetHeight);
    container.appendChild(renderer.domElement);

    // Book Geometry
    const bookThickness = 4;
    const bookLength = 16;
    const bookHeight = 24;

    const geometry = new THREE.BoxGeometry(bookLength, bookHeight, bookThickness);

    // Texture for the Book Cover
    const createBookCoverTexture = () => {
      const canvas = document.createElement("canvas");
      canvas.width = 512;
      canvas.height = 512;
      const ctx = canvas.getContext("2d");

      if (ctx) {
        // Background color
        ctx.fillStyle = "#1e293b";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Circular image
        const image = new Image();
        image.src = "/myself1-img.jpg";
        image.onload = () => {
          ctx.save();
          const radius = 100;
          const centerX = canvas.width / 2;
          const centerY = canvas.height / 2 - 50;

          ctx.beginPath();
          ctx.arc(centerX, centerY, radius, 0, Math.PI * 2, true);
          ctx.closePath();
          ctx.clip();
          ctx.drawImage(image, centerX - radius, centerY - radius, radius * 2, radius * 2);
          ctx.restore();

          // Text
          ctx.fillStyle = "#ffffff";
          ctx.font = "bold 32px Arial";
          ctx.textAlign = "center";
          ctx.fillText("Maanit's Book", canvas.width / 2, 80);

          frontCoverTexture.needsUpdate = true;
        };
      }

      const texture = new THREE.CanvasTexture(canvas);
      return texture;
    };

    // Assign Textures
    const textureLoader = new THREE.TextureLoader();
    const frontCoverTexture = createBookCoverTexture();
    const backCoverTexture = new THREE.MeshBasicMaterial({ color: 0x555555 });
    const spineTexture = new THREE.MeshBasicMaterial({ color: 0x333333 });

    const materials = [
      spineTexture, 
      spineTexture, 
      backCoverTexture, 
      backCoverTexture, 
      new THREE.MeshBasicMaterial({ map: frontCoverTexture }), 
      backCoverTexture, 
    ];

    const book = new THREE.Mesh(geometry, materials);
    scene.add(book);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xffffff, 1);
    pointLight.position.set(20, 20, 20);
    scene.add(pointLight);

    // Handle Window Resize
    const handleResize = () => {
      camera.aspect = container.offsetWidth / container.offsetHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.offsetWidth, container.offsetHeight);
    };
    window.addEventListener("resize", handleResize);

    // Animation (Revolving Book)
    const animate = () => {
      requestAnimationFrame(animate);
      book.rotation.y += 0.01;
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      container.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={containerRef} style={{ width: "100%", height: "500px" }} />;
};

export default ThreeDShape;