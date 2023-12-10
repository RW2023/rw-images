'use client';
import React, { useState, useEffect } from 'react';
import Heading from '@/components/ui/Heading';
import Loading from '@/components/ui/Loading';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

interface ImageData {
  url: string;
}

export default function Gallery() {
  const [images, setImages] = useState<ImageData[]>([]);
  const [isLoading, setIsLoading] = useState(true);

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
  }, []);

  const galleryImages = images.map((img) => ({
    original: `${img.url}?q_auto,f_auto`,
    thumbnail: `${img.url}?q_auto,f_auto&w=100`,
  }));

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="container mx-auto p-4">
      <Heading title="Gallery" iconClass="fas fa-images" />
      <ImageGallery items={galleryImages} thumbnailPosition="left" />
    </div>
  );
}
