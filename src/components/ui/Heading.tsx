// src/Components/UI/Heading.tsx
'use client';
import React, { FC } from 'react';

interface Props {
  title: string;
  iconClass?: string;
}

// Function to convert text to title case
const toTitleCase = (text: string): string =>
  text.replace(
    /\w\S*/g,
    (word) => word.charAt(0).toUpperCase() + word.substr(1).toLowerCase(),
  );

const Heading: FC<Props> = ({ title, iconClass }): JSX.Element => {
  const titleCaseText = toTitleCase(title);

  return (
    <h1 className="text-center font-poppins text-4xl m-2 font-bold flex justify-center items-center">
      {iconClass && <i className={`${iconClass} mr-2`}></i>}
      {titleCaseText}
    </h1>
  );
};

export default Heading;
