'use client';
import React, { useState, useEffect } from 'react';
import Heading from '@/components/ui/Heading';
import SubHeading from '@/components/ui/SubHeading';
import Image from 'next/image';

// Define the image type for your application
type Image = {
  url: string;
};

export default function Home() {
  const [images, setImages] = useState<Image[]>([]);

  useEffect(() => {
    async function fetchImages() {
      try {
        const response = await fetch('/api/images');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setImages(data);
      } catch (error) {
        console.error('Fetch error:', error);
      }
    }

    fetchImages();
  }, []);

  return (
    <div className="container flex flex-col flex-grow h-screen">
      <Heading
        title="Welcome to My Photography"
        iconClass="fas fa-camera-retro"
      />
      <p className="text-center my-4">
        Explore the world through my lens, featuring a diverse range of
        photography styles and subjects.
      </p>

      {/* Thumbnail Sampling */}
      <div className="my-6">
        <Heading title="Featured Images" iconClass="fas fa-star" />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
          {images.slice(0, 6).map((img, index) => (
            <Image
              key={index}
              src={img.url}
              alt="Image thumbnail"
              width={100}
              height={100}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
