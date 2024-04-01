import React from 'react';
import Image from 'next/image';

interface ImageProps {
    src: string;
    alt?: string; // Optional alt text for accessibility
    width?: number;
    height?: number;
    // layout?: 'fill' | 'fixed' | 'intrinsic' | 'responsive'; // Optional layout options
  }

const AvatarRounded : React.FC<ImageProps> = ({ src, alt="Image", width, height, /*layout*/ } : ImageProps) => {
  return (
    <button className="ml-4">
      <Image
        className="rounded-full"
        src={src}
        alt={alt}
        height={height}
        width={width}
      />
    </button>
  );
};

export default AvatarRounded;