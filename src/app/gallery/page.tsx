'use client';
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Heading from '@/components/ui/Heading';
import Loading from '@/components/ui/Loading';
import lightGallery from 'lightgallery';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-thumbnail.css';
import 'lightgallery/css/lg-zoom.css';

interface ImageData {
  url: string;
}

export default function Gallery() {
  const [images, setImages] = useState<ImageData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const galleryRef = useRef<HTMLDivElement>(null);

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
      } finally {
        setIsLoading(false);
      }
    }

    fetchImages();

    if (galleryRef.current) {
      const lgOptions = {
        speed: 500,
        loop: true,
        enableDrag: true,
        showAfterLoad: true,
        download: false,
        thumbnail: true,
        zoom: true,
      };

      lightGallery(galleryRef.current, {
        ...lgOptions,
        // Conditionally add enableTouch if it's supported in the version you are using
        // enableTouch: true,
      });
    }
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="container mx-auto p-4">
      <Heading title="Gallery" iconClass='fas fa-images' />
      <div
        ref={galleryRef}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
      >
        {images.map((img, index) => (
          <a key={index} href={img.url} className="block">
            <Image
              src={`${img.url}?q_auto,f_auto`}
              layout="responsive"
              width={300}
              height={200}
              alt="Gallery Image"
              className="aspect-w-16 aspect-h-9 bg-black p-1 border-2 border-stroke rounded-md"
            />
          </a>
        ))}
      </div>
    </div>
  );
}
