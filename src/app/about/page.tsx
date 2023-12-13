import Heading from '@/components/ui/Heading';
import SubHeading from '@/components/ui/SubHeading';
import React from 'react';

export default function About() {
  return (
    <div className="bg-base-200 min-h-screen">
      <div className="container mx-auto p-6">
        <Heading title="About" iconClass="fas fa-info" />

        <div className="card shadow-xl mb-4 glass bg-black">
          <div className="glass card-body text-headline">
            <SubHeading
              title="The Journey of Capturing Moments"
              iconClass="fas fa-camera"
            />
            <p>
              This site is my digital canvas - a central spot on the internet
              for showcasing my photography. It&apos;s born from a passion for
              capturing the fleeting moments and the beauty of the world through
              the lens.
            </p>
          </div>
        </div>

        <div className="card  shadow-xl mb-4 glass bg-black">
          <div className="card-body">
            <SubHeading
              title="A Blend of Art and Technology"
              iconClass="fas fa-paint-brush"
            />
            <p>
              Beyond just photographs, this site represents a journey in digital
              artistry, combining creative expression with technological
              innovation. Each image tells a story, capturing emotions and
              landscapes in unique compositions.
            </p>
          </div>
        </div>

        <div className="card shadow-xl mb-4 glass bg-black">
          <div className="card-body">
            <SubHeading
              title="Coding Meets Creativity"
              iconClass="fas fa-code"
            />
            <p>
              Building this site has been a personal exploration in web
              development and design, intertwining my coding practice with my
              passion for photography, demonstrating how technology can enhance
              artistic expression.
            </p>
          </div>
        </div>

        <div className="card bg-black shadow-xl mb-6 glass">
          <div className="card-body">
            <SubHeading
              title="A Continuous Evolution"
              iconClass="fas fa-cogs"
            />
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
