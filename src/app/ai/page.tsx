/* eslint-disable @next/next/no-img-element */
// src/app/ai/page.tsx
'use client';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import SubHeading from '@/components/ui/SubHeading';
import Loading from '@/components/ui/Loading';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import Masonry from '@mui/lab/Masonry';

interface ImageData {
  url: string;
}

// Define the hover animation variants
const hoverVariant = {
  hover: {
    scale: 1.05,
    transition: {
      type: 'spring',
      stiffness: 300,
    },
  },
};

export default function Gallery() {
  const [images, setImages] = useState<ImageData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

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

  const handleImageClick = (index: number) => {
    setCurrentSlideIndex(index);
    setLightboxOpen(true);
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="container mx-auto p-4">
      <SubHeading title="AI Generated" iconClass="fas fa-robot" />
      <Masonry columns={3} spacing={1} className="my-4 justify-between">
        {images.map((img, index) => (
          <motion.div
            key={index}
            className="image-item"
            onClick={() => handleImageClick(index)}
            whileHover="hover"
            variants={hoverVariant}
          >
            <img
              src={`${img.url}?q_auto:good,f_auto,c_limit,w_auto,dpr_auto`}
              alt="AI Generated Image"
              className="rounded border border-stroke-500 bg-black drop-shadow-md m-1 p-1"
              style={{ width: '100%', height: 'auto' }}
            />
          </motion.div>
        ))}
      </Masonry>
      {lightboxOpen && (
        <Lightbox
          open={lightboxOpen}
          close={() => setLightboxOpen(false)}
          slides={images.map((img) => ({ src: img.url }))}
          index={currentSlideIndex}
        />
      )}
    </div>
  );
}
