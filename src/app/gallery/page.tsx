'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

// Define an interface for image data
interface ImageData {
  url: string;
  // Include other properties as needed
}

export default function Gallery() {
  const [images, setImages] = useState<ImageData[]>([]);
  const [category, setCategory] = useState('all'); // all, nature, urban, etc.

  useEffect(() => {
    // Fetch images based on category
    // Placeholder for actual fetch function
    // Example: setImages(fetchImages(category));
  }, [category]);

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-center space-x-4 mb-4">
        {/* Buttons or links for categories */}
        <button type="submit" onClick={() => setCategory('nature')}>
          Nature
        </button>
        <button type="submit" onClick={() => setCategory('urban')}>
          Urban
        </button>
        {/* Add more categories as needed */}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((img, index) => (
          <div key={index} className="relative">
            <Image
              src={img.url}
              layout="responsive"
              width={300}
              height={200}
              alt="Gallery Image"
            />
            {/* Additional image details */}
          </div>
        ))}
      </div>
    </div>
  );
}
