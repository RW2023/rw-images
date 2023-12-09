'use client';
import { FC } from 'react';

const Loading: FC = (): JSX.Element => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <p className="text-3xl">
          <span className="m-2">
            <span className="loading loading-bars loading-lg"></span>
          </span>{' '}
          Loading.....The gallery will load momentarily☝🏾
          Lots of pics. any second now...⏱️
        </p>
      </div>
    </div>
  );
};

export default Loading;
