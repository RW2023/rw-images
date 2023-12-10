'use client';
//src/components/ui/Heading.tsx
import React, { useState, useEffect } from 'react';
import Heading from '@/components/ui/Heading';
import Image from 'next/image';
import Link from 'next/link';
import Loading from '@/components/ui/Loading'; // Ensure this is the correct path
import SubHeading from '@/components/ui/SubHeading';

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
    <div className="container flex flex-col flex-grow ">
      <Heading
        title="ryan wilson images"
      />
      <p className="text-center my-4 text-xl p-4">
        Explore the world through my lens, featuring a diverse range of
        photography styles and subjects.
      </p>

      <div className="my-6 flex items-center justify-center -mb-6 p-4">
        <div className="w-4/5 mx-auto">
          <Heading title="Featured " iconClass="fas fa-star" />
          <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-1 border-1">
            {images.slice(0, 6).map((img, index) => (
              <Link href="/gallery" key={index} passHref
                className="border-1 p-1 bg-black mx-auto">
                  <Image
                    src={img.url}
                    alt="Image thumbnail"
                    width={200}
                    height={250}
                  />
              </Link>
            ))}
          </div>
          <div>
            <SubHeading title="Ai Gallery" iconClass="fas fa-robot" />
          </div>
        </div>
      </div>
    </div>
  );
}
