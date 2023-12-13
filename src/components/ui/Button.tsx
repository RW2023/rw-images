import React from 'react';


function Button({ title, modifier }: { title: string, modifier: string }) {
  const baseClassName =
    'btn btn-ghost rounded-md m-2 mb-4 border-1 border-headline mx-auto justify-items-center flex';
  const className = `${baseClassName} ${modifier}`;

  return (
    <button type="submit" className={className}>
      {title}
    </button>
  );
}

export default Button;
