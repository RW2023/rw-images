'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Heading from '@/components/ui/Heading';

// Define an interface for image data
interface ImageData {
  url: string;
  // Include other properties as needed
}

export default function Gallery() {
  const [images, setImages] = useState<ImageData[]>([]);

  useEffect(() => {
    async function fetchImages() {
      try {
        const response = await fetch('/api/images');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data: ImageData[] = await response.json();
        setImages(data);
      } catch (error) {
        console.error('Fetch error:', error);
      }
    }

    fetchImages();
  }, []);

  return (
    <div className="container mx-auto p-4 h-screen">
      <Heading title="Gallery" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((img, index) => (
          <div key={index} className="relative hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl">
                <Image
                  src={`${img.url}?q_auto,f_auto`}
                  layout="responsive"
                  width={300}
                  height={200}
                  alt="Gallery Image"
                  className="aspect-w-16 aspect-h-9 bg-black p-1 border-2 border-stroke rounded-md"
                />
            {/* Additional image details */}
          </div>
        ))}
      </div>
    </div>
  );
}
