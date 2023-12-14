/* eslint-disable @next/next/no-img-element */
// src/app/gallery/page.tsx
'use client';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Loading from '@/components/ui/Loading';
import Masonry from '@mui/lab/Masonry';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import SubHeading from '@/components/ui/SubHeading';
import Image from 'next/image'; // Import Image if necessary, adjust accordingly

interface ImageData {
  url: string;
}

export default function Gallery() {
  const [images, setImages] = useState<ImageData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

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

  const handleImageClick = (index: number) => {
    setCurrentSlideIndex(index);
    setLightboxOpen(true);
  };

  const imageVariants = {
    offscreen: { opacity: 0, x: 20 },
    onscreen: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'tween',
        duration: 0.8,
        ease: 'easeInOut',
      },
    },
  };

  const flyInFromRight = {
    offscreen: { x: 100, opacity: 0 },
    onscreen: {
      x: 0,
      opacity: 1,
      transition: {
        type: 'tween',
        duration: 1,
      },
    },
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="container mx-auto p-4">
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true }}
        variants={flyInFromRight}
      >
        <SubHeading title="Photography" iconClass="fas fa-images" />
      </motion.div>
      <Masonry columns={3} spacing={1} className="my-4 justify-between">
        {images.map((img, index) => (
          <motion.div
            key={index}
            className="image-item"
            onClick={() => handleImageClick(index)}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true }}
            variants={imageVariants}
          >
            <img
              src={`${img.url}?q_auto:good,f_auto,c_limit,w_auto,dpr_auto`}
              alt="Photography Image"
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
