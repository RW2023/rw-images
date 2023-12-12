// src/app/ai/page.tsx
'use client';
import React, { useState, useEffect } from 'react';
import Heading from '@/components/ui/Heading';
import Loading from '@/components/ui/Loading';
import Image from 'next/image';
import Masonry from '@mui/lab/Masonry';
import '@mui/lab/Masonry';

interface ImageData {
  url: string;
}

export default function Gallery() {
  const [images, setImages] = useState<ImageData[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchImages() {
      try {
        const response = await fetch('/api/ai/');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data: ImageData[] = await response.json();
        setImages(data);
      } catch (error) {
        console.error('Fetch error:', error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchImages();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="container mx-auto p-4">
      <Heading title="AI Generated" iconClass="fas fa-robot" />
      <Masonry columns={3} spacing={2} className="my-4">
        {images.map((img, index) => (
          <div key={index} className="image-item">
            <Image
              src={`${img.url}?q_auto:good,f_auto,c_limit,w_auto,dpr_auto`}
              alt="AI Generated Image"
              width={300}
              height={300}
              layout="responsive"
              className="rounded border border-stroke-500 bg-black drop-shadow-md m-1 p-1"
            />
          </div>
        ))}
      </Masonry>
    </div>
  );
}
