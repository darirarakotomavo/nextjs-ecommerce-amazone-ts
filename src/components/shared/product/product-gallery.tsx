"use client";

import { useState } from "react";
import Image from "next/image";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
export default function ProductGallery({ images }: { images: string[] }) {
  const [selectedImage, setSelectedImage] = useState(0);
  return (
    <div className="flex gap-2">
      <div className="flex flex-col gap-2 mt-8">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => {
              setSelectedImage(index);
            }}
            onMouseOver={() => {
              setSelectedImage(index);
            }}
            className={`bg-white rounded-lg overflow-hidden ${
              selectedImage === index
                ? "ring-2 ring-blue-500"
                : "ring-1 ring-gray-300"
            }`}
          >
            title={`Sélectionner l'image ${index + 1}`}
            <Image src={image} alt={"product image"} width={48} height={48} />
          </button>
        ))}
      </div>

      <div className="w-full">
        <Zoom>
          <div className="relative h-[500px]">
            <Image
              src={images[selectedImage]}
              alt={"product image"}
              fill
              sizes="90vw"
              className="object-contain"
              priority
            />
          </div>
        </Zoom>
      </div>
    </div>
  );
}
//dans lesson 8 : omission par l'auteur de ;   title={`Sélectionner l'image ${index + 1}`}