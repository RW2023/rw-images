'use client';
//src/components/ui/Heading.tsx
import React, { useState, useEffect } from 'react';
import Heading from '@/components/ui/Heading';
import Image from 'next/image';
import Link from 'next/link';
import Loading from '@/components/ui/Loading'; // Ensure this is the correct path

type Image = {
  url: string;
};

export default function Home() {
  const [images, setImages] = useState<Image[]>([]);
  const [isLoading, setIsLoading] = useState(true); // Initialize loading state

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
      } finally {
        setIsLoading(false); // Set loading to false after fetching data
      }
    }

    fetchImages();
  }, []);

  if (isLoading) {
    return <Loading />; // Show loading component while fetching data
  }

  return (
    <div className="container flex flex-col flex-grow h-screen">
      <Heading
        title="Welcome to My Photography Portfolio"
        iconClass="fas fa-camera-retro"
      />
      <p className="text-center my-4">
        Explore the world through my lens, featuring a diverse range of
        photography styles and subjects.
      </p>

      <div className="my-6 h-screen flex items-center justify-center">
        <div className="w-4/5 mx-auto">
          <Heading title="Featured Images" iconClass="fas fa-star" />
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-1 border-1 ">
            {images.slice(0, 8).map((img, index) => (
              <Link href="/gallery" key={index} passHref
                className="border-1 p-1 bg-black mx-auto">
                  <Image
                    src={img.url}
                    alt="Image thumbnail"
                    width={150}
                    height={150}
                  />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
