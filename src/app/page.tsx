'use client';
//src/components/ui/Heading.tsx
import React, { useState, useEffect } from 'react';
import Heading from '@/components/ui/Heading';
import Image from 'next/image';
import Link from 'next/link';
import Loading from '@/components/ui/Loading';
import SubHeading from '@/components/ui/SubHeading';

type Image = {
  url: string;
};

export default function Home() {
  const [images, setImages] = useState<Image[]>([]);
  const [aiImages, setAiImages] = useState<Image[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchImages() {
      try {
        const response = await fetch('/api/images');
        const aiResponse = await fetch('/api/ai');
        if (!response.ok || !aiResponse.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        const aiData = await aiResponse.json();
        setImages(data);
        setAiImages(aiData);
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
      <div className="card  glass mx-auto px-1 m-1 w-4/5">
        <p className=" sm:text-lg text-center my-4 text-xl p-2">
          Explore the world of images with me. From photography to generative
          AI, I love to create and share. This is my little corner on the
          interwebs. It will improve as I learn stuff. The point was an easy way
          to update content without having to do some hacker type stuff just to
          add a picture. I hope you enjoy!
        </p>
      </div>

      <div className="glass my-6 flex items-center justify-self-center mb-6 p-1 mx-auto bg-background border border-secondary rounded-md">
        <div className="w-4/5 mx-auto">
          <Link href={'/gallery'}>
            <SubHeading title="photos " iconClass="fas fa-images" />
          </Link>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
            {images.slice(0, 6).map((img, index) => (
              <Link href="/gallery" key={index} passHref>
                <div className="border-1 border-buttonText rounded p-1 bg-black mx-auto">
                  <Image
                    src={img.url}
                    alt="Image thumbnail"
                    width={300}
                    height={300}
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="glass my-6 flex items-center justify-self-center mb-6 p-1 mx-auto bg-background border border-buttonText rounded-md">
        <div className="w-4/5 mx-auto">
          <Link href={'/ai'}>
            <SubHeading title="ai images" iconClass="fas fa-robot" />
          </Link>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 border-1">
            {aiImages.slice(0, 6).map((img, index) => (
              <Link href="/ai" key={index} passHref>
                <div className="border-1 border-buttonText rounded p-1 bg-black mx-auto">
                  <Image
                    src={img.url}
                    alt="AI Image thumbnail"
                    width={300}
                    height={300}
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
