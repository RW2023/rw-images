'use client';
import Heading from '@/components/ui/Heading';
import React from 'react';

export default function About() {
  return (
    <div className="bg-base-200 min-h-screen">
      <div className="container mx-auto p-6">
        {/* Main Heading */}
       <Heading title="About Mile Master" iconClass="fas fa-info-circle" />

        {/* Introduction Section */}
        <div className="card bg-base-100 shadow-xl mb-4">
          <div className="card-body">
            <h2 className="card-title text-4xl">
              A Practical Solution for Drivers
            </h2>
            <p>
              Mileage Master was born from a simple need - to eliminate the
              hassle of using a pen and paper for recording hub odometer
                readings during pre-trip inspections. It&apos;s a straightforward,
              no-frills app designed by a truck driver, for truck drivers.
            </p>
          </div>
        </div>

        {/* The Core Idea Section */}
        <div className="card bg-base-100 shadow-xl mb-4">
          <div className="card-body">
            <h2 className="card-title text-4xl">The Core Idea</h2>
            <p>
              The core idea of Mileage Master is to make the daily routine of
              recording mileage as easy as possible. It not only helps in
              logging the start and end readings but also tracks the distance
              covered, especially when pulling a trailer.
            </p>
          </div>
        </div>

        {/* Coding Practice and Problem Solving Section */}
        <div className="card bg-base-100 shadow-xl mb-4">
          <div className="card-body">
            <h2 className="card-title text-4xl">
              Coding Practice Meets Problem Solving
            </h2>
            <p>
              This app is also a personal journey in coding practice, blending
              learning with solving real-world problems. It stands as a
              testament to the power of technology in simplifying everyday
              tasks.
            </p>
          </div>
        </div>

        {/* Looking Forward Section */}
        <div className="card bg-base-100 shadow-xl mb-6">
          <div className="card-body">
            <h2 className="card-title text-4xl">Looking Forward</h2>
            <p>
              As Mileage Master evolves, the goal is to continue refining its
                capabilities, enhancing its utility for all truck drivers. It&apos;s
                more than just an app; it&apos;s a growing solution aimed at making a
                driver&apos;s life on the road a bit easier.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
