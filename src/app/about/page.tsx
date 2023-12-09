import Heading from '@/components/ui/Heading';
import React from 'react';

export default function About() {
  return (
    <div className="bg-base-200 min-h-screen">
      <div className="container mx-auto p-6">
        <Heading title="About the Gallery" iconClass="fas fa-camera-retro" />

        <div className="card bg-base-100 shadow-xl mb-4">
          <div className="card-body">
            <h2 className="card-title text-4xl">
              The Journey of Capturing Moments
            </h2>
            <p>
              This site is my digital canvas - a central spot on the internet
              for showcasing my photography. It&apos;s born from a passion for
              capturing the fleeting moments and the beauty of the world through
              the lens.
            </p>
          </div>
        </div>

        <div className="card bg-base-100 shadow-xl mb-4">
          <div className="card-body">
            <h2 className="card-title text-4xl">
              A Blend of Art and Technology
            </h2>
            <p>
              Beyond just photographs, this site represents a journey in digital
              artistry, combining creative expression with technological
              innovation. Each image tells a story, capturing emotions and
              landscapes in unique compositions.
            </p>
          </div>
        </div>

        <div className="card bg-base-100 shadow-xl mb-4">
          <div className="card-body">
            <h2 className="card-title text-4xl">Coding Meets Creativity</h2>
            <p>
              Building this site has been a personal exploration in web
              development and design, intertwining my coding practice with my
              passion for photography, demonstrating how technology can enhance
              artistic expression.
            </p>
          </div>
        </div>

        <div className="card bg-base-100 shadow-xl mb-6">
          <div className="card-body">
            <h2 className="card-title text-4xl">A Continuous Evolution</h2>
            <p>
              As my skills in both photography and coding grow, I look forward
              to evolving this site further. It&apos;s more than just a gallery;
              it&apos;s a growing portfolio reflecting my journey as a
              photographer and web developer.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
