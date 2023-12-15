'use client';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Heading from '@/components/ui/Heading';
import Image from 'next/image';
import Link from 'next/link';
import Loading from '@/components/ui/Loading';
import SubHeading from '@/components/ui/SubHeading';
import Masonry from '@mui/lab/Masonry';
import Button from '@/components/ui/Button';

// Define animation variants for hover and bounce
const hoverVariant = {
  hover: {
    scale: 1.05,
    transition: {
      type: 'spring',
      stiffness: 300,
    },
  },
};

const fadeInVariant = {
  initial: { opacity: 0, y: -20, transition: { duration: 0.8 } },
  animate: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const fadeInFromRight = {
  offscreen: { opacity: 0, x: 50 },
  onscreen: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'tween',
      duration: 1,
    },
  },
};

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
    <div className="container flex flex-col flex-grow mx-auto min-h-screen">
      <motion.div initial="initial" animate="animate" variants={fadeInVariant}>
        <Heading title="ryan wilson images" />
        <SubHeading title="explore galleries" iconClass="fas fa-images" />
      </motion.div>

      <div className="my-1 mx-auto p-1 lg:p-10 ml-1">
        <div className="bg-base-300 shadow-xl flex flex-col justify-center place-items-start sm:-m-1 rounded glass">
          <div className="card-body text-xl flex flex-col">
            <h2 className="card-title">
              <i className="fa fa-camera-retro"></i> Photography
            </h2>
            <div>
              <div>
                <motion.div
                  initial="offscreen"
                  whileInView="onscreen"
                  viewport={{ once: true }}
                  variants={fadeInFromRight}
                >
                  <p>
                    I am an amateur photographer and I enjoy capturing images
                    with my Olympus Micro 4/3. My photography journey is a
                    personal exploration, where the marvel of technology - the
                    camera - becomes a tool for simple yet meaningful artistic
                    expression. It&apos;s a hobby that brings me joy and a unique way
                    to see the world.
                  </p>
                </motion.div>
                <br />
                <motion.div
                  initial="offscreen"
                  whileInView="onscreen"
                  viewport={{ once: true }}
                  variants={fadeInFromRight}
                >
                  <p>
                    <i className="fa fa-cogs"></i> As a nerd, I&apos;ve always loved
                    technology and machines. Cameras and{' '}
                    <i className="fa fa-brain"></i> generative AI have provided
                    an avenue for us stick figure Picasso&apos;s. These tools allow
                    me, and others like me, to creatively express ourselves in
                    unexpected ways, blending the technical with the artistic.
                  </p>
                </motion.div>
                <br />
                <motion.div
                  initial="offscreen"
                  whileInView="onscreen"
                  viewport={{ once: true }}
                  variants={fadeInFromRight}
                >
                  <p>
                    <i className="fa fa-road"></i> The journey through
                    photography, enhanced by technology, has been enlightening.
                    It&apos;s not just about capturing images; it&apos;s about discovering
                    a new way to express myself. This intersection of technology
                    and art has gently reshaped my perspective on creativity and
                    what it means to engage in the arts in our digital era.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="my-1 mx-auto p-1 lg:p-10 ml-1">
        <SubHeading title="photo gallery" iconClass="fas fa-camera" />
        <Link href={'/gallery'}>
          <Button
            title="Photos"
            modifier="btn-ghost border border-base-300 border-gray-900"
          />
        </Link>
        <Masonry
          columns={3}
          spacing={1}
          className="justify-between glass bg-black"
        >
          {images.slice(0, 6).map((img, index) => (
            <motion.div
              key={index}
              className="mx-auto"
              whileHover="hover"
              variants={hoverVariant}
            >
              <Image
                src={`${img.url}?q_auto:good,f_auto,c_limit,w_auto,dpr_auto`}
                alt="Image thumbnail"
                width={300}
                height={300}
                layout="responsive"
                className="rounded border border-stroke-500 bg-black drop-shadow-md m-1 p-1"
              />
            </motion.div>
          ))}
        </Masonry>
      </div>

      <div className="my-1 mx-auto p-1 justify-center lg:p-10 ml-1">
        <SubHeading title="a i gallery" iconClass="fas fa-robot" />
        <Link href={'/ai'}>
          <Button title="Images" modifier="btn-ghost border border-gray-900" />
        </Link>
        <Masonry
          columns={3}
          spacing={1}
          className="justify-between glass bg-black"
        >
          {aiImages.slice(0, 6).map((img, index) => (
            <motion.div key={index} whileHover="hover" variants={hoverVariant}>
              <Image
                src={`${img.url}?q_auto:good,f_auto,c_limit,w_auto,dpr_auto`}
                alt="AI Image thumbnail"
                width={300}
                height={300}
                layout="responsive"
                className="rounded-md border border-stroke-500 p-1 bg-black drop-shadow-md"
              />
            </motion.div>
          ))}
        </Masonry>
      </div>
    </div>
  );
}
