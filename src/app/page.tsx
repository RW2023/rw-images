// src/app/page.tsx
'use client';
import React, { useState, useEffect } from 'react';
import Heading from '@/components/ui/Heading';
import Image from 'next/image';
import Link from 'next/link';
import Loading from '@/components/ui/Loading';
import SubHeading from '@/components/ui/SubHeading';
import Masonry from '@mui/lab/Masonry';

type ImageType = {
  url: string;
};

export default function Home() {
  const [images, setImages] = useState<ImageType[]>([]);
  const [aiImages, setAiImages] = useState<ImageType[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchImages() {
      try {
        const response = await fetch('/api/images');
        const aiResponse = await fetch('/api/ai');
        if (!response.ok || !aiResponse.ok) {
          throw new Error('Network response was not ok');
        }
        const imageData = await response.json();
        const aiImageData = await aiResponse.json();
        setImages(imageData);
        setAiImages(aiImageData);
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
    <div className="container flex flex-col flex-grow ">
      <Heading title="ryan wilson images" />

      <div className="my-6 mx-auto p-6">
        <Link href={'/gallery'}>
          <SubHeading title="photos " iconClass="fas fa-images" />
        </Link>
        <Masonry columns={3} spacing={1}>
          {images.slice(0, 9).map((img, index) => (
            <div key={index} className="mx-auto">
              {/* <Link href="/gallery" passHref> */}
                <Image
                  src={`${img.url}?q_auto,f_auto`}
                  alt="Image thumbnail"
                  width={300}
                  height={300}
                  layout="responsive"
                  className="rounded-lg border border-stroke-500 bg-black drop-shadow-md m-1 p-1"
                />
              {/* </Link> */}
            </div>
          ))}
        </Masonry>
      </div>

      <div className="my-6 mx-auto p-6">
        <Link href={'/ai'}>
          <SubHeading title="ai images" iconClass="fas fa-robot" />
        </Link>
        <Masonry columns={3} spacing={1}>
          {aiImages.slice(0, 9).map((img, index) => (
            <div key={index}>
              <Link href="/ai" passHref>
                <Image
                  src={`${img.url}?q_auto,f_auto`}
                  alt="AI Image thumbnail"
                  width={300}
                  height={300}
                  layout="responsive"
                  className="rounded-lg border border-stroke-500 p-1 bg-black drop-shadow-md"
                />
              </Link>
            </div>
          ))}
        </Masonry>
      </div>
    </div>
  );
}
