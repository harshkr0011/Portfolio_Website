import React from 'react';
import Image from 'next/image';

const Logo = ({ className }: { className?: string }) => (
  <Image
    src="/Favicon.jpg"
    alt="Logo"
    width={50}
    height={50}
    className={className}
    style={{ borderRadius: 8 }} // Optional: to match the previous rounded corners
    priority
  />
);

export default Logo;