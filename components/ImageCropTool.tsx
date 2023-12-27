"use client";

import { useState } from "react";
import Image from "next/image";

const ImageCropTool = ({ src }: { src: string }) => {
  const [position, setPosition] = useState({ x: 0, y: 0, scale: 1 });

  const startDrag = (e: { clientX: any; clientY: any }) => {
    // Store the initial cursor position and image position
    const initialX = e.clientX;
    const initialY = e.clientY;
    const initialPosX = position.x;
    const initialPosY = position.y;

    const drag = (e: { clientX: number; clientY: number }) => {
      // Calculate the new position
      const newX = initialPosX + e.clientX - initialX;
      const newY = initialPosY + e.clientY - initialY;

      // Update the position state
      setPosition({ x: newX, y: newY, scale: position.scale });
    };

    const stopDrag = () => {
      // Remove the event listeners when dragging stops
      window.removeEventListener("mousemove", drag);
      window.removeEventListener("mouseup", stopDrag);
    };

    // Add event listeners for mouse movement and release
    window.addEventListener("mousemove", drag);
    window.addEventListener("mouseup", stopDrag);
  };

  const scaleImage = (deltaScale: number) => {
    setPosition((prevPosition) => ({
      ...prevPosition,
      scale: Math.max(prevPosition.scale + deltaScale, 0.1), // Prevent scaling to 0 or negative
    }));
  };

  return (
    <div
      className="relative w-[600px] h-[500px] overflow-hidden bg-slate-700"
      onMouseDown={startDrag}
    >
      <div
        style={{
          height: "120%",
          width: "120%",
          transform: `translate(${position.x}px, ${position.y}px) scale(${position.scale})`,
          transformOrigin: "top left",
          position: "absolute",
          cursor: "grab",
        }}
      >
        <Image src={src} alt="Croppable image" layout="fill" objectFit="none" />
      </div>
      <button onClick={() => scaleImage(-0.1)} className="absolute z-10">
        Scale Down
      </button>

      <button onClick={() => scaleImage(0.1)} className="absolute z-10 mt-8">
        Scale Up
      </button>
    </div>
  );
};

export default ImageCropTool;
